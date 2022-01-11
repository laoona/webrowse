import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { IoAddOutline } from 'react-icons/io5'
import { FiCopy } from 'react-icons/fi'
// import StyledBlock from './StyledBlock'
import { generateUUID } from '../../../common/utils'
import { sendMessageToBackground, MessageLocation } from '@wbet/message-api'
import { EVENTS } from '../../../../config'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  .block{
    position: relative;
    width: 100%;
    width:-webkit-fill-available;
    margin:0;
    .start{
      margin: 0 auto;
      display: block;
      cursor: pointer;
      align-self: center;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      border:none;
      color:#fff;
      padding:9px 16px;
      background: linear-gradient(271.12deg, #056CF2 0.35%, #74D6D7 95.13%);
      border-radius: 20px;
    }
    .opts{
      margin: 0;
      position: absolute;
      top: 40px;
      right: 0;
      background-color:var(--dropdown-bg-color);
      box-shadow: var(--dropdown-shadow);
      border:var(--box-border);
      border-radius: 8px;
      padding:8px;
      display: flex;
      list-style: none;
      flex-direction: column;
      align-items: flex-start;
      .opt{
        width: 100%;
        user-select: none;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--option-item-color);
        box-sizing: border-box;
        cursor: pointer;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        padding:8px;
        border-radius: 5px;
        .icon{
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
        }
        &:hover{
          background-color:var(--option-item-bg-hover-color);
        }
      }
    }
  }
`;
export default function NewWindow({ uid = "" }) {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const node = useRef(null)
  const showSubMenu = () => {
    setSubMenuVisible(true)
  }
  const handleNewBrowsing = (evt) => {
    const { type } = evt.currentTarget.dataset;
    const winId = generateUUID();
    sendMessageToBackground({ currentWindow: type == 'current', roomId: uid, winId }, MessageLocation.Popup, EVENTS.NEW_WINDOW)
  }
  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setSubMenuVisible(false);
  };
  useEffect(() => {
    if (subMenuVisible) {
      document.addEventListener('mouseup', handleClickOutside, false);
    } else {
      document.removeEventListener('mouseup', handleClickOutside, false);
    }
  }, [subMenuVisible]);
  return (
    <StyledWrapper>
      <div className="block" ref={node}>
        <button onClick={showSubMenu} className="start">{chrome.i18n.getMessage('new_cobrowsing')}</button>
        {subMenuVisible && <ul className="opts" >
          <li className="opt new" data-type="new" onClick={handleNewBrowsing}>
            <div className="icon">
              <IoAddOutline size={20} />
            </div>
            <span>
              {chrome.i18n.getMessage('new_window')}
            </span>
          </li>
          <li className="opt cur" data-type="current" onClick={handleNewBrowsing}>
            <div className="icon">
              <FiCopy size={16} />
            </div>
            <span>
              {chrome.i18n.getMessage('current_window')}
            </span>
          </li>
        </ul>}
      </div>
    </StyledWrapper>
  )
}
