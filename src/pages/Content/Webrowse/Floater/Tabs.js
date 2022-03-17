import { useEffect } from "react";
import styled from "styled-components";
import { sendMessageToBackground, MessageLocation } from "@wbet/message-api";
import StyledBlock from "./StyledBlock";
import EVENTS from "../../../common/events";
import AvatarList from "../../../common/AvatarList";
import Favicon from "../../../common/Favicon";
import IconClose from '../icons/Close';

const StyledWrapper = styled(StyledBlock)`
  padding: 12px 0;
  background: var(--tab-status-bg-color);
  .tabs {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: overlay;
    width: -webkit-fill-available;
    margin: 0;
    padding: 16px;
    .tab {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 8px 10px 12px;
      border-radius: 8px;
      background-color: var(--tab-bg-color);
      height: 40px;
      box-sizing: border-box;
      cursor: pointer;
      .close {
        display: none;
        margin-left: 4px;
      }
      &:hover {
        background-color: var(--tab-hover-bg-color);
        .close {
          display: block;
        }
      }
      &.host {
        position: relative;
        box-shadow: inset 0 0 0px 2px #68d6dd;
        &:after {
          content: attr(data-host);
          font-size: 8px;
          color: #fff;
          background: #68d6dd;
          padding: 2px 4px;
          position: absolute;
          top: 0;
          right: 0;
          border-top-right-radius: 8px;
        }
      }
      .ico {
        display: flex;
        min-width: 16px;
        height: 16px;
        border-radius: 4px;
        margin-right: 8px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        width: -webkit-fill-available;
        text-align: left;
        font-size: 12px;
        line-height: 20px;
        color: var(--font-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export default function Tabs({ tabs, users, closeBlock }) {
  const handleTabClick = (evt) => {
    const { tabId } = evt.currentTarget.dataset;
    console.log({ tabId, evt });
    sendMessageToBackground(
      { tabId },
      MessageLocation.Content,
      EVENTS.JUMP_TAB
    );
  };
  useEffect(() => {
    sendMessageToBackground({}, MessageLocation.Content, EVENTS.UPDATE_TABS);
  }, []);
  console.log("tabs users", { users });

  /**
   * 关闭 Tab
   * @param evt
   */
  const handleClose = (evt) => {
    const { tabId } = evt.currentTarget.dataset;
    evt.stopPropagation();
    sendMessageToBackground(
      { tabId },
      MessageLocation.Content,
      EVENTS.CLOSE_TAB,
    );
  }

  return (
    <StyledWrapper>
      <div
        title="minimize"
        className="close"
        data-type="tab"
        onClick={closeBlock}
      ></div>
      <div className="title">{chrome.i18n.getMessage("tab_status")}</div>
      <ul className="tabs">
        {tabs
          .filter((t) => t.url.startsWith("http"))
          .map((tab) => {
            const { id, title, favIconUrl, index } = tab;
            const activeUsers = users.filter((u) => u.activeIndex == index);
            const host = activeUsers.find((u) => u.host);
            return (
              <li
                key={id}
                data-tab-id={id}
                onClick={handleTabClick}
                data-host={host?.username}
                className={`tab ${host ? "host" : ""}`}
                title={title}
              >
                <div className="ico">
                  <Favicon
                    url={
                      favIconUrl ||
                      `chrome-extension://${chrome.runtime.id}/assets/icon/tab.svg`
                    }
                  />
                </div>
                <span className="title">{title}</span>
                {/* members */}
                <AvatarList users={activeUsers} />
                <span
                  onClick={handleClose}
                  data-tab-id={id}
                  className='close'
                >
                  <IconClose color='#BBBCBE' />
                </span>
              </li>
            );
          })}
      </ul>
    </StyledWrapper>
  );
}
