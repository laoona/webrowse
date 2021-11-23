import styled, { keyframes } from 'styled-components';
const AniPopup = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(-110%);
  }
`;
const StyledWidget = styled.aside`
  pointer-events: all;
  font-family: sans-serif;
  background: var(--webrowse-widget-bg-color);
  border-radius: 16px;
  padding:16px 20px;
  display: flex;
  flex-direction: column;
  width: 380px;
  box-sizing: border-box;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    > .right{
      display: flex;
      align-items: center;
      height: 100%;
      gap: 10px;
      .star{
        cursor: pointer;
        /* star */
      }
      .others{
        z-index: 9;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          background: #eff1f2;
        }
        .items{
          display: none;
          padding: 8px;
          list-style: none;
          box-shadow: 0px 10px 20px -15px rgba(22, 23, 24, 0.2), 0px 10px 38px -10px rgba(22, 23, 24, 0.35);
          border-radius: 8px;
          position: absolute;
          right: 0;
          bottom: 0;
          white-space: nowrap;
          background-color:var(--window-bg-color);
          .item{
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: var(--option-item-color);
            padding: 8px 16px;
            border-radius: 4px;
            text-align: left;
            /* transition: all .5s ease-in-out; */
            &:hover{
              background: var(--option-item-bg-hover-color);
            }
          }
        }
        &.expand {
            svg path{
              fill:#C4C4C4;
            }
            .items{
              display: block;
            }
          }
      }
    }
    > .title{
      width: 80%;
      display: flex;
      align-items: center;
      gap: 8px;
      input{
        outline: none;
        background:none;
        padding: 4px 8px;
        border: 1px solid #056CF2;
        border-radius: 5px;
        color:var(--font-color);
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        font-weight: 800;
        font-size: 16px;
        white-space: nowrap;
        text-align: left;
        &:read-only{
          border-color: rgba(1,1,1,0);
        }
        &:hover{
          border-color: #ccc;
        }
        &:focus{
          border-color: #1FE1F9;
        }
      }
    }
  }
  >.opts{
    display: flex;
    align-items: center;
    justify-content:space-between ;
    .btns {
      display: flex;
      align-items: center;
      gap:8px;
      padding-right:16px;
      .btn{
        position: relative;
        border-radius:50%;
        width: 24px;
        height: 24px;
        background-size: 14px;
        background-position: center;
        background-repeat: no-repeat;
        padding: 0;
        margin: 0;
        line-height: 1;
        &.tab{
          background-image: url(${`chrome-extension://${chrome.runtime.id}/assets/icon/tab.svg`});
          &:hover{
            border:1px solid #FFBD2E;
          }
          &.curr{
            background-size: contain;
            background-image: url(${`chrome-extension://${chrome.runtime.id}/assets/icon/tab.fill.svg`});
          }
        }
        &.audio{
          background-image: url(${`chrome-extension://${chrome.runtime.id}/assets/icon/mic.svg`});
          &:hover{
            border:1px solid #9B51E0;
          }
          &.curr{
            background-size: contain;
            background-image: url(${`chrome-extension://${chrome.runtime.id}/assets/icon/mic.svg`});
          }
        }
      }
    }
    .cmds{
      display: flex;
      align-items: center;
      gap: 4px;
      .cmd{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding:4px 6px;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        border-radius: 4px;
        &:hover{
          background:  #F0FBFC;
        }
        .icon,.btn{
          color:#001529B2;
        }
        .btn{
          padding-right: 0;
          cursor: pointer;
          white-space: nowrap;
          border:none;
          background: none;
        }
        &.copy{
          min-width: 90px;
        }
        @media (prefers-color-scheme: dark) {
          .icon,.btn{
            color:rgba(255,255,255,.5);
          }
          &:hover{
            .icon,.btn{
              color:#fff;
            }
            background:  rgba(255,255,255,.08);
          }
        }
      }
      >.btn{
        background: #E42222;
        border-radius: 15px;
        font-size: 12px;
        line-height: 15px;
        color:#fff;
        padding:4px 12px ;
        /* &:hover{
          background: #B63546;
        } */
      }

    }
  }
  .leave_pop{
      z-index: 9;
      position: absolute;
      top: 0;
      right: 0;
      animation:${AniPopup} .5s forwards;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:8px;
      padding:12px;
      background: var(--webrowse-widget-bg-color);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      .select{
        color: #fff;
        white-space: nowrap;
        width: 100%;
        text-align: center;
        border-radius: 15px;
        background: #E42222;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        padding:4px 12px;
      }
    }
  .tooltip{
    position: relative;
    &:after{
      /* animation:${AniPopup} .5s forwards; */
      visibility: hidden;
      content: attr(data-tooltip);
      position: absolute;
      left:50%;
      top:-22px;
      transform: translateX(-50%);
      background: #161616;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: #FFFFFF;
      padding: 2px 3px;
      white-space: nowrap;
    }
    &:hover{
      &:after{
        visibility: visible;
      }
    }
  }
`;

export default StyledWidget;
