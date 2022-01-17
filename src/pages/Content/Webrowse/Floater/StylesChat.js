/**
 * @author: laoona
 * @date:  2022-01-17
 * @time: 15:49
 * @contact: laoona.com
 * @description: #
 */

import styled from 'styled-components';

const StylesChat = styled.div`
  height: 100%;
  :root {
    --main-font: IBM Plex Sans, sans-serif;
    --second-font: Helvetica Neue, Helvetica, Arial, sans-serif;
    --xs-font: 10px;
    --sm-font: 12px;
    --md-font: 14px;
    --lg-font: 16px;
    --xl-font: 22px;
    --xxl-font: 26px;
    --xxxl-font: 32px;
    --font-weight-regular: 400;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --primary-color: #006cff;
    --primary-color-faded: #006cff5c;
    --magenta: #ff00ff;
    --red: #ff0000;
    --faded-red: #d0021b1a;
    --dt-bg-team: #1d1f22;
    --border-color: #00000014;
    --lighten-black: #808080;
    --lighten-grey: #858585;
    --light-grey: #ebebeb;
    --grey: #808080;
    --dark-grey: #343434;
    --green: #28ca42;
    --faded-green: #02d0021a;
    --white: #ffffff;
    --white5: #ffffff0d;
    --white10: #ffffff1a;
    --white20: #ffffff33;
    --white30: #ffffff4d;
    --white40: #ffffff66;
    --white50: #ffffff80;
    --white60: #ffffff99;
    --white70: #ffffffb3;
    --white80: #ffffffcc;
    --white90: #ffffffe6;
    --white95: #fffffff2;
    --black: #000000;
    --black5: #0000000d;
    --black10: #0000001a;
    --black20: #00000033;
    --black30: #0000004d;
    --black40: #00000066;
    --black50: #00000080;
    --black60: #00000099;
    --black70: #000000b3;
    --black80: #000000cc;
    --black90: #000000e6;
    --black95: #000000f2;
    --border-radius: 16px;
    --border-radius-sm: calc(var(--border-radius) / 4);
    --border-radius-md: calc(var(--border-radius) / 2);
    --border-radius-round: 999px;
    --spacing-unit: 8px;
    --xxs-p: calc(var(--spacing-unit) / 2);
    --xs-p: var(--spacing-unit);
    --sm-p: calc(var(--spacing-unit) * 2);
    --md-p: calc(var(--spacing-unit) * 2);
    --lg-p: calc(var(--spacing-unit) * 2);
    --xl-p: calc(var(--spacing-unit) * 2);
    --xxl-p: calc(var(--spacing-unit) * 2);
    --xxs-m: calc(var(--spacing-unit) / 2);
    --xs-m: var(--spacing-unit);
    --sm-m: calc(var(--spacing-unit) * 2);
    --md-m: calc(var(--spacing-unit) * 2);
    --lg-m: calc(var(--spacing-unit) * 2);
    --xl-m: calc(var(--spacing-unit) * 2);
    --xxl-m: calc(var(--spacing-unit) * 2);
    --assetsPath: "../assets";
    --accent_blue: #005fff;
    --accent_green: #20e070;
    --accent_red: #ff3742;
    --bg-gradient-end: #f7f7f7;
    --bg-gradient-start: #fcfcfc;
    --black: #000000;
    --blue-alice: #e9f2ff;
    --border: #00000014;
    --button-background: #ffffff;
    --button-text: #005fff;
    --grey: #7a7a7a;
    --grey-gainsboro: #dbdbdb;
    --grey-whisper: #ecebeb;
    --highlight: #fbf4dd;
    --modal-shadow: #00000099;
    --overlay: #00000033;
    --overlay-dark: #00000099;
    --shadow-icon: #00000040;
    --targetedMessageBackground: #fbf4dd;
    --transparent: transparent;
    --white: #ffffff;
    --white-smoke: #f2f2f2;
    --white-snow: #fcfcfc
  }

  .str-chat {
    box-sizing: border-box
  }

  .str-chat *, .str-chat *::after, .str-chat *::before {
    box-sizing: inherit;
    font-family: var(--second-font)
  }

  .clearfix {
    clear: both
  }

  .messenger-chat.str-chat {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: var(--second-font);
    height: 100%;
    margin: 0;
    flex: 1 0 100%
  }

  .messenger-chat.str-chat .str-chat__container {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: row
  }

  .messenger-chat.str-chat .str-chat__main-panel {
    width: 100%;
    min-width: 250px;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: var(--sm-p) var(--sm-p) 0 var(--xs-p)
  }

  .str-chat {
    height: 100%;
    font-family: var(--second-font);
    color: var(--black)
  }

  .str-chat.messaging, .str-chat.commerce {
  }

  .str-chat.messaging.dark, .str-chat.commerce.dark {
    background-color: var(--dark-grey)
  }

  .str-chat.team.dark {
    background: var(--dark-grey)
  }

  .str-chat.livestream.dark {
    background: var(--dark-grey)
  }

  .str-chat--windows-flags .str-chat__textarea__textarea, .str-chat--windows-flags .str-chat__message-text-inner *, .str-chat--windows-flags .str-chat__emoji-item--entity, .str-chat--windows-flags .emoji-mart-emoji-native * {
    font-family: ReplaceFlagEmojiPNG, var(--second-font), sans-serif;
    font-display: swap
  }

  @-moz-document url-prefix("") {
    .str-chat--windows-flags .str-chat__textarea__textarea, .str-chat--windows-flags .str-chat__message-text-inner *, .str-chat--windows-flags .str-chat__emoji-item--entity, .str-chat--windows-flags .emoji-mart-emoji-native * {
      font-family: ReplaceFlagEmojiSVG, var(--second-font), sans-serif;
      font-display: swap
    }
  }

  .str-chat-channel-list {
    float: left
  }

  .str-chat-channel {
    max-height: 100%;
  }

  .str-chat-channel .str-chat__container {
    height: 100%;
    display: flex
  }

  .str-chat-channel .str-chat__container .str-chat__main-panel, .str-chat-channel .str-chat__container .str-chat-angular__main-panel-inner {
    height: 100%;
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    flex: 1
  }

  .str-chat-channel .str-chat__container .rfu-dropzone {
    width: 100%
  }

  .str-chat-channel.messaging .str-chat__main-panel {
  }

  @media screen and (max-width: 960px) {
    .str-chat-channel.messaging .str-chat__main-panel {
    }
  }

  .str-chat-channel.team .str-chat__container {
    display: flex
  }

  .str-chat-channel.commerce .str-chat__main-panel {
    width: 100%
  }

  .str-chat-channel.commerce .str-chat__container {
    background: var(--white95)
  }

  .str-chat-channel.commerce.dark .str-chat__container {
    background: var(--dark-grey);
    box-shadow: 0 10px 31px 0 var(--black50)
  }

  .str-chat.dark .emoji-mart {
    background: var(--dark-grey);
    border: var(--dark-grey)
  }

  .str-chat.dark .emoji-mart-category-label span {
    background: var(--dark-grey);
    color: var(--white)
  }

  .str-chat.dark .emoji-mart-search input {
    background: var(--dark-grey);
    color: var(--white)
  }

  .str-chat.dark .emoji-mart-search button svg {
    fill: var(--white)
  }

  .emoji-mart, .emoji-mart * {
    box-sizing: border-box;
    line-height: 1.15
  }

  .emoji-mart {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
    font-size: 16px;
    display: inline-block;
    color: #222427;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background: #fff
  }

  .emoji-mart .emoji-mart-emoji {
    padding: 6px
  }

  .emoji-mart-bar {
    border: 0 solid #d9d9d9
  }

  .emoji-mart-bar:first-child {
    border-bottom-width: 1px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
  }

  .emoji-mart-bar:last-child {
    border-top-width: 1px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px
  }

  .emoji-mart-anchors {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 6px;
    line-height: 0
  }

  .emoji-mart-anchor {
    position: relative;
    display: block;
    flex: 1 1 auto;
    color: #858585;
    text-align: center;
    padding: 12px 4px;
    overflow: hidden;
    transition: color .1s ease-out;
    margin: 0;
    box-shadow: none;
    background: none;
    border: none
  }

  .emoji-mart-anchor:focus {
    outline: 0
  }

  .emoji-mart-anchor:hover, .emoji-mart-anchor:focus, .emoji-mart-anchor-selected {
    color: #464646
  }

  .emoji-mart-anchor-selected .emoji-mart-anchor-bar {
    bottom: 0
  }

  .emoji-mart-anchor-bar {
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #464646
  }

  .emoji-mart-anchors i {
    display: inline-block;
    width: 100%;
    max-width: 22px
  }

  .emoji-mart-anchors svg, .emoji-mart-anchors img {
    fill: currentColor;
    height: 18px;
    width: 18px
  }

  .emoji-mart-scroll {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 270px;
    padding: 0 6px 6px 6px;
    will-change: transform
  }

  .emoji-mart-search {
    margin-top: 6px;
    padding: 0 6px;
    position: relative
  }

  .emoji-mart-search input {
    font-size: 16px;
    display: block;
    width: 100%;
    padding: 5px 25px 6px 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    outline: 0
  }

  .emoji-mart-search input, .emoji-mart-search input::-webkit-search-decoration, .emoji-mart-search input::-webkit-search-cancel-button, .emoji-mart-search input::-webkit-search-results-button, .emoji-mart-search input::-webkit-search-results-decoration {
    -webkit-appearance: none
  }

  .emoji-mart-search-icon {
    position: absolute;
    top: 7px;
    right: 11px;
    z-index: 2;
    padding: 2px 5px 1px;
    border: none;
    background: none
  }

  .emoji-mart-category .emoji-mart-emoji span {
    z-index: 1;
    position: relative;
    text-align: center;
    cursor: default
  }

  .emoji-mart-category .emoji-mart-emoji:hover:before {
    z-index: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    border-radius: 100%
  }

  .emoji-mart-category-label {
    z-index: 2;
    position: relative;
    position: -webkit-sticky;
    position: sticky;
    top: 0
  }

  .emoji-mart-category-label span {
    display: block;
    width: 100%;
    font-weight: 500;
    padding: 5px 6px;
    background-color: #fff;
    background-color: rgba(255, 255, 255, .95)
  }

  .emoji-mart-category-list {
    margin: 0;
    padding: 0
  }

  .emoji-mart-category-list li {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block
  }

  .emoji-mart-emoji {
    position: relative;
    display: inline-block;
    font-size: 0;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    box-shadow: none
  }

  .emoji-mart-emoji-native {
    font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"
  }

  .emoji-mart-no-results {
    font-size: 14px;
    text-align: center;
    padding-top: 70px;
    color: #858585
  }

  .emoji-mart-no-results-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%
  }

  .emoji-mart-no-results .emoji-mart-category-label {
    display: none
  }

  .emoji-mart-no-results .emoji-mart-no-results-label {
    margin-top: .2em
  }

  .emoji-mart-no-results .emoji-mart-emoji:hover:before {
    content: none
  }

  .emoji-mart-preview {
    position: relative;
    height: 70px
  }

  .emoji-mart-preview-emoji, .emoji-mart-preview-data, .emoji-mart-preview-skins {
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
  }

  .emoji-mart-preview-emoji {
    left: 12px
  }

  .emoji-mart-preview-data {
    left: 68px;
    right: 12px;
    word-break: break-all
  }

  .emoji-mart-preview-skins {
    right: 30px;
    text-align: right
  }

  .emoji-mart-preview-skins.custom {
    right: 10px;
    text-align: right
  }

  .emoji-mart-preview-name {
    font-size: 14px
  }

  .emoji-mart-preview-shortname {
    font-size: 12px;
    color: #888
  }

  .emoji-mart-preview-shortname + .emoji-mart-preview-shortname, .emoji-mart-preview-shortname + .emoji-mart-preview-emoticon, .emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {
    margin-left: .5em
  }

  .emoji-mart-preview-emoticon {
    font-size: 11px;
    color: #bbb
  }

  .emoji-mart-title span {
    display: inline-block;
    vertical-align: middle
  }

  .emoji-mart-title .emoji-mart-emoji {
    padding: 0
  }

  .emoji-mart-title-label {
    color: #999a9c;
    font-size: 26px;
    font-weight: 300
  }

  .emoji-mart-skin-swatches {
    font-size: 0;
    padding: 2px 0;
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    background-color: #fff
  }

  .emoji-mart-skin-swatches.custom {
    font-size: 0;
    border: none;
    background-color: #fff
  }

  .emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch {
    width: 16px;
    padding: 0 2px
  }

  .emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch.selected:after {
    opacity: .75
  }

  .emoji-mart-skin-swatch {
    display: inline-block;
    width: 0;
    vertical-align: middle;
    transition-property: width, padding;
    transition-duration: .125s;
    transition-timing-function: ease-out
  }

  .emoji-mart-skin-swatch:nth-child(1) {
    transition-delay: 0s
  }

  .emoji-mart-skin-swatch:nth-child(2) {
    transition-delay: .03s
  }

  .emoji-mart-skin-swatch:nth-child(3) {
    transition-delay: .06s
  }

  .emoji-mart-skin-swatch:nth-child(4) {
    transition-delay: .09s
  }

  .emoji-mart-skin-swatch:nth-child(5) {
    transition-delay: .12s
  }

  .emoji-mart-skin-swatch:nth-child(6) {
    transition-delay: .15s
  }

  .emoji-mart-skin-swatch.selected {
    position: relative;
    width: 16px;
    padding: 0 2px
  }

  .emoji-mart-skin-swatch.selected:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    background-color: #fff;
    border-radius: 100%;
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s ease-out
  }

  .emoji-mart-skin-swatch.custom {
    display: inline-block;
    width: 0;
    height: 38px;
    overflow: hidden;
    vertical-align: middle;
    transition-property: width, height;
    transition-duration: .125s;
    transition-timing-function: ease-out;
    cursor: default
  }

  .emoji-mart-skin-swatch.custom.selected {
    position: relative;
    width: 36px;
    height: 38px;
    padding: 0 2px 0 0
  }

  .emoji-mart-skin-swatch.custom.selected:after {
    content: "";
    width: 0;
    height: 0
  }

  .emoji-mart-skin-swatches.custom .emoji-mart-skin-swatch.custom:hover {
    background-color: #f4f4f4;
    border-radius: 10%
  }

  .emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom {
    width: 36px;
    height: 38px;
    padding: 0 2px 0 0
  }

  .emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom.selected:after {
    opacity: .75
  }

  .emoji-mart-skin-text.opened {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    color: #888;
    font-size: 11px;
    padding: 5px 2px;
    width: 95px;
    height: 40px;
    border-radius: 10%;
    background-color: #fff
  }

  .emoji-mart-skin {
    display: inline-block;
    width: 100%;
    padding-top: 100%;
    max-width: 12px;
    border-radius: 100%
  }

  .emoji-mart-skin-tone-1 {
    background-color: #ffc93a
  }

  .emoji-mart-skin-tone-2 {
    background-color: #fadcbc
  }

  .emoji-mart-skin-tone-3 {
    background-color: #e0bb95
  }

  .emoji-mart-skin-tone-4 {
    background-color: #bf8f68
  }

  .emoji-mart-skin-tone-5 {
    background-color: #9b643d
  }

  .emoji-mart-skin-tone-6 {
    background-color: #594539
  }

  .emoji-mart-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0
  }

  .emoji-mart-dark {
    color: #fff;
    border-color: #555453;
    background-color: #222
  }

  .emoji-mart-dark .emoji-mart-bar {
    border-color: #555453
  }

  .emoji-mart-dark .emoji-mart-search input {
    color: #fff;
    border-color: #555453;
    background-color: #2f2f2f
  }

  .emoji-mart-dark .emoji-mart-search-icon svg {
    fill: #fff
  }

  .emoji-mart-dark .emoji-mart-category .emoji-mart-emoji:hover:before {
    background-color: #444
  }

  .emoji-mart-dark .emoji-mart-category-label span {
    background-color: #222;
    color: #fff
  }

  .emoji-mart-dark .emoji-mart-skin-swatches {
    border-color: #555453;
    background-color: #222
  }

  .emoji-mart-dark .emoji-mart-anchor:hover, .emoji-mart-dark .emoji-mart-anchor:focus, .emoji-mart-dark .emoji-mart-anchor-selected {
    color: #bfbfbf
  }

  .mml-container {
    font-family: inherit;
    line-height: 1.26;
    font-size: 15px
  }

  .mml-container * {
    box-sizing: border-box
  }

  .mml-wrap {
    display: flex;
    flex-direction: column;
    max-width: 66.66%
  }

  .mml-align-left .mml-wrap {
    margin-right: auto
  }

  .mml-align-right .mml-wrap {
    margin-left: auto
  }

  .mml-wrap > * {
    border-radius: 16px
  }

  .mml-align-left .mml-wrap > * {
    margin-right: auto
  }

  .mml-align-right .mml-wrap > * {
    margin-left: auto
  }

  .mml-align-left .mml-wrap > :last-child:not(.mml-btn) {
    border-bottom-left-radius: 0
  }

  .mml-align-right .mml-wrap > :last-child:not(.mml-btn) {
    border-bottom-right-radius: 0
  }

  .mml-add-to-calendar > .mml-card-body:last-child {
    overflow: hidden;
    border-bottom: 1px solid #e5e5e6
  }

  .base-dark .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #1b2d46
  }

  .commerce-light .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #eaeaea
  }

  .commerce-dark .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #004ccc
  }

  .livestream-light .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #bed5e4
  }

  .livestream-dark .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #081e58
  }

  .messaging-light .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #d6d6d6
  }

  .messaging-dark .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #252628
  }

  .team-light .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #eaeaea
  }

  .team-dark .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-color: #4e00cc
  }

  .mml-align-left .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-right-radius: 16px
  }

  .mml-align-right .mml-add-to-calendar > .mml-card-body:last-child {
    border-bottom-left-radius: 16px
  }

  .mml-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
    -webkit-appearance: none;
    padding: 6px 16px;
    border-radius: 16px;
    border: 1px solid #f2f2f2;
    color: #006cff;
    background: #f2f2f2;
    font-family: inherit;
    font-weight: 700;
    font-size: 15px;
    margin: 0
  }

  .base-dark .mml-btn {
    border-color: #1a232e
  }

  .commerce-light .mml-btn {
    border-color: #d9e1e6
  }

  .commerce-dark .mml-btn {
    border-color: #1c1f27
  }

  .livestream-light .mml-btn {
    border-color: #d9e1e6
  }

  .livestream-dark .mml-btn {
    border-color: #041b55
  }

  .messaging-light .mml-btn {
    border-color: #ebebeb
  }

  .messaging-dark .mml-btn {
    border-color: #242424
  }

  .team-light .mml-btn {
    border-color: #ccc
  }

  .team-dark .mml-btn {
    border-color: #201c27
  }

  .base-dark .mml-btn {
    color: #006cff
  }

  .commerce-light .mml-btn {
    color: #005fff
  }

  .commerce-dark .mml-btn {
    color: #004ccc
  }

  .livestream-light .mml-btn {
    color: #19a0ff
  }

  .livestream-dark .mml-btn {
    color: #0d47d9
  }

  .messaging-dark .mml-btn, .messaging-light .mml-btn {
    color: #0283ff
  }

  .team-light .mml-btn {
    color: #4e1d9d
  }

  .team-dark .mml-btn {
    color: #5d02f0
  }

  .base-dark .mml-btn {
    background: #152438
  }

  .commerce-light .mml-btn {
    background: #fff
  }

  .commerce-dark .mml-btn {
    background: #1c1f27
  }

  .livestream-light .mml-btn {
    background: #fff
  }

  .livestream-dark .mml-btn {
    background: #010c29
  }

  .messaging-light .mml-btn {
    background: #fff
  }

  .messaging-dark .mml-btn {
    background: #3e4042
  }

  .team-light .mml-btn {
    background: #fff
  }

  .team-dark .mml-btn {
    background: #201c27
  }

  .mml-btn:not([disabled]) {
    cursor: pointer
  }

  .mml-btn:focus, .mml-btn:hover {
    border-color: #006cff;
    color: #fff;
    background: #006cff
  }

  .base-dark .mml-btn:focus, .base-dark .mml-btn:hover {
    border-color: #006cff
  }

  .commerce-light .mml-btn:focus, .commerce-light .mml-btn:hover {
    border-color: #005fff
  }

  .commerce-dark .mml-btn:focus, .commerce-dark .mml-btn:hover {
    border-color: #004ccc
  }

  .livestream-light .mml-btn:focus, .livestream-light .mml-btn:hover {
    border-color: #19a0ff
  }

  .livestream-dark .mml-btn:focus, .livestream-dark .mml-btn:hover {
    border-color: #0d47d9
  }

  .messaging-dark .mml-btn:focus, .messaging-dark .mml-btn:hover, .messaging-light .mml-btn:focus, .messaging-light .mml-btn:hover {
    border-color: #0283ff
  }

  .team-light .mml-btn:focus, .team-light .mml-btn:hover {
    border-color: #4e1d9d
  }

  .team-dark .mml-btn:focus, .team-dark .mml-btn:hover {
    border-color: #5d02f0
  }

  .base-dark .mml-btn:focus, .base-dark .mml-btn:hover, .commerce-dark .mml-btn:focus, .commerce-dark .mml-btn:hover, .commerce-light .mml-btn:focus, .commerce-light .mml-btn:hover, .livestream-dark .mml-btn:focus, .livestream-dark .mml-btn:hover, .livestream-light .mml-btn:focus, .livestream-light .mml-btn:hover, .messaging-light .mml-btn:focus, .messaging-light .mml-btn:hover {
    color: #fff
  }

  .messaging-dark .mml-btn:focus, .messaging-dark .mml-btn:hover {
    color: #e8e8e9
  }

  .team-dark .mml-btn:focus, .team-dark .mml-btn:hover, .team-light .mml-btn:focus, .team-light .mml-btn:hover {
    color: #fff
  }

  .base-dark .mml-btn:focus, .base-dark .mml-btn:hover {
    background: #006cff
  }

  .commerce-light .mml-btn:focus, .commerce-light .mml-btn:hover {
    background: #005fff
  }

  .commerce-dark .mml-btn:focus, .commerce-dark .mml-btn:hover {
    background: #004ccc
  }

  .livestream-light .mml-btn:focus, .livestream-light .mml-btn:hover {
    background: #19a0ff
  }

  .livestream-dark .mml-btn:focus, .livestream-dark .mml-btn:hover {
    background: #0d47d9
  }

  .messaging-dark .mml-btn:focus, .messaging-dark .mml-btn:hover, .messaging-light .mml-btn:focus, .messaging-light .mml-btn:hover {
    background: #0283ff
  }

  .team-light .mml-btn:focus, .team-light .mml-btn:hover {
    background: #4e1d9d
  }

  .team-dark .mml-btn:focus, .team-dark .mml-btn:hover {
    background: #5d02f0
  }

  .mml-btn[disabled] {
    border-color: #f2f2f2;
    color: #b2b1b5;
    background: #f2f2f2
  }

  .base-dark .mml-btn[disabled] {
    border-color: #152438
  }

  .commerce-light .mml-btn[disabled] {
    border-color: #fff
  }

  .commerce-dark .mml-btn[disabled] {
    border-color: #1c1f27
  }

  .livestream-light .mml-btn[disabled] {
    border-color: #fff
  }

  .livestream-dark .mml-btn[disabled] {
    border-color: #010c29
  }

  .messaging-light .mml-btn[disabled] {
    border-color: #fff
  }

  .messaging-dark .mml-btn[disabled] {
    border-color: #3e4042
  }

  .team-light .mml-btn[disabled] {
    border-color: #fff
  }

  .team-dark .mml-btn[disabled] {
    border-color: #201c27
  }

  .base-dark .mml-btn[disabled] {
    color: #57606b
  }

  .commerce-light .mml-btn[disabled] {
    color: #b6bece
  }

  .commerce-dark .mml-btn[disabled] {
    color: #43527c
  }

  .livestream-light .mml-btn[disabled] {
    color: #85cdff
  }

  .livestream-dark .mml-btn[disabled] {
    color: #48526a
  }

  .messaging-light .mml-btn[disabled] {
    color: #b3b3b3
  }

  .messaging-dark .mml-btn[disabled] {
    color: #626262
  }

  .team-light .mml-btn[disabled] {
    color: #9f8bbf
  }

  .team-dark .mml-btn[disabled] {
    color: #59437c
  }

  .base-dark .mml-btn[disabled] {
    background: #152438
  }

  .commerce-light .mml-btn[disabled] {
    background: #fff
  }

  .commerce-dark .mml-btn[disabled] {
    background: #1c1f27
  }

  .livestream-light .mml-btn[disabled] {
    background: #fff
  }

  .livestream-dark .mml-btn[disabled] {
    background: #010c29
  }

  .messaging-light .mml-btn[disabled] {
    background: #fff
  }

  .messaging-dark .mml-btn[disabled] {
    background: #3e4042
  }

  .team-light .mml-btn[disabled] {
    background: #fff
  }

  .team-dark .mml-btn[disabled] {
    background: #201c27
  }

  .mml-btn:focus {
    outline: none
  }

  .mml-btn--floating {
    box-shadow: 0 2px 5px rgba(0, 0, 0, .15)
  }

  .base-dark .mml-btn--floating {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15)
  }

  .commerce-light .mml-btn--floating {
    box-shadow: 0 2px 5px rgba(0, 0, 0, .08)
  }

  .commerce-dark .mml-btn--floating {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15)
  }

  .livestream-light .mml-btn--floating {
    box-shadow: 0 2px 5px rgba(190, 213, 228, .5)
  }

  .livestream-dark .mml-btn--floating {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15)
  }

  .messaging-light .mml-btn--floating {
    box-shadow: 0 2px 5px rgba(0, 74, 174, .15)
  }

  .messaging-dark .mml-btn--floating {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .1)
  }

  .team-light .mml-btn--floating {
    box-shadow: 0 2px 5px rgba(0, 0, 0, .08)
  }

  .team-dark .mml-btn--floating {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15)
  }

  .mml-btn--floating:focus {
    box-shadow: none !important
  }

  .mml-btn--with-icon .mml-icon {
    margin-right: .4em
  }

  .mml-btn--icon {
    padding: 5px;
    border-radius: 100%
  }

  .mml-btnlist {
    display: flex
  }

  .mml-btnlist--grounded {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    border: 1px solid #e5e5e6;
    background: #f2f2f2
  }

  .base-dark .mml-btnlist--grounded {
    border-color: #1b2d46
  }

  .commerce-light .mml-btnlist--grounded {
    border-color: #eaeaea
  }

  .commerce-dark .mml-btnlist--grounded {
    border-color: #004ccc
  }

  .livestream-light .mml-btnlist--grounded {
    border-color: #bed5e4
  }

  .livestream-dark .mml-btnlist--grounded {
    border-color: #081e58
  }

  .messaging-light .mml-btnlist--grounded {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-btnlist--grounded {
    border-color: #252628
  }

  .team-light .mml-btnlist--grounded {
    border-color: #eaeaea
  }

  .team-dark .mml-btnlist--grounded {
    border-color: #4e00cc
  }

  .base-dark .mml-btnlist--grounded {
    background: #152438
  }

  .commerce-light .mml-btnlist--grounded {
    background: #fff
  }

  .commerce-dark .mml-btnlist--grounded {
    background: #1c1f27
  }

  .livestream-light .mml-btnlist--grounded {
    background: #fff
  }

  .livestream-dark .mml-btnlist--grounded {
    background: #010c29
  }

  .messaging-light .mml-btnlist--grounded {
    background: #fff
  }

  .messaging-dark .mml-btnlist--grounded {
    background: #3e4042
  }

  .team-light .mml-btnlist--grounded {
    background: #fff
  }

  .team-dark .mml-btnlist--grounded {
    background: #201c27
  }

  .mml-btnlist--grounded .mml-btn {
    width: 100%;
    margin: 0;
    padding: 12px 16px;
    border-width: 0 0 1px;
    border-radius: 0;
    border-color: #e5e5e6
  }

  .base-dark .mml-btnlist--grounded .mml-btn {
    border-color: #1b2d46
  }

  .commerce-light .mml-btnlist--grounded .mml-btn {
    border-color: #eaeaea
  }

  .commerce-dark .mml-btnlist--grounded .mml-btn {
    border-color: #004ccc
  }

  .livestream-light .mml-btnlist--grounded .mml-btn {
    border-color: #bed5e4
  }

  .livestream-dark .mml-btnlist--grounded .mml-btn {
    border-color: #081e58
  }

  .messaging-light .mml-btnlist--grounded .mml-btn {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-btnlist--grounded .mml-btn {
    border-color: #252628
  }

  .team-light .mml-btnlist--grounded .mml-btn {
    border-color: #eaeaea
  }

  .team-dark .mml-btnlist--grounded .mml-btn {
    border-color: #4e00cc
  }

  .mml-btnlist--grounded .mml-btn:not(:hover):not(:focus) {
    background: none
  }

  .mml-btnlist--grounded .mml-btn:last-child {
    border-width: 0
  }

  .mml-btnlist--grounded .mml-btn--with-icon {
    justify-content: flex-start;
    font-weight: 400
  }

  .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #0e1621
  }

  .base-dark .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #fff
  }

  .commerce-light .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #202a3c
  }

  .commerce-dark .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #e2e5e9
  }

  .livestream-light .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #2c2c30
  }

  .livestream-dark .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #fff
  }

  .messaging-light .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #0e1621
  }

  .messaging-dark .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #e8e8e9
  }

  .team-light .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #2e2c30
  }

  .team-dark .mml-btnlist--grounded .mml-btn--with-icon:not(:hover):not(:focus) {
    color: #e5e2e9
  }

  .mml-btnlist--floating {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center
  }

  .mml-align-right .mml-btnlist--floating {
    margin-left: calc(-50% - 8px);
    margin-right: -8px
  }

  .mml-align-left .mml-btnlist--floating {
    margin-left: -8px;
    margin-right: calc(-50% - 8px)
  }

  .mml-btnlist--floating .mml-btn {
    margin: 8px
  }

  .mml-align-right .mml-carousel {
    margin-left: -50%
  }

  .mml-align-left .mml-carousel {
    margin-right: -50%
  }

  .mml-carousel__track {
    display: flex;
    padding: 8px 0;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none
  }

  .mml-carousel__track::-webkit-scrollbar {
    display: none
  }

  .mml-carousel__slides {
    display: flex;
    flex-wrap: nowrap;
    min-width: 100%
  }

  .mml-carousel__slide {
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    margin-right: 8px
  }

  .mml-align-right .mml-carousel__slide:first-child {
    margin-left: auto
  }

  .mml-carousel__slide:last-child {
    margin-right: 0
  }

  .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #fff
  }

  .base-dark .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #0e1723
  }

  .commerce-light .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #f5f9ff
  }

  .commerce-dark .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #0c0e12
  }

  .livestream-light .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #f1faff
  }

  .livestream-dark .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #00091f
  }

  .messaging-light .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #f7f7f8
  }

  .messaging-dark .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #2d2e2f
  }

  .team-light .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #f9f5ff
  }

  .team-dark .mml-carousel-item > :not(:first-child):not(:last-child) {
    background: #0f0c12
  }

  .mml-carousel-item > .mml-md, .mml-carousel-item > .mml-text {
    border-color: #e5e5e6;
    border-style: solid;
    border-width: 0 1px;
    padding: 0 8px 8px
  }

  .base-dark .mml-carousel-item > .mml-md, .base-dark .mml-carousel-item > .mml-text {
    border-color: #1b2d46
  }

  .commerce-light .mml-carousel-item > .mml-md, .commerce-light .mml-carousel-item > .mml-text {
    border-color: #eaeaea
  }

  .commerce-dark .mml-carousel-item > .mml-md, .commerce-dark .mml-carousel-item > .mml-text {
    border-color: #004ccc
  }

  .livestream-light .mml-carousel-item > .mml-md, .livestream-light .mml-carousel-item > .mml-text {
    border-color: #bed5e4
  }

  .livestream-dark .mml-carousel-item > .mml-md, .livestream-dark .mml-carousel-item > .mml-text {
    border-color: #081e58
  }

  .messaging-light .mml-carousel-item > .mml-md, .messaging-light .mml-carousel-item > .mml-text {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-carousel-item > .mml-md, .messaging-dark .mml-carousel-item > .mml-text {
    border-color: #252628
  }

  .team-light .mml-carousel-item > .mml-md, .team-light .mml-carousel-item > .mml-text {
    border-color: #eaeaea
  }

  .team-dark .mml-carousel-item > .mml-md, .team-dark .mml-carousel-item > .mml-text {
    border-color: #4e00cc
  }

  .mml-carousel-item > .mml-md:first-of-type, .mml-carousel-item > .mml-text:first-of-type {
    padding-top: 8px;
    padding-bottom: 6px
  }

  .mml-carousel-item > .mml-md:last-of-type, .mml-carousel-item > .mml-text:last-of-type {
    flex: 1
  }

  .mml-carousel-item > .mml-text {
    font-size: 11px;
    color: #8a898e
  }

  .base-dark .mml-carousel-item > .mml-text {
    color: #868b91
  }

  .commerce-light .mml-carousel-item > .mml-text {
    color: #6c7a93
  }

  .commerce-dark .mml-carousel-item > .mml-text {
    color: #afc0df
  }

  .livestream-light .mml-carousel-item > .mml-text {
    color: #7ba0bb
  }

  .livestream-dark .mml-carousel-item > .mml-text {
    color: #7889b6
  }

  .messaging-light .mml-carousel-item > .mml-text {
    color: #8c8c8c
  }

  .messaging-dark .mml-carousel-item > .mml-text {
    color: #898a8b
  }

  .team-light .mml-carousel-item > .mml-text {
    color: #7c61a8
  }

  .team-dark .mml-carousel-item > .mml-text {
    color: #c1afdf
  }

  .mml-carousel-item .mml-btn {
    padding: 10px 16px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 1px solid #e5e5e6
  }

  .base-dark .mml-carousel-item .mml-btn {
    border-color: #1b2d46
  }

  .commerce-light .mml-carousel-item .mml-btn {
    border-color: #eaeaea
  }

  .commerce-dark .mml-carousel-item .mml-btn {
    border-color: #004ccc
  }

  .livestream-light .mml-carousel-item .mml-btn {
    border-color: #bed5e4
  }

  .livestream-dark .mml-carousel-item .mml-btn {
    border-color: #081e58
  }

  .messaging-light .mml-carousel-item .mml-btn {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-carousel-item .mml-btn {
    border-color: #252628
  }

  .team-light .mml-carousel-item .mml-btn {
    border-color: #eaeaea
  }

  .team-dark .mml-carousel-item .mml-btn {
    border-color: #4e00cc
  }

  .mml-col-align-center {
    justify-content: center
  }

  .mml-col-align-right {
    justify-content: flex-end
  }

  .mml-col-1, .mml-col-2, .mml-col-3, .mml-col-4, .mml-col-5, .mml-col-6, .mml-col-7, .mml-col-8, .mml-col-9, .mml-col-10, .mml-col-11, .mml-col-12 {
    position: relative;
    width: 100%;
    padding-right: 4px;
    padding-left: 4px
  }

  .mml-col-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%
  }

  .mml-col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .mml-col-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .mml-col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .mml-col-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%
  }

  .mml-col-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .mml-col-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%
  }

  .mml-col-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%
  }

  .mml-col-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .mml-col-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%
  }

  .mml-col-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%
  }

  .mml-col-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .mml-col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%
  }

  .mml-offset-1 {
    margin-left: 8.33333%
  }

  .mml-offset-2 {
    margin-left: 16.66667%
  }

  .mml-offset-3 {
    margin-left: 25%
  }

  .mml-offset-4 {
    margin-left: 33.33333%
  }

  .mml-offset-5 {
    margin-left: 41.66667%
  }

  .mml-offset-6 {
    margin-left: 50%
  }

  .mml-offset-7 {
    margin-left: 58.33333%
  }

  .mml-offset-8 {
    margin-left: 66.66667%
  }

  .mml-offset-9 {
    margin-left: 75%
  }

  .mml-offset-10 {
    margin-left: 83.33333%
  }

  .mml-offset-11 {
    margin-left: 91.66667%
  }

  .mml-error {
    display: flex;
    justify-content: center;
    padding: 8px;
    color: #bb5151;
    font-size: 88%
  }

  .mml-icon {
    font-family: Material Icons;
    line-height: 16px;
    font-size: 16px
  }

  .mml-icon__svg {
    width: 1em;
    height: 1em;
    fill: currentColor
  }

  .mml-image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0
  }

  .mml-input {
    position: relative;
    width: 100%;
    padding: 12px 16px;
    -webkit-appearance: none;
    border: 1px solid #e5e5e6;
    color: #8a898e
  }

  .base-dark .mml-input {
    border-color: #1b2d46
  }

  .commerce-light .mml-input {
    border-color: #eaeaea
  }

  .commerce-dark .mml-input {
    border-color: #004ccc
  }

  .livestream-light .mml-input {
    border-color: #bed5e4
  }

  .livestream-dark .mml-input {
    border-color: #081e58
  }

  .messaging-light .mml-input {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-input {
    border-color: #252628
  }

  .team-light .mml-input {
    border-color: #eaeaea
  }

  .team-dark .mml-input {
    border-color: #4e00cc
  }

  .base-dark .mml-input {
    color: #868b91
  }

  .commerce-light .mml-input {
    color: #6c7a93
  }

  .commerce-dark .mml-input {
    color: #afc0df
  }

  .livestream-light .mml-input {
    color: #7ba0bb
  }

  .livestream-dark .mml-input {
    color: #7889b6
  }

  .messaging-light .mml-input {
    color: #8c8c8c
  }

  .messaging-dark .mml-input {
    color: #898a8b
  }

  .team-light .mml-input {
    color: #7c61a8
  }

  .team-dark .mml-input {
    color: #c1afdf
  }

  .mml-input:focus {
    outline: none;
    color: #0e1621
  }

  .base-dark .mml-input:focus {
    color: #fff
  }

  .commerce-light .mml-input:focus {
    color: #202a3c
  }

  .commerce-dark .mml-input:focus {
    color: #e2e5e9
  }

  .livestream-light .mml-input:focus {
    color: #2c2c30
  }

  .livestream-dark .mml-input:focus {
    color: #fff
  }

  .messaging-light .mml-input:focus {
    color: #0e1621
  }

  .messaging-dark .mml-input:focus {
    color: #e8e8e9
  }

  .team-light .mml-input:focus {
    color: #2e2c30
  }

  .team-dark .mml-input:focus {
    color: #e5e2e9
  }

  .mml-card-header + .mml-input, .mml-card .mml-input + .mml-btn {
    border-top: 0
  }

  .mml-progress {
    width: 1em;
    color: #bbb;
    -webkit-animation: mml-animation-dash 1.4s ease-in-out infinite;
    animation: mml-animation-dash 1.4s ease-in-out infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px
  }

  .mml-progress__svg {
    display: block
  }

  .mml-progress__circle {
    stroke: currentColor
  }

  @-webkit-keyframes mml-animation-dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px
    }
    to {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px
    }
  }

  @keyframes mml-animation-dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px
    }
    to {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px
    }
  }

  .mml-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 88%
  }

  .mml-loading__text {
    padding-left: 8px
  }

  .mml-md {
    padding: 2px 0;
    color: #0e1621
  }

  .base-dark .mml-md {
    color: #fff
  }

  .commerce-light .mml-md {
    color: #202a3c
  }

  .commerce-dark .mml-md {
    color: #e2e5e9
  }

  .livestream-light .mml-md {
    color: #2c2c30
  }

  .livestream-dark .mml-md {
    color: #fff
  }

  .messaging-light .mml-md {
    color: #0e1621
  }

  .messaging-dark .mml-md {
    color: #e8e8e9
  }

  .team-light .mml-md {
    color: #2e2c30
  }

  .team-dark .mml-md {
    color: #e5e2e9
  }

  .mml-md blockquote {
    padding: 0 1em;
    margin: 1em 0;
    border: solid #f2f2f2;
    border-width: 0 0 0 3px
  }

  .base-dark .mml-md blockquote {
    border-color: #152438
  }

  .commerce-light .mml-md blockquote {
    border-color: #fff
  }

  .commerce-dark .mml-md blockquote {
    border-color: #1c1f27
  }

  .livestream-light .mml-md blockquote {
    border-color: #fff
  }

  .livestream-dark .mml-md blockquote {
    border-color: #010c29
  }

  .messaging-light .mml-md blockquote {
    border-color: #fff
  }

  .messaging-dark .mml-md blockquote {
    border-color: #3e4042
  }

  .team-light .mml-md blockquote {
    border-color: #fff
  }

  .team-dark .mml-md blockquote {
    border-color: #201c27
  }

  .mml-md pre {
    padding: 2px 4px;
    margin: 0 0 1em;
    white-space: normal;
    background: #e5e5e6
  }

  .base-dark .mml-md pre {
    background: #1b2d46
  }

  .commerce-light .mml-md pre {
    background: #eaeaea
  }

  .commerce-dark .mml-md pre {
    background: #004ccc
  }

  .livestream-light .mml-md pre {
    background: #bed5e4
  }

  .livestream-dark .mml-md pre {
    background: #081e58
  }

  .messaging-light .mml-md pre {
    background: #d6d6d6
  }

  .messaging-dark .mml-md pre {
    background: #252628
  }

  .team-light .mml-md pre {
    background: #eaeaea
  }

  .team-dark .mml-md pre {
    background: #4e00cc
  }

  .mml-md code {
    color: #e83e8c;
    font-size: 87.5%;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
  }

  .mml-md p {
    margin: 0
  }

  .mml-md p:not(:first-child):not(:last-child) {
    margin: 0 0 1em
  }

  .base-dark .mml-md a, .mml-md a {
    color: #006cff
  }

  .commerce-light .mml-md a {
    color: #005fff
  }

  .commerce-dark .mml-md a {
    color: #004ccc
  }

  .livestream-light .mml-md a {
    color: #19a0ff
  }

  .livestream-dark .mml-md a {
    color: #0d47d9
  }

  .messaging-dark .mml-md a, .messaging-light .mml-md a {
    color: #0283ff
  }

  .team-light .mml-md a {
    color: #4e1d9d
  }

  .team-dark .mml-md a {
    color: #5d02f0
  }

  .mml-number, .mml-number__count {
    flex: 1;
    display: flex
  }

  .mml-number__count {
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    font-weight: 700;
    color: #0e1621
  }

  .base-dark .mml-number__count {
    color: #fff
  }

  .commerce-light .mml-number__count {
    color: #202a3c
  }

  .commerce-dark .mml-number__count {
    color: #e2e5e9
  }

  .livestream-light .mml-number__count {
    color: #2c2c30
  }

  .livestream-dark .mml-number__count {
    color: #fff
  }

  .messaging-light .mml-number__count {
    color: #0e1621
  }

  .messaging-dark .mml-number__count {
    color: #e8e8e9
  }

  .team-light .mml-number__count {
    color: #2e2c30
  }

  .team-dark .mml-number__count {
    color: #e5e2e9
  }

  .mml-number .mml-btn {
    margin: 8px
  }

  .mml-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -4px;
    margin-left: -4px;
    min-width: 100%
  }

  .mml-card {
    width: 100%
  }

  .mml-card .mml-btnlist {
    font-size: 14px;
    border: 0
  }

  .mml-card > :not(:first-child):not(:last-child) {
    background: #fff
  }

  .base-dark .mml-card > :not(:first-child):not(:last-child) {
    background: #0e1723
  }

  .commerce-light .mml-card > :not(:first-child):not(:last-child) {
    background: #f5f9ff
  }

  .commerce-dark .mml-card > :not(:first-child):not(:last-child) {
    background: #0c0e12
  }

  .livestream-light .mml-card > :not(:first-child):not(:last-child) {
    background: #f1faff
  }

  .livestream-dark .mml-card > :not(:first-child):not(:last-child) {
    background: #00091f
  }

  .messaging-light .mml-card > :not(:first-child):not(:last-child) {
    background: #f7f7f8
  }

  .messaging-dark .mml-card > :not(:first-child):not(:last-child) {
    background: #2d2e2f
  }

  .team-light .mml-card > :not(:first-child):not(:last-child) {
    background: #f9f5ff
  }

  .team-dark .mml-card > :not(:first-child):not(:last-child) {
    background: #0f0c12
  }

  .mml-card > .mml-number {
    border-color: #e5e5e6;
    border-style: solid;
    border-width: 0 1px
  }

  .base-dark .mml-card > .mml-number {
    border-color: #1b2d46
  }

  .commerce-light .mml-card > .mml-number {
    border-color: #eaeaea
  }

  .commerce-dark .mml-card > .mml-number {
    border-color: #004ccc
  }

  .livestream-light .mml-card > .mml-number {
    border-color: #bed5e4
  }

  .livestream-dark .mml-card > .mml-number {
    border-color: #081e58
  }

  .messaging-light .mml-card > .mml-number {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-card > .mml-number {
    border-color: #252628
  }

  .team-light .mml-card > .mml-number {
    border-color: #eaeaea
  }

  .team-dark .mml-card > .mml-number {
    border-color: #4e00cc
  }

  .mml-card > .mml-btn {
    min-width: 100%;
    border: 1px solid #e5e5e6
  }

  .base-dark .mml-card > .mml-btn {
    border-color: #1b2d46
  }

  .commerce-light .mml-card > .mml-btn {
    border-color: #eaeaea
  }

  .commerce-dark .mml-card > .mml-btn {
    border-color: #004ccc
  }

  .livestream-light .mml-card > .mml-btn {
    border-color: #bed5e4
  }

  .livestream-dark .mml-card > .mml-btn {
    border-color: #081e58
  }

  .messaging-light .mml-card > .mml-btn {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-card > .mml-btn {
    border-color: #252628
  }

  .team-light .mml-card > .mml-btn {
    border-color: #eaeaea
  }

  .team-dark .mml-card > .mml-btn {
    border-color: #4e00cc
  }

  .mml-card > .mml-btn:last-child {
    padding: 10px 16px;
    border-radius: 0
  }

  .mml-align-left .mml-card > .mml-btn:last-child {
    border-bottom-right-radius: 16px
  }

  .mml-align-right .mml-card > .mml-btn:last-child {
    border-bottom-left-radius: 16px
  }

  .mml-card-body {
    border-color: #e5e5e6;
    border-style: solid;
    border-width: 0 1px;
    background: #fff;
    color: #0e1621;
    font-size: 14px
  }

  .base-dark .mml-card-body {
    border-color: #1b2d46
  }

  .commerce-light .mml-card-body {
    border-color: #eaeaea
  }

  .commerce-dark .mml-card-body {
    border-color: #004ccc
  }

  .livestream-light .mml-card-body {
    border-color: #bed5e4
  }

  .livestream-dark .mml-card-body {
    border-color: #081e58
  }

  .messaging-light .mml-card-body {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-card-body {
    border-color: #252628
  }

  .team-light .mml-card-body {
    border-color: #eaeaea
  }

  .team-dark .mml-card-body {
    border-color: #4e00cc
  }

  .base-dark .mml-card-body {
    background: #0e1723
  }

  .commerce-light .mml-card-body {
    background: #f5f9ff
  }

  .commerce-dark .mml-card-body {
    background: #0c0e12
  }

  .livestream-light .mml-card-body {
    background: #f1faff
  }

  .livestream-dark .mml-card-body {
    background: #00091f
  }

  .messaging-light .mml-card-body {
    background: #f7f7f8
  }

  .messaging-dark .mml-card-body {
    background: #2d2e2f
  }

  .team-light .mml-card-body {
    background: #f9f5ff
  }

  .team-dark .mml-card-body {
    background: #0f0c12
  }

  .base-dark .mml-card-body {
    color: #fff
  }

  .commerce-light .mml-card-body {
    color: #202a3c
  }

  .commerce-dark .mml-card-body {
    color: #e2e5e9
  }

  .livestream-light .mml-card-body {
    color: #2c2c30
  }

  .livestream-dark .mml-card-body {
    color: #fff
  }

  .messaging-light .mml-card-body {
    color: #0e1621
  }

  .messaging-dark .mml-card-body {
    color: #e8e8e9
  }

  .team-light .mml-card-body {
    color: #2e2c30
  }

  .team-dark .mml-card-body {
    color: #e5e2e9
  }

  .mml-card-body > .mml-md, .mml-card-body > .mml-text {
    padding: 0 8px 8px
  }

  .mml-card-body > .mml-md:first-of-type, .mml-card-body > .mml-text:first-of-type {
    padding-top: 8px
  }

  .mml-card-header {
    display: flex;
    align-items: center;
    min-width: 100%;
    padding: 15px 0;
    font-size: 13px;
    background: #f2f2f2;
    color: #8a898e;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border: 1px solid #e5e5e6
  }

  .base-dark .mml-card-header {
    background: #152438
  }

  .commerce-light .mml-card-header {
    background: #fff
  }

  .commerce-dark .mml-card-header {
    background: #1c1f27
  }

  .livestream-light .mml-card-header {
    background: #fff
  }

  .livestream-dark .mml-card-header {
    background: #010c29
  }

  .messaging-light .mml-card-header {
    background: #fff
  }

  .messaging-dark .mml-card-header {
    background: #3e4042
  }

  .team-light .mml-card-header {
    background: #fff
  }

  .team-dark .mml-card-header {
    background: #201c27
  }

  .base-dark .mml-card-header {
    color: #868b91
  }

  .commerce-light .mml-card-header {
    color: #6c7a93
  }

  .commerce-dark .mml-card-header {
    color: #afc0df
  }

  .livestream-light .mml-card-header {
    color: #7ba0bb
  }

  .livestream-dark .mml-card-header {
    color: #7889b6
  }

  .messaging-light .mml-card-header {
    color: #8c8c8c
  }

  .messaging-dark .mml-card-header {
    color: #898a8b
  }

  .team-light .mml-card-header {
    color: #7c61a8
  }

  .team-dark .mml-card-header {
    color: #c1afdf
  }

  .base-dark .mml-card-header {
    border-color: #1b2d46
  }

  .commerce-light .mml-card-header {
    border-color: #eaeaea
  }

  .commerce-dark .mml-card-header {
    border-color: #004ccc
  }

  .livestream-light .mml-card-header {
    border-color: #bed5e4
  }

  .livestream-dark .mml-card-header {
    border-color: #081e58
  }

  .messaging-light .mml-card-header {
    border-color: #d6d6d6
  }

  .messaging-dark .mml-card-header {
    border-color: #252628
  }

  .team-light .mml-card-header {
    border-color: #eaeaea
  }

  .team-dark .mml-card-header {
    border-color: #4e00cc
  }

  .mml-card-header .mml-icon {
    padding-left: 16px;
    margin-right: -8px
  }

  .mml-card-header__text {
    padding: 0 16px;
    font-weight: 700
  }

  .mml-datepicker {
    flex: 1;
    display: flex
  }

  .mml-datepicker__select {
    flex: 1
  }

  .mml-datepicker__select > div {
    overflow-y: scroll;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none
  }

  .mml-datepicker__select > div::-webkit-scrollbar {
    display: none
  }

  .mml-datepicker__item {
    padding: 4px 5px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .mml-datepicker__item--selected {
    color: #006cff;
    font-weight: 700
  }

  .base-dark .mml-datepicker__item--selected {
    color: #006cff
  }

  .commerce-light .mml-datepicker__item--selected {
    color: #005fff
  }

  .commerce-dark .mml-datepicker__item--selected {
    color: #004ccc
  }

  .livestream-light .mml-datepicker__item--selected {
    color: #19a0ff
  }

  .livestream-dark .mml-datepicker__item--selected {
    color: #0d47d9
  }

  .messaging-dark .mml-datepicker__item--selected, .messaging-light .mml-datepicker__item--selected {
    color: #0283ff
  }

  .team-light .mml-datepicker__item--selected {
    color: #4e1d9d
  }

  .team-dark .mml-datepicker__item--selected {
    color: #5d02f0
  }

  .mml-datepicker--double .mml-datepicker__date {
    text-align: right
  }

  .mml-datepicker--single .mml-datepicker__select {
    text-align: center
  }

  .mml-scheduler .mml-datepicker {
    height: 217px;
    background: #fff
  }

  .base-dark .mml-scheduler .mml-datepicker {
    background: #0e1723
  }

  .commerce-light .mml-scheduler .mml-datepicker {
    background: #f5f9ff
  }

  .commerce-dark .mml-scheduler .mml-datepicker {
    background: #0c0e12
  }

  .livestream-light .mml-scheduler .mml-datepicker {
    background: #f1faff
  }

  .livestream-dark .mml-scheduler .mml-datepicker {
    background: #00091f
  }

  .messaging-light .mml-scheduler .mml-datepicker {
    background: #f7f7f8
  }

  .messaging-dark .mml-scheduler .mml-datepicker {
    background: #2d2e2f
  }

  .team-light .mml-scheduler .mml-datepicker {
    background: #f9f5ff
  }

  .team-dark .mml-scheduler .mml-datepicker {
    background: #0f0c12
  }

  .mml-scheduler .mml-datepicker__select {
    position: relative
  }

  .mml-scheduler .mml-datepicker__select:after, .mml-scheduler .mml-datepicker__select:before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    height: 10%;
    min-height: 60px;
    pointer-events: none
  }

  .mml-scheduler .mml-datepicker__select:before {
    top: 0;
    background-image: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0))
  }

  .base-dark .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #0e1723, rgba(255, 255, 255, 0))
  }

  .commerce-light .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #f5f9ff, rgba(255, 255, 255, 0))
  }

  .commerce-dark .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #0c0e12, rgba(255, 255, 255, 0))
  }

  .livestream-light .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #f1faff, rgba(255, 255, 255, 0))
  }

  .livestream-dark .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #00091f, rgba(255, 255, 255, 0))
  }

  .messaging-light .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #f7f7f8, rgba(255, 255, 255, 0))
  }

  .messaging-dark .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #2d2e2f, rgba(255, 255, 255, 0))
  }

  .team-light .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #f9f5ff, rgba(255, 255, 255, 0))
  }

  .team-dark .mml-scheduler .mml-datepicker__select:before {
    background-image: linear-gradient(180deg, #0f0c12, rgba(255, 255, 255, 0))
  }

  .mml-scheduler .mml-datepicker__select:after {
    bottom: 0;
    background-image: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0))
  }

  .base-dark .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #0e1723, rgba(255, 255, 255, 0))
  }

  .commerce-light .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #f5f9ff, rgba(255, 255, 255, 0))
  }

  .commerce-dark .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #0c0e12, rgba(255, 255, 255, 0))
  }

  .livestream-light .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #f1faff, rgba(255, 255, 255, 0))
  }

  .livestream-dark .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #00091f, rgba(255, 255, 255, 0))
  }

  .messaging-light .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #f7f7f8, rgba(255, 255, 255, 0))
  }

  .messaging-dark .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #2d2e2f, rgba(255, 255, 255, 0))
  }

  .team-light .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #f9f5ff, rgba(255, 255, 255, 0))
  }

  .team-dark .mml-scheduler .mml-datepicker__select:after {
    background-image: linear-gradient(0deg, #0f0c12, rgba(255, 255, 255, 0))
  }

  .mml-success {
    display: flex;
    justify-content: center;
    padding: 8px;
    font-size: 88%
  }

  .base-dark .mml-success, .mml-success {
    color: #006cff
  }

  .commerce-light .mml-success {
    color: #005fff
  }

  .commerce-dark .mml-success {
    color: #004ccc
  }

  .livestream-light .mml-success {
    color: #19a0ff
  }

  .livestream-dark .mml-success {
    color: #0d47d9
  }

  .messaging-dark .mml-success, .messaging-light .mml-success {
    color: #0283ff
  }

  .team-light .mml-success {
    color: #4e1d9d
  }

  .team-dark .mml-success {
    color: #5d02f0
  }

  .mml-text {
    padding: 2px 0;
    color: #0e1621
  }

  .base-dark .mml-text {
    color: #fff
  }

  .commerce-light .mml-text {
    color: #202a3c
  }

  .commerce-dark .mml-text {
    color: #e2e5e9
  }

  .livestream-light .mml-text {
    color: #2c2c30
  }

  .livestream-dark .mml-text {
    color: #fff
  }

  .messaging-light .mml-text {
    color: #0e1621
  }

  .messaging-dark .mml-text {
    color: #e8e8e9
  }

  .team-light .mml-text {
    color: #2e2c30
  }

  .team-dark .mml-text {
    color: #e5e2e9
  }

  .mml-text + .mml-md, .mml-text + .mml-text {
    padding-top: 2px
  }

  .mml-text + .mml-btnlist, .mml-text + .mml-image {
    margin-top: 4px
  }

  [class*=" rfu-"], [class^=rfu-] {
    font-family: Avenir, Arial, Helvetica, sans-serif;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .rfu-file-previewer {
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 4px;
    overflow: hidden;
    margin: 8px 0;
    position: relative
  }

  .rfu-file-previewer ol {
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none
  }

  .rfu-file-previewer ol li {
    position: relative;
    padding: 8px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, .1)
  }

  .rfu-file-previewer ol li:last-child {
    border-color: transparent
  }

  .rfu-file-previewer__file {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer
  }

  .rfu-file-previewer__file:hover {
    background: #fafafa
  }

  .rfu-file-previewer__file a {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 8px;
    color: #414d54;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .rfu-file-previewer__file svg {
    min-width: 25px
  }

  .rfu-file-previewer__file--uploading {
    opacity: .4
  }

  .rfu-file-previewer__file--failed a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8b9297
  }

  .rfu-file-previewer__file--failed a:after {
    text-decoration: none
  }

  .rfu-file-previewer__image {
    min-width: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .rfu-file-previewer__loading-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 1000
  }

  .rfu-file-previewer__close-button {
    position: relative;
    z-index: 10000
  }

  .rfu-file-previewer__failed {
    background: #ff6363
  }

  .rfu-file-previewer__failed, .rfu-file-previewer__retry {
    padding: 3px 6px;
    margin-left: 8px;
    color: #fff;
    border-radius: 4px;
    font-size: 12px
  }

  .rfu-file-previewer__retry {
    text-decoration: none;
    background: #63e5a4
  }

  .rfu-file-upload-button {
    cursor: pointer
  }

  .rfu-file-upload-button svg {
    fill: #a0b2b8
  }

  .rfu-file-upload-button:hover svg {
    fill: #88979c
  }

  .rfu-file-upload-button label {
    cursor: pointer
  }

  .rfu-file-upload-button .rfu-file-input {
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1
  }

  .rfu-icon-button {
    cursor: pointer;
    position: relative;
    padding: 4px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .rfu-icon-button svg {
    margin: 4px;
    position: relative;
    z-index: 50;
    fill: #a0b2b8
  }

  .rfu-icon-button:hover svg {
    fill: #88979c
  }

  .rfu-dropzone .rfu-dropzone__notifier {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 30px;
    z-index: 90;
    display: none;
    border-radius: 4px
  }

  .rfu-dropzone--accept .rfu-dropzone__notifier {
    background: rgba(0, 212, 106, .83);
    display: block
  }

  .rfu-dropzone--reject .rfu-dropzone__notifier {
    background: rgba(255, 0, 0, .83);
    display: block
  }

  .rfu-dropzone__inner {
    width: 100%;
    height: 100%;
    padding: 30px;
    border: 1px dashed #fff;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    color: #fff;
    font-weight: 800;
    font-size: 12px
  }

  .rfu-dropzone--reject .rfu-dropzone__inner {
    display: none
  }

  .rfu-image-previewer {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 8px 0
  }

  .rfu-image-previewer, .rfu-image-previewer__image {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .rfu-image-previewer__image {
    width: 100px;
    height: 100px;
    position: relative;
    margin-right: 8px;
    margin-bottom: 8px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .rfu-image-previewer__image--loaded .rfu-thumbnail__overlay {
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.4)), to(transparent));
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0, transparent)
  }

  .rfu-image-previewer__image .rfu-thumbnail__wrapper {
    position: absolute
  }

  .rfu-image-previewer__image .rfu-loading-indicator {
    position: absolute;
    z-index: 90
  }

  .rfu-image-previewer__retry {
    z-index: 90
  }

  .rfu-image-upload-button {
    cursor: pointer
  }

  .rfu-image-upload-button svg {
    fill: #a0b2b8
  }

  .rfu-image-upload-button:hover svg {
    fill: #88979c
  }

  .rfu-image-upload-button label {
    cursor: pointer
  }

  .rfu-image-upload-button .rfu-image-input {
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1
  }

  .rfu-loading-indicator {
    margin: 0 auto;
    width: 70px;
    text-align: center
  }

  .rfu-loading-indicator > div {
    width: 18px;
    height: 18px;
    background-color: #ccc;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s ease-in-out infinite both;
    animation: sk-bouncedelay 1.4s ease-in-out infinite both
  }

  .rfu-loading-indicator .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s
  }

  .rfu-loading-indicator .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, to {
      -webkit-transform: scale(0);
      transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, to {
      -webkit-transform: scale(0);
      transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }

  @-webkit-keyframes spinner {
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }

  @keyframes spinner {
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }

  .rfu-loading-indicator__spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #eee;
    border-top-color: #00d46a;
    border-radius: 50%;
    -webkit-animation: spinner .6s linear infinite;
    animation: spinner .6s linear infinite
  }

  .rfu-thumbnail__wrapper {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
    position: relative
  }

  .rfu-thumbnail__overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 5px
  }

  .rfu-thumbnail__image {
    width: inherit;
    height: inherit;
    -o-object-fit: cover;
    object-fit: cover
  }

  .rfu-thumbnail-placeholder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px dashed #bfbfbf;
    border-radius: 4px;
    cursor: pointer
  }

  .rfu-thumbnail-placeholder:hover {
    background: #f2f2f2
  }

  .str-chat__actions-box {
    background: var(--white);
    background-image: linear-gradient(-180deg, var(--bg-gradient-start), var(--bg-gradient-end));
    box-shadow: 0 1px 0 0 var(--border);
    border-radius: var(--border-radius-md);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    position: absolute;
    min-width: 150px
  }

  .str-chat__actions-box--right {
    right: 0;
    top: calc(100% + 2px)
  }

  .str-chat__actions-box--left {
    left: 0;
    top: calc(100% + 2px)
  }

  .str-chat__actions-box > button {
    text-align: left;
    width: 100%;
    border: none;
    margin: 0;
    padding: var(--xs-p);
    font-size: var(--sm-font);
    background: none;
    cursor: pointer
  }

  .str-chat__actions-box > button:not(:last-of-type) {
    box-shadow: 0 1px 0 0 var(--border)
  }

  .str-chat__actions-box > button:hover {
    color: var(--primary-color)
  }

  .dark.str-chat .str-chat__message-actions-box {
    background: var(--grey);
    background-image: linear-gradient(-180deg, var(--bg-gradient-start), var(--bg-gradient-end));
    box-shadow: 0 0 2px 0 var(--border), 0 1px 0 0 var(--border), 0 1px 8px 0 var(--border)
  }

  .dark.str-chat .str-chat__message-actions-box button {
    color: var(--white)
  }

  .dark.str-chat .str-chat__message-actions-box button:hover {
    color: var(--primary-color)
  }

  .str-chat__message-attachment-actions-form {
    width: 100%;
    margin: var(--xs-m) 0;
    padding: 0;
    display: flex
  }

  .str-chat__message-attachment-actions-button {
    flex: 1;
    border: none;
    background: none;
    margin: 0 var(--xxs-m);
    padding: var(--xs-p) var(--xs-p);
    border-radius: var(--border-radius-round);
    outline: none
  }

  .str-chat__message-attachment-actions-button:focus {
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-faded)
  }

  .str-chat__message-attachment-actions-button--primary {
    background-color: var(--primary-color);
    color: var(--white)
  }

  .str-chat__message-attachment-actions-button--default {
    border: 2px solid var(--border)
  }

  .dark.str-chat .str-chat__message-attachment-actions-button {
    color: var(--white)
  }

  .dark.str-chat .str-chat__message-attachment-actions-button--default {
    border-color: var(--grey-whisper)
  }

  .str-chat__attachment {
    max-width: 450px
  }

  .str-chat__player-wrapper {
    position: relative;
    padding-top: 56.25%
  }

  .str-chat__player-wrapper .react-player {
    position: absolute;
    top: 0;
    left: 0
  }

  .str-chat__message .str-chat__player-wrapper .react-player {
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 0;
    overflow: hidden
  }

  .str-chat__message--me .str-chat__player-wrapper .react-player {
    border-radius: var(--border-radius) var(--border-radius) 0 var(--border-radius);
    overflow: hidden
  }

  .str-chat__message-attachment {
    width: 100%;
    max-width: 375px;
    border-radius: var(--border-radius);
    margin: var(--xs-m) auto var(--xs-m) 0;
    padding: 0
  }

  .str-chat__message--me .str-chat__message-attachment {
    padding-left: 0;
    margin: var(--xs-m) 0 var(--xs-m) auto
  }

  .str-chat__message-team.thread-list .str-chat__message-attachment {
    max-width: 200px
  }

  .str-chat__message-attachment {
    overflow: hidden
  }

  .str-chat__message-attachment:hover {
    background: transparent
  }

  .str-chat__message-attachment--card--no-image {
    height: 60px
  }

  .str-chat__message-attachment--card--actions {
    height: auto
  }

  .str-chat__message-attachment-file {
    width: 100%
  }

  .str-chat__message-attachment-file--item {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: var(--md-font);
    line-height: 22px;
    border-left: 1px solid var(--border);
    width: auto;
    padding-left: var(--xxs-p)
  }

  .str-chat__message-attachment-file--item:hover {
    background: var(--white)
  }

  .str-chat__message-attachment-file--item img, .str-chat__message-attachment-file--item svg {
    margin-right: var(--xs-m)
  }

  .str-chat__message-attachment-file--item-text {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .str-chat__message-attachment-file--item a {
    font-weight: var(--font-weight-bold);
    color: var(--black);
    opacity: .8;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%
  }

  .str-chat__message-attachment-file--item a::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
  }

  .str-chat__message-attachment-file--item span {
    line-height: 14px;
    font-size: var(--sm-font);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    display: block;
    color: var(--black);
    opacity: .5
  }

  .str-chat__message-attachment--image {
    height: auto;
    max-height: 300px;
    max-width: 100%;
    border-radius: 0
  }

  .str-chat__message-attachment--image:hover {
    background: transparent
  }

  .str-chat__message-attachment--image img {
    height: inherit;
    width: auto;
    max-height: inherit;
    max-width: 100%;
    display: block;
    object-fit: cover;
    overflow: hidden
  }

  .str-chat__message-attachment--image img:hover {
    background: transparent
  }

  .str-chat__message-attachment--image--actions {
    height: 320px
  }

  .str-chat__message-attachment--image--actions img {
    height: calc(320px - 40px)
  }

  .str-chat__message-attachment--media {
    width: 300px
  }

  .str-chat__message-attachment-card {
    min-height: 60px
  }

  .str-chat__message-attachment-card__giphy-logo {
    height: 20px;
    width: auto
  }

  .messaging.str-chat .str-chat__message-attachment.str-chat__message-attachment--image--actions .str-chat__message-attachment--img {
    max-height: 254px
  }

  .livestream.str-chat .str-chat__message-attachment.str-chat__message-attachment--file {
    max-width: 100%
  }

  .livestream.str-chat .str-chat__message-attachment.str-chat__message-attachment--file .str-chat__message-attachment-file--item {
    border-left: none
  }

  .livestream.str-chat .str-chat__message-attachment.str-chat__message-attachment--file .str-chat__message-attachment-file--item:hover {
    background: var(--grey-whisper)
  }

  .livestream.str-chat.dark .str-chat__message-attachment-file--item a, .livestream.str-chat.dark .str-chat__message-attachment-file--item span {
    color: var(--white)
  }

  .livestream.str-chat.dark .str-chat__message-attachment-file--item:hover {
    background: transparent
  }

  .str-chat__avatar {
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
    margin-right: var(--xs-m);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-transform: uppercase;
    overflow: hidden
  }

  .str-chat__avatar--circle {
    border-radius: var(--border-radius-round)
  }

  .str-chat__avatar--rounded {
    border-radius: var(--border-radius-sm)
  }

  .str-chat__avatar--square {
    border-radius: 0
  }

  .str-chat__avatar-image, .str-chat__avatar-fallback {
    display: block;
    width: inherit;
    height: inherit;
    object-fit: cover;
    text-align: center
  }

  .str-chat__avatar-image--loaded {
    background-color: none
  }

  .str-chat__avatar-fallback {
    background-color: var(--primary-color)
  }

  .str-chat__message--me > .str-chat-angular__avatar-host, .str-chat__message--me > .str-chat__avatar {
    order: 1
  }

  .str-chat__message--me > .str-chat-angular__avatar-host > .str-chat__avatar, .str-chat__message--me > .str-chat__avatar {
    margin: 0;
    margin-left: var(--xs-m)
  }

  .str-chat__li--top .str-chat__message > .str-chat__avatar, .str-chat__li--top .str-chat__message > .str-chat-angular__avatar-host, .str-chat__li--middle .str-chat__message > .str-chat__avatar, .str-chat__li--middle .str-chat__message > .str-chat-angular__avatar-host {
    visibility: hidden
  }

  .str-chat__audio__wrapper {
    height: 80px;
    overflow: hidden;
    position: relative;
    border-radius: var(--border-radius-sm);
    margin: 0;
    display: flex;
    background: var(--grey-whisper)
  }

  .str-chat__audio__image {
    height: 80px;
    width: 80px;
    position: relative;
    z-index: 20
  }

  .str-chat__audio__image--overlay {
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--overlay-dark);
    z-index: 30;
    font-size: 3em;
    color: var(--white-smoke);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none
  }

  .str-chat__audio__image--button {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px
  }

  .str-chat__audio__image--button svg {
    fill: var(--white-smoke)
  }

  .str-chat__audio__image img {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    object-fit: cover
  }

  .str-chat__audio__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: var(--xs-p) var(--sm-p);
    margin-left: var(--sm-m);
    width: 100%
  }

  .str-chat__audio__content--title {
    margin: 0;
    padding: 0;
    line-height: 1
  }

  .str-chat__audio__content--subtitle {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-size: var(--sm-font);
    opacity: .49
  }

  .str-chat__audio__content--progress {
    height: 6px;
    width: 100%;
    border-radius: var(--border-radius-sm);
    background: var(--overlay);
    padding: 1px;
    margin: calc(var(--xxs-m) / 2) 0
  }

  .str-chat__audio__content--progress > div {
    height: 4px;
    border-radius: var(--border-radius-sm);
    width: 0%;
    background: var(--primary-color);
    transition: width .5s linear
  }

  .str-chat.dark .str-chat__audio__wrapper {
    background: var(--black);
    color: var(--white)
  }

  .str-chat.dark .str-chat__audio__content--progress {
    background: var(--grey)
  }

  .str-chat__message-attachment-card {
    position: relative;
    background: var(--white);
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 0;
    overflow: hidden;
    font-size: var(--sm-font);
    border: 10px solid var(--border);
    margin: var(--lg-m) 0 0 0
  }

  .str-chat__message-attachment-card--header {
    width: 100%;
    height: 175px
  }

  .str-chat__message-attachment-card--header img {
    width: inherit;
    height: inherit;
    object-fit: cover
  }

  .str-chat__message-attachment-card--title {
    font-weight: var(--font-weight-bold);
    flex: 1
  }

  .str-chat__message-attachment-card--flex {
    min-width: 0
  }

  .str-chat__message-attachment-card--flex, .str-chat__message-attachment-card--flex > * {
    overflow: hidden;
    text-overflow: ellipsis
  }

  .str-chat__message-attachment-card--content {
    padding: var(--xs-p) var(--sm-p);
    margin: calc(var(--xs-m) * -1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
  }

  .str-chat__message-attachment-card--content > * {
    margin: var(--xs-m) 0
  }

  .str-chat__message-attachment-card--url {
    text-decoration: none;
    display: block;
    color: var(--black);
    text-transform: uppercase;
    opacity: .5
  }

  .str-chat__message-attachment-card--url::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
  }

  .str-chat__message-attachment-card--giphy .str-chat__message-attachment-card--header {
    height: unset
  }

  .str-chat.commerce .str-chat__message-attachment-card {
    max-width: 375px;
    width: 100%
  }

  .str-chat__message--me .str-chat__message-attachment-card {
    background: var(--overlay);
    border: 1px solid transparent;
    border-radius: var(--border-radius) var(--border-radius) 0 var(--border-radius)
  }

  .dark.str-chat .str-chat__message-attachment-card__giphy-logo {
    filter: invert(100%)
  }

  .str-chat__header {
    display: flex;
    padding: var(--xs-p);
    border-bottom: 1px solid var(--border)
  }

  .str-chat__header-livestream {
    padding: var(--xs-p) var(--xl-p);
    min-height: 70px;
    display: flex;
    align-items: center;
    font-family: var(--second-font);
    background: var(--white);
    box-shadow: 0 1px 1px 0 var(--border)
  }

  .str-chat__header-livestream-left {
    flex: 1;
    font-size: var(--md-font)
  }

  .str-chat__header-livestream-left--title {
    font-weight: var(--font-weight-bold);
    margin: 0
  }

  .str-chat__header-livestream-left--members {
    font-weight: var(--font-weight-regular);
    margin: 0
  }

  .str-chat__header-livestream-left--livelabel {
    position: relative;
    left: 5px;
    font-size: var(--sm-font);
    text-transform: uppercase;
    color: var(--red);
    display: inline-block;
    animation: pulse 2s infinite
  }

  .str-chat__header-livestream-left--livelabel::before {
    content: "";
    position: relative;
    top: -2px;
    left: -4px;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: var(--border-radius-round);
    background-color: var(--accent_red)
  }

  @keyframes pulse {
    0% {
      opacity: .5
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: .5
    }
  }

  .str-chat__header-livestream-right {
    display: flex;
    margin: 0 calc(var(--xxs-m) * -1)
  }

  .str-chat__header-livestream-right-button-wrapper {
    position: relative
  }

  .str-chat__header .str-chat__avatar {
    margin: 0 var(--sm-m) 0 0
  }

  .str-chat__title {
    font-weight: var(--font-weight-semi-bold)
  }

  .str-chat__meta {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }

  .str-chat__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: var(--md-font);
    color: var(--grey)
  }

  .str-chat__square-button {
    background: var(--grey-whisper);
    border: 1px solid var(--border);
    border-radius: var(--border-radius-sm);
    padding: var(--xs-p);
    margin: 0 var(--xxs-m);
    display: flex;
    align-items: center;
    justify-content: center
  }

  .str-chat__square-button svg {
    fill: var(--black)
  }

  .str-chat__square-button:active {
    background-color: var(--grey-whisper)
  }

  .dark.str-chat .str-chat__square-button {
    background: var(--white5);
    box-shadow: 0 1px 0 0 var(--black70);
    border-radius: var(--border-radius-sm)
  }

  .dark.str-chat .str-chat__square-button svg {
    fill: var(--white70)
  }

  .messaging.str-chat .str-chat__header-livestream {
    position: relative;
    z-index: 1;
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    background: var(--white-snow);
    box-shadow: 0 7px 9px 0 var(--border), 0 1px 0 0 var(--border)
  }

  @media screen and (max-width: 960px) {
    .messaging.str-chat .str-chat__header-livestream {
      padding-left: var(--sm-p);
      padding-right: var(--sm-p)
    }
  }

  .messaging.str-chat.dark .str-chat__header-livestream {
    background: var(--dark-grey);
    box-shadow: 0 7px 9px 0 var(--border), 0 1px 0 0 var(--border);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    color: var(--white)
  }

  .livestream.str-chat .str-chat__header-livestream {
    position: relative;
    z-index: 1;
    background: var(--grey-whisper);
    box-shadow: 0 1px 1px 0 var(--border)
  }

  .livestream.str-chat.dark .str-chat__header-livestream {
    background: var(--white5);
    box-shadow: 0 1px 1px 0 var(--border)
  }

  .livestream.str-chat.dark .str-chat__header-livestream-left--title, .livestream.str-chat.dark .str-chat__header-livestream-left--members {
    color: var(--white)
  }

  .livestream.str-chat.dark .str-chat__header-livestream-left--title {
    font-size: var(--lg-font)
  }

  .commerce.str-chat .str-chat__header-livestream {
    background: var(--white80);
    box-shadow: 0 7px 9px 0 var(--black5), 0 1px 0 0 var(--black5);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    padding: var(--md-p)
  }

  .commerce.str-chat .str-chat__header-livestream-left--title {
    font-size: var(--xxl-font);
    margin: 0;
    line-height: 1;
    font-weight: var(--font-weight-regular)
  }

  .commerce.str-chat .str-chat__header-livestream-left--subtitle {
    margin: var(--xs-m) 0;
    font-size: var(--lg-font)
  }

  .commerce.str-chat .str-chat__header-livestream-left--members {
    display: none
  }

  .commerce.str-chat .str-chat__header-livestream-right-button--info {
    display: none
  }

  .commerce.str-chat.dark .str-chat__header-livestream {
    background: var(--grey);
    box-shadow: 0 7px 9px 0 var(--black5), 0 1px 0 0 var(--black5);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    color: var(--white)
  }

  .team.str-chat.dark .str-chat__header-livestream {
    background: var(--dark-grey);
    box-shadow: 0 1px 1px 0 var(--black30)
  }

  .team.str-chat.dark .str-chat__header-livestream-left {
    color: var(--white)
  }

  .team.str-chat.dark .str-chat__header-livestream-left--title {
    font-size: var(--lg-font)
  }

  .team.str-chat.dark .str-chat__header-livestream-left--members {
    font-size: var(--sm-font)
  }

  .str-chat__header-hamburger {
    width: 30px;
    height: 38px;
    padding: var(--xs-p) var(--xs-p) var(--xs-p) 0;
    margin-right: var(--xs-m);
    display: none;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer
  }

  .str-chat__header-hamburger:hover .str-chat__header-hamburger--line {
    background: var(--primary-color)
  }

  @media screen and (max-width: 960px) {
    .str-chat__header-hamburger {
      display: flex
    }
  }

  .str-chat__header-hamburger--line {
    width: 100%;
    height: 2px;
    background: var(--primary-color);
    border-radius: var(--border-radius-sm)
  }

  .str-chat__channel-list {
    flex: 1;
    overflow-y: auto;
    max-width: 300px;
    background: var(--blue-alice);
    box-shadow: 1px 0 0 0 var(--black5);
    display: flex;
    flex-direction: column
  }

  .str-chat__channel-list--channels {
    flex: 1
  }

  .str-chat__channel-list .channel_preview {
    padding: var(--xs-p) var(--sm-p);
    border-bottom: 1px solid var(--black10)
  }

  .str-chat__button {
    background: var(--white);
    box-shadow: 0 1px 1px 0 var(--black10), 0 1px 4px 0 var(--black10);
    font-size: var(--md-font);
    padding: var(--sm-p) var(--xxl-p);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 10px);
    margin: var(--xxs-m);
    border: 1px solid transparent
  }

  .str-chat__button:active, .str-chat__button:focus {
    outline: none;
    box-shadow: 0 0 1px 0 var(--border), 0 1px 4px 0 var(--border), 0 0 0 2px var(--primary-color-faded);
    border: 1px solid var(--primary-color)
  }

  .str-chat__button > * {
    margin: 0 var(--xxs-m)
  }

  .str-chat__button--round {
    border-radius: var(--border-radius-round)
  }

  .str-chat-channel-checkbox {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100001
  }

  .str-chat-channel-list-burger {
    width: 10px;
    height: 50px;
    background: var(--white);
    border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
    padding: var(--xxs-p);
    box-shadow: 0 4px 6px var(--border);
    position: fixed;
    top: 10px;
    left: 0;
    z-index: 10000;
    justify-content: center;
    cursor: pointer
  }

  .str-chat-channel-list-burger div {
    width: 4px;
    height: 100%;
    border-radius: var(--border-radius-sm);
    background: var(--border)
  }

  @media screen and (max-width: 960px) {
    .str-chat-channel-list-burger {
      display: flex
    }

    .str-chat-channel-list.messaging, .str-chat-channel-list.team, .str-chat-channel-list.commerce {
      position: fixed;
      left: -380px;
      top: 0;
      z-index: 1001;
      min-height: 100%;
      overflow-y: auto;
      box-shadow: 7px 0 9px 0 var(--black5), 1px 0 0 0 var(--black5);
      transition: left 200ms ease-in-out
    }

    .str-chat-channel-list--open.messaging, .str-chat-channel-list--open.team, .str-chat-channel-list--open.commerce {
      left: 0
    }
  }

  .str-chat-channel-list .str-chat__channel-list-messenger {
    padding: 0
  }

  .str-chat-channel-list .str-chat__channel-list-messenger__main {
    padding: var(--sm-p) var(--sm-p) 0 var(--sm-p);
    overflow-y: auto
  }

  .str-chat__channel-list-messenger {
    padding: var(--sm-p) var(--sm-p) 0 var(--sm-p);
    min-width: 300px;
    background: var(--grey-gainsboro)
  }

  .str-chat__channel-preview-messenger {
    display: flex;
    width: 100%;
    border: none;
    padding: var(--xs-p);
    align-items: center;
    background: transparent;
    box-shadow: 0 1px 0 0 var(--border);
    text-align: left;
    margin: var(--xs-m) 0;
    color: var(--black)
  }

  .str-chat__channel-preview-messenger:hover {
    cursor: pointer
  }

  .str-chat__channel-preview-messenger--active {
    border: none;
    border-radius: var(--border-radius-md);
    background: var(--white-snow);
    box-shadow: 0 1px 5px 0 var(--border)
  }

  .str-chat__channel-preview-messenger--last-message p {
    font-size: var(--sm-font);
    margin: 0;
    line-height: 14px;
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }

  .str-chat__channel-preview-messenger--last-message {
    font-size: var(--sm-font);
    line-height: 14px;
    opacity: .5;
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }

  .str-chat__channel-preview-messenger--name {
    font-size: var(--md-font);
    line-height: 17px;
    font-weight: var(--font-weight-semi-bold);
    margin-bottom: calc(var(--xxs-m) / 2);
    max-width: 250px
  }

  .str-chat__channel-preview-messenger--name span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }

  .str-chat__channel-preview-messenger--unread .str-chat__channel-preview-messenger--last-message p {
    opacity: 1;
    font-weight: var(--font-weight-semi-bold);
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .str-chat__channel-preview-messenger--unread .str-chat__channel-preview-messenger--last-message {
    opacity: 1;
    font-weight: var(--font-weight-semi-bold);
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .dark.str-chat .str-chat__channel-preview-messenger--active {
    background: var(--white5);
    box-shadow: 0 1px 5px 0 var(--black10)
  }

  .dark.str-chat .str-chat__channel-preview-messenger--last-message p {
    color: var(--white);
    margin: 0;
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }

  .dark.str-chat .str-chat__channel-preview-messenger--last-message {
    color: var(--white);
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }

  .dark.str-chat .str-chat__channel-preview-messenger--name {
    color: var(--white)
  }

  .str-chat__channel-search {
    padding: var(--md-p) var(--md-p) 0;
    display: flex;
    align-items: center;
    position: relative;
    background: var(--grey-gainsboro)
  }

  .str-chat__channel-search input {
    flex: 1;
    background: var(--grey-whisper);
    border: 1px solid transparent;
    outline: none;
    height: 30px;
    border-radius: var(--border-radius);
    color: var(--black);
    font-size: var(--md-font);
    padding: var(--sm-p)
  }

  .str-chat__channel-search input::placeholder {
    color: var(--grey)
  }

  .str-chat__channel-search input:focus {
    background: var(--white);
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-faded);
    transition: all .2s ease-in-out
  }

  .str-chat__channel-search-container {
    position: absolute;
    width: 300px;
    z-index: 2;
    padding: 8px
  }

  .str-chat__channel-search-container-searching {
    padding-left: 8px
  }

  .str-chat__channel-search-container-empty {
    padding-left: 8px
  }

  .str-chat__channel-search-container .str-chat__channel-search-result {
    display: flex;
    align-items: center;
    border-radius: var(--border-radius-md);
    height: 40px;
    cursor: pointer;
    padding-left: 8px
  }

  .str-chat__channel-search-container .str-chat__channel-search-result:hover {
    font-weight: var(--font-weight-bold);
    transition: all .2s ease-in-out
  }

  .str-chat__channel-search-result.focused {
    font-weight: var(--font-weight-bold)
  }

  .str-chat__channel-search-container.popup {
    border-radius: var(--border-radius-md);
    background: var(--white-smoke);
    left: 300px;
    top: 20px;
    box-shadow: 0 7px 9px 0 var(--border), 0 1px 0 0 var(--border);
    border: 1px solid var(--border)
  }

  .str-chat__channel-search-container.popup .str-chat__channel-search-result:hover {
    background: var(--light-grey)
  }

  .str-chat__channel-search-container.popup .str-chat__channel-search-result.focused {
    background: var(--light-grey)
  }

  .str-chat__channel-search-container.inline {
    top: 60px;
    right: 0;
    background: var(--grey-gainsboro);
    height: calc(100vh - 60px)
  }

  .str-chat__channel-search-container.inline .str-chat__channel-search-result:hover {
    background: var(--white)
  }

  .str-chat__channel-search-container.inline .str-chat__channel-search-result.focused {
    background: var(--white)
  }

  .dark.str-chat .str-chat__channel-search input {
    background: var(--grey-gainsboro);
    color: var(--white)
  }

  .str-chat__down {
    display: flex;
    height: 100%
  }

  .str-chat__down-main {
    flex: 1;
    padding: var(--lg-p)
  }

  .dark.str-chat .str-chat__down {
    color: var(--white)
  }

  .str-chat.messaging .str-chat__event-component__channel-event {
    display: flex;
    margin-top: var(--md-m)
  }

  .str-chat.messaging .str-chat__event-component__channel-event__content {
    margin-right: var(--xs-m);
    color: var(--overlay-dark);
    font-size: var(--lg-font)
  }

  .str-chat.messaging .str-chat__event-component__channel-event__date {
    font-size: var(--xs-font);
    margin-top: var(--xxs-m)
  }

  .str-chat.team .str-chat__event-component__channel-event {
    display: flex;
    margin: var(--md-m) var(--xl-m)
  }

  .str-chat.team .str-chat__event-component__channel-event__content {
    margin-right: var(--xs-m);
    color: var(--overlay-dark);
    font-size: var(--lg-font)
  }

  .str-chat.team .str-chat__event-component__channel-event__sentence {
    margin-right: var(--xs-m);
    color: var(--overlay-dark);
    font-size: var(--lg-font)
  }

  .str-chat.team .str-chat__event-component__channel-event__date {
    font-size: var(--xs-font);
    margin-top: var(--xxs-m)
  }

  .str-chat.commerce .str-chat__event-component__channel-event, .str-chat.livestream .str-chat__event-component__channel-event {
    display: none
  }

  .str-chat__date-separator {
    display: flex;
    padding: var(--xl-p);
    align-items: center
  }

  .str-chat__date-separator-date {
    font-size: var(--md-font);
    font-weight: var(--font-weight-bold);
    color: var(--overlay-dark);
    font-family: var(--second-font)
  }

  .str-chat__date-separator-line {
    flex: 1;
    background-color: var(--overlay);
    height: 1px;
    border: none
  }

  .str-chat__date-separator > *:not(:last-child) {
    margin-right: var(--sm-m)
  }

  .commerce.str-chat .str-chat__date-separator {
    padding: var(--xl-p) 0
  }

  .dark.str-chat .str-chat__date-separator-line {
    background-color: var(--grey-gainsboro)
  }

  .dark.str-chat .str-chat__date-separator-date {
    color: var(--grey-whisper)
  }

  .dark.str-chat.team .str-chat__date-separator-line {
    background-color: var(--overlay)
  }

  .str-chat__edit-message-form {
    width: 100%
  }

  .str-chat__edit-message-form form {
    position: relative;
    width: 100%
  }

  .str-chat__edit-message-form textarea {
    padding: 8px;
    background: var(--white);
    box-shadow: inset 0 0 0 1px var(--primary-color);
    border: 1px solid transparent;
    resize: none;
    border-radius: var(--border-radius-sm);
    width: 100%;
    font-size: var(--lg-font);
    line-height: 22px;
    color: var(--black)
  }

  .str-chat__edit-message-form textarea:focus {
    box-shadow: inset 0 0 0 1px var(--primary-color), 0 0 0 2px var(--primary-color-faded);
    outline: 0
  }

  .str-chat__edit-message-form .str-chat__message-team-form-footer button {
    background: none;
    border: none;
    font-weight: var(--font-weight-bold);
    color: var(--grey)
  }

  .str-chat__edit-message-form .str-chat__message-team-form-footer button[type=submit] {
    color: var(--primary-color)
  }

  .str-chat__edit-message-form .rfu-dropzone {
    width: 100%
  }

  .str-chat__edit-message-form .rfu-file-upload-button, .str-chat__edit-message-form .str-chat__input-emojiselect, .str-chat__edit-message-form .str-chat__input-fileupload {
    display: flex;
    position: unset;
    top: unset;
    right: unset;
    left: unset
  }

  .str-chat__edit-message-form .rfu-file-upload-button svg, .str-chat__edit-message-form .str-chat__input-emojiselect svg, .str-chat__edit-message-form .str-chat__input-fileupload svg {
    fill: var(--black);
    opacity: .5
  }

  .str-chat__edit-message-form .rfu-file-upload-button:hover svg, .str-chat__edit-message-form .str-chat__input-emojiselect:hover svg, .str-chat__edit-message-form .str-chat__input-fileupload:hover svg {
    opacity: 1
  }

  .str-chat__edit-message-form-options {
    display: flex;
    align-items: baseline
  }

  .str-chat__edit-message-form-options .str-chat__fileupload-wrapper:hover .str-chat__tooltip {
    display: none
  }

  .str-chat.dark .str-chat__edit-message-form .rfu-file-upload-button svg, .str-chat.dark .str-chat__edit-message-form .str-chat__input-emojiselect svg {
    fill: var(--grey-gainsboro)
  }

  .str-chat.dark .str-chat__edit-message-form .str-chat__message-team-form-footer button {
    color: var(--grey-gainsboro)
  }

  .str-chat.dark .str-chat__edit-message-form .str-chat__message-team-form-footer button[type=submit] {
    color: var(--primary-color)
  }

  .str-chat.dark .str-chat__edit-message-form textarea {
    background: var(--white5);
    box-shadow: 0 0 0 1px var(--black20);
    border: 2px solid transparent;
    border-radius: var(--border-radius-sm);
    color: var(--white)
  }

  .str-chat.dark .str-chat__edit-message-form textarea:focus {
    box-shadow: inset 0 0 0 1px var(--primary-color);
    border: 2px solid var(--primary-color-faded);
    border-radius: var(--border-radius-sm)
  }

  .str-chat__gallery {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    overflow: hidden
  }

  .str-chat__gallery-image {
    width: 150px;
    height: 150px;
    background: var(--white);
    margin-bottom: 1px;
    margin-right: 1px
  }

  .str-chat__gallery-image:hover {
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in
  }

  .str-chat__gallery-image img {
    width: inherit;
    height: inherit;
    object-fit: cover
  }

  .str-chat__gallery--square {
    max-width: 301px
  }

  .str-chat__gallery--square .str-chat__gallery-image:nth-child(even) {
    margin-right: 0
  }

  .livestream.str-chat .str-chat__gallery, .messaging.str-chat .str-chat__gallery, .commerce.str-chat .str-chat__gallery, .team.str-chat .str-chat__gallery {
    margin: 4px 0
  }

  .livestream.str-chat .str-chat__gallery-image, .messaging.str-chat .str-chat__gallery-image, .commerce.str-chat .str-chat__gallery-image, .team.str-chat .str-chat__gallery-image {
    width: 150px;
    height: 150px
  }

  .livestream.str-chat .str-chat__gallery-placeholder, .messaging.str-chat .str-chat__gallery-placeholder, .commerce.str-chat .str-chat__gallery-placeholder, .team.str-chat .str-chat__gallery-placeholder {
    position: relative;
    width: 150px;
    height: 150px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: top left;
    background-repeat: no-repeat;
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in
  }

  .livestream.str-chat .str-chat__gallery-placeholder p, .messaging.str-chat .str-chat__gallery-placeholder p, .commerce.str-chat .str-chat__gallery-placeholder p, .team.str-chat .str-chat__gallery-placeholder p {
    position: relative;
    z-index: 1
  }

  .livestream.str-chat .str-chat__gallery-placeholder::after, .messaging.str-chat .str-chat__gallery-placeholder::after, .commerce.str-chat .str-chat__gallery-placeholder::after, .team.str-chat .str-chat__gallery-placeholder::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-dark);
    z-index: 0
  }

  .commerce.str-chat .str-chat__gallery {
    width: calc(100% - 30px);
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-auto-rows: 100px
  }

  .commerce.str-chat .str-chat__gallery-image, .commerce.str-chat .str-chat__gallery-placeholder {
    width: 100%;
    height: 100%
  }

  .commerce.str-chat .str-chat__message-commerce .str-chat__gallery {
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 2px
  }

  .commerce.str-chat .str-chat__message-commerce--right .str-chat__gallery {
    border-radius: var(--border-radius) var(--border-radius) 2px var(--border-radius)
  }

  .str-chat__loading-channels {
    width: 300px;
    height: 100%;
    padding: var(--md-p);
    background: var(--grey-gainsboro)
  }

  .str-chat__loading-channels-meta {
    flex: 1
  }

  .str-chat__loading-channels-avatar, .str-chat__loading-channels-username, .str-chat__loading-channels-status {
    background-image: linear-gradient(-90deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%)
  }

  .str-chat__loading-channels-username, .str-chat__loading-channels-status {
    border-radius: var(--border-radius);
    height: 14px
  }

  .str-chat__loading-channels-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--border-radius-round);
    margin-right: var(--xs-m)
  }

  .str-chat__loading-channels-username {
    width: 40%;
    margin-bottom: var(--xs-m)
  }

  .str-chat__loading-channels-status {
    width: 80%
  }

  .str-chat__loading-channels-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: var(--border-radius-sm);
    margin-bottom: var(--sm-m);
    animation: pulsate 1s linear 0s infinite alternate
  }

  .str-chat__loading-channels-item:nth-of-type(2) {
    animation: pulsate 1s linear .3334 infinite alternate
  }

  .str-chat__loading-channels-item:last-of-type {
    animation: pulsate 1s linear .6667s infinite alternate
  }

  @keyframes pulsate {
    from {
      opacity: .5
    }
    to {
      opacity: 1
    }
  }

  .str-chat__loading-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotate 1s linear infinite
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  @keyframes rotate {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg)
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg)
    }
  }

  .str-chat.messaging .str-chat__load-more-button__button {
    border: 0;
    width: 100%;
    height: 40px;
    border-radius: var(--border-radius-md);
    background: var(--grey-whisper);
    box-shadow: 0 1px 5px 0 var(--border);
    color: var(--grey);
    padding: var(--xs-p);
    font-size: var(--md-font)
  }

  .str-chat.messaging .str-chat__load-more-button__button:hover {
    cursor: pointer
  }

  .str-chat.team .str-chat__load-more-button__button {
    border: 0;
    background: transparent;
    width: 100%;
    height: 40px;
    padding: var(--xs-p);
    font-size: var(--md-font)
  }

  .str-chat.team .str-chat__load-more-button__button:hover {
    cursor: pointer
  }

  .str-chat__li {
    display: block;
    position: relative
  }

  .str-chat__li .quoted-message {
    display: flex;
    align-items: flex-end;
    margin-bottom: var(--xxs-m)
  }

  .str-chat__li .quoted-message-inner {
    display: flex;
    text-align: start;
    align-items: flex-end;
    background: var(--grey-whisper);
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) 0;
    max-width: 408px;
    padding: var(--xxs-p) var(--xs-p)
  }

  .str-chat__li .quoted-message-inner .str-chat__message-attachment-card.str-chat__message-attachment-card--image {
    border: none;
    border-radius: var(--border-radius-md)
  }

  .str-chat__li .quoted-message-inner .str-chat__message-attachment--image:first-of-type {
    max-height: 48px;
    max-width: 48px;
    border-radius: var(--border-radius-md)
  }

  .str-chat__li .quoted-message-inner .str-chat__message-attachment img {
    border-radius: var(--border-radius-md)
  }

  .str-chat__li .quoted-message-inner .str-chat__message-attachment--file:first-of-type {
    background: var(--white);
    border-radius: var(--border-radius-md);
    border-bottom: 1px solid var(--grey-whisper);
    min-width: 33%
  }

  .str-chat__li .quoted-message-inner :nth-child(2) {
    margin-left: var(--xs-m)
  }

  .str-chat__li .quoted-message.mine .quoted-message-inner {
    background: var(--white-snow)
  }

  .str-chat__li--top, .str-chat__li--single {
    margin: 24px 0 0
  }

  .str-chat__li--top .str-chat__message-attachment--img, .str-chat__li--top .str-chat__message-attachment-card, .str-chat__li--top .str-chat__message .str-chat__gallery, .str-chat__li--single .str-chat__message-attachment--img, .str-chat__li--single .str-chat__message-attachment-card, .str-chat__li--single .str-chat__message .str-chat__gallery {
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--top .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--top .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card, .str-chat__li--single .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--single .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card {
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--top .str-chat__message--me, .str-chat__li--single .str-chat__message--me {
    text-align: right
  }

  .str-chat__li--top .str-chat__message--me .str-chat__message-attachment--img, .str-chat__li--top .str-chat__message--me .str-chat__message-attachment-card, .str-chat__li--single .str-chat__message--me .str-chat__message-attachment--img, .str-chat__li--single .str-chat__message--me .str-chat__message-attachment-card {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--top .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--top .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card, .str-chat__li--single .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--single .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--top .str-chat__message--me .str-chat__gallery, .str-chat__li--single .str-chat__message--me .str-chat__gallery {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--top .str-chat__message--me.str-chat__message--has-text .str-chat__gallery, .str-chat__li--single .str-chat__message--me.str-chat__message--has-text .str-chat__gallery {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--middle {
    margin: 0
  }

  .str-chat__li--middle .str-chat__message-attachment--img, .str-chat__li--middle .str-chat__message-attachment-card, .str-chat__li--middle .str-chat__message .str-chat__gallery {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--middle .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--middle .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card, .str-chat__li--middle .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__gallery {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--middle .str-chat__message--me .str-chat__message-attachment--img, .str-chat__li--middle .str-chat__message--me .str-chat__message-attachment-card, .str-chat__li--middle .str-chat__message--me .str-chat__message .str-chat__gallery {
    border-radius: var(--border-radius) calc(var(--border-radius-sm) / 2) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--middle .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--middle .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card, .str-chat__li--middle .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__gallery {
    border-top-left-radius: calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--bottom {
    margin: 0 0 24px
  }

  .str-chat__li--bottom .str-chat__message-attachment--img, .str-chat__li--bottom .str-chat__message-attachment-card, .str-chat__li--bottom .str-chat__message .str-chat__gallery {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--bottom .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--bottom .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card, .str-chat__li--bottom .str-chat__message.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__gallery {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--bottom .str-chat__message--me .str-chat__message-attachment--img, .str-chat__li--bottom .str-chat__message--me .str-chat__message-attachment-card, .str-chat__li--bottom .str-chat__message--me .str-chat__message .str-chat__gallery {
    border-radius: var(--border-radius) calc(var(--border-radius-sm) / 2) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--bottom .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment--img, .str-chat__li--bottom .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__message-attachment-card, .str-chat__li--bottom .str-chat__message--me.str-chat__message--has-text.str-chat__message--has-attachment .str-chat__gallery {
    border-top-left-radius: calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--single {
    margin-bottom: var(--md-m)
  }

  .str-chat__li--top .str-chat__message-data, .str-chat__li--middle .str-chat__message-data {
    display: none
  }

  .str-chat__li--top .str-chat__message-text-inner {
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--top .str-chat__message--me .str-chat__message-text-inner {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--single .str-chat__message-text-inner {
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--single .str-chat__message-text-inner--has-attachment {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--single .str-chat__message--me .str-chat__message-text-inner {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--single .str-chat__message--me .str-chat__message-text-inner--has-attachment {
    border-radius: var(--border-radius) calc(var(--border-radius-sm) / 2) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--bottom .str-chat__message-text-inner, .str-chat__li--middle .str-chat__message-text-inner {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__li--bottom .str-chat__message--me .str-chat__message-text-inner, .str-chat__li--middle .str-chat__message--me .str-chat__message-text-inner {
    border-radius: var(--border-radius) calc(var(--border-radius-sm) / 2) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__li--bottom .str-chat__message--me .str-chat__message-text-inner--has-attachment, .str-chat__li--middle .str-chat__message--me .str-chat__message-text-inner--has-attachment {
    margin: 0
  }

  .str-chat__li--bottom .str-chat__message--me .str-chat__message-attachment-card, .str-chat__li--middle .str-chat__message--me .str-chat__message-attachment-card {
    margin: 0;
    padding: 0;
    border-radius: var(--border-radius) calc(var(--border-radius-sm) / 2) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__message, .str-chat__message-simple {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0;
    position: relative;
    margin: calc(var(--xxs-m) / 2) 0;
    width: 100%
  }

  .str-chat__message--system, .str-chat__message-simple--system {
    text-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: var(--xl-p);
    box-sizing: border-box;
    font-size: var(--xs-font)
  }

  .str-chat__message--system__text, .str-chat__message-simple--system__text {
    display: flex;
    align-items: center;
    width: 100%
  }

  .str-chat__message--system__text p, .str-chat__message-simple--system__text p {
    margin: 0 24px;
    color: var(--grey);
    text-transform: uppercase;
    font-weight: var(--font-weight-bold)
  }

  .str-chat__message--system__line, .str-chat__message-simple--system__line {
    flex: 1;
    height: 1px;
    width: 100%;
    background-color: var(--overlay)
  }

  .str-chat__message--system__date, .str-chat__message-simple--system__date {
    margin-top: 4px;
    text-transform: uppercase;
    color: var(--grey)
  }

  .str-chat__message-inner, .str-chat__message-simple-inner {
    position: relative
  }

  @media screen and (min-width: 420px) {
    .str-chat__message-inner, .str-chat__message-simple-inner {
      margin-right: 88px;
      margin-left: unset
    }
  }

  .str-chat__message-inner > .str-chat__message-simple__actions, .str-chat__message-simple-inner > .str-chat__message-simple__actions {
    display: none;
    position: absolute;
    top: 5px;
    left: calc(100% + 8px)
  }

  .str-chat__message-attachment-container, .str-chat__message-simple-attachment-container {
    display: flex;
    flex-direction: column
  }

  .str-chat__message-text, .str-chat__message-simple-text {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    position: relative
  }

  .str-chat__message-text-inner, .str-chat__message-simple-text-inner {
    position: relative;
    flex: 1;
    display: block;
    min-height: 32px;
    padding: var(--xxs-p) var(--xs-p);
    font-size: var(--lg-font);
    color: var(--black);
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 0;
    background: var(--white-snow);
    border: 1px solid var(--border);
    margin-left: 0
  }

  .str-chat__message-text-inner p, .str-chat__message-simple-text-inner p {
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
  }

  .str-chat__message-text-inner--focused, .str-chat__message-simple-text-inner--focused {
    background: var(--primary-color);
    border: 1px solid var(--primary-color);
    margin-right: 0;
    margin-left: 0
  }

  .str-chat__message-text-inner--has-attachment, .str-chat__message-simple-text-inner--has-attachment {
    border-radius: calc(var(--border-radius-sm) / 2) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__message-text-inner--is-emoji, .str-chat__message-simple-text-inner--is-emoji {
    background: transparent;
    border: 1px solid transparent;
    font-size: var(--xxxl-font);
    padding-left: 0;
    padding-right: 0
  }

  .str-chat__message-attachment--img, .str-chat__message-simple-attachment--img {
    width: 100%;
    max-width: 480px;
    display: block;
    height: inherit;
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in
  }

  .str-chat__message-data, .str-chat__message-simple-data {
    margin-top: var(--xxs-m);
    width: 100%;
    font-size: var(--xs-font);
    color: var(--overlay-dark);
    position: absolute;
    white-space: nowrap
  }

  .str-chat__message-name, .str-chat__message-simple-name {
    font-weight: var(--font-weight-bold);
    margin-right: var(--xxs-m)
  }

  .str-chat__message p, .str-chat__message-simple p {
    margin: 0;
    white-space: pre-line;
    line-height: 20px
  }

  .str-chat__message p:not(:first-of-type), .str-chat__message-simple p:not(:first-of-type) {
    margin: var(--sm-m) 0 0
  }

  .str-chat__message--me, .str-chat__message-simple--me {
    display: flex;
    margin: var(--xxs-m) 0;
    justify-content: flex-end
  }

  .str-chat__message--me .str-chat__message-text, .str-chat__message-simple--me .str-chat__message-text {
    display: flex;
    justify-content: flex-end
  }

  .str-chat__message--me .str-chat__message-attachment-container, .str-chat__message-simple--me .str-chat__message-attachment-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end
  }

  .str-chat__message--me .str-chat__message-inner, .str-chat__message-simple--me .str-chat__message-inner {
    justify-content: flex-end;
    align-items: flex-end
  }

  @media screen and (min-width: 420px) {
    .str-chat__message--me .str-chat__message-inner, .str-chat__message-simple--me .str-chat__message-inner {
      margin-right: unset;
      margin-left: 88px
    }
  }

  .str-chat__message--me .str-chat__message-inner > .str-chat__message-simple__actions, .str-chat__message-simple--me .str-chat__message-inner > .str-chat__message-simple__actions {
    display: none;
    position: absolute;
    top: 5px;
    left: unset;
    right: calc(100% + 8px)
  }

  .str-chat__message--me .str-chat__message-text-inner, .str-chat__message-simple--me .str-chat__message-text-inner {
    flex: initial;
    background: var(--grey-whisper);
    border-color: transparent;
    text-align: right;
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius);
    margin-right: 0
  }

  .str-chat__message--me .str-chat__message-text-inner--focused, .str-chat__message-simple--me .str-chat__message-text-inner--focused {
    background: var(--primary-color);
    border: 1px solid var(--primary-color);
    margin-left: 0;
    margin-right: 0
  }

  .str-chat__message--me .str-chat__message-text-inner--has-attachment, .str-chat__message-simple--me .str-chat__message-text-inner--has-attachment {
    border-radius: var(--border-radius) calc(var(--border-radius-sm) / 2) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__message--me .str-chat__message-text-inner--is-emoji, .str-chat__message-simple--me .str-chat__message-text-inner--is-emoji {
    background: transparent;
    border: 1px solid transparent;
    font-size: var(--xxxl-font);
    padding-left: 0;
    padding-right: 0
  }

  .str-chat__message--me .str-chat__message-text-inner--is-emoji p, .str-chat__message-simple--me .str-chat__message-text-inner--is-emoji p {
    line-height: 48px
  }

  .str-chat__message--me .str-chat__message-attachment--img, .str-chat__message-simple--me .str-chat__message-attachment--img {
    width: 100%;
    max-width: 480px;
    display: block;
    height: inherit;
    object-fit: cover;
    border: none
  }

  .str-chat__message--me .str-chat__message-data, .str-chat__message-simple--me .str-chat__message-data {
    text-align: right;
    right: 0;
    width: fit-content
  }

  .str-chat__message--with-reactions, .str-chat__message-simple--with-reactions {
    margin-top: var(--md-m)
  }

  .str-chat__message-link, .str-chat__message-simple-link {
    color: var(--primary-color);
    font-weight: var(--font-weight-bold);
    text-decoration: none
  }

  .str-chat__message-mention, .str-chat__message-simple-mention {
    font-weight: var(--font-weight-bold)
  }

  .str-chat__message-url-link, .str-chat__message-simple-url-link {
    max-width: 150px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }

  .str-chat__message--inner, .str-chat__message-simple--inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  .str-chat__message .messaging.str-chat .str-chat__message, .str-chat__message .messaging.str-chat .str-chat__message--me, .str-chat__message-simple .messaging.str-chat .str-chat__message, .str-chat__message-simple .messaging.str-chat .str-chat__message--me {
    margin: calc(var(--xxs-m) / 2) 0
  }

  .str-chat__message .messaging.str-chat .str-chat__message--with-reactions, .str-chat__message .messaging.str-chat .str-chat__message--me--with-reactions, .str-chat__message-simple .messaging.str-chat .str-chat__message--with-reactions, .str-chat__message-simple .messaging.str-chat .str-chat__message--me--with-reactions {
    margin-top: var(--lg-m)
  }

  .str-chat__message .messaging.str-chat .str-chat__message-attachment--image, .str-chat__message-simple .messaging.str-chat .str-chat__message-attachment--image {
    margin: calc(var(--xxs-m) / 2) 0;
    max-width: 480px
  }

  .str-chat__message .messaging.str-chat .str-chat__message-attachment--card, .str-chat__message-simple .messaging.str-chat .str-chat__message-attachment--card {
    margin: calc(var(--xxs-m) / 2) 0;
    line-height: normal
  }

  .str-chat__message .messaging.str-chat .str-chat__message-attachment-card, .str-chat__message-simple .messaging.str-chat .str-chat__message-attachment-card {
    margin: calc(var(--xxs-m) / 2) auto;
    line-height: normal;
    background: var(--grey-gainsboro)
  }

  .str-chat__message .messaging.str-chat .str-chat__message-attachment-card--title, .str-chat__message-simple .messaging.str-chat .str-chat__message-attachment-card--title {
    color: var(--primary-color)
  }

  .str-chat__message .messaging.str-chat .str-chat__message-attachment-card--text, .str-chat__message-simple .messaging.str-chat .str-chat__message-attachment-card--text {
    display: none
  }

  .str-chat__message .messaging.str-chat .str-chat__message-attachment-card--url, .str-chat__message-simple .messaging.str-chat .str-chat__message-attachment-card--url {
    text-transform: lowercase
  }

  .str-chat__message .messaging.str-chat .str-chat__message--deleted, .str-chat__message-simple .messaging.str-chat .str-chat__message--deleted {
    margin: 0 var(--xl-m)
  }

  .str-chat__message .messaging.str-chat .str-chat__li--middle .str-chat__message .str-chat__message-attachment--card, .str-chat__message .messaging.str-chat .str-chat__li--middle .str-chat__message .str-chat__message-attachment--image, .str-chat__message-simple .messaging.str-chat .str-chat__li--middle .str-chat__message .str-chat__message-attachment--card, .str-chat__message-simple .messaging.str-chat .str-chat__li--middle .str-chat__message .str-chat__message-attachment--image {
    border-top-left-radius: calc(var(--border-radius-sm) / 2)
  }

  .str-chat__message--deleted, .str-chat__message-simple--deleted {
    margin: 0 0 0 var(--xl-m);
    flex-direction: column;
    align-items: flex-start
  }

  .str-chat__message--deleted-inner, .str-chat__message-simple--deleted-inner {
    background: var(--grey-whisper);
    padding: var(--xs-p) var(--sm-p);
    border-radius: var(--border-radius);
    font-size: var(--sm-font);
    color: var(--grey)
  }

  .str-chat__message--me.str-chat__message--deleted, .str-chat__message-simple--me.str-chat__message--deleted {
    margin: 0 var(--xl-m) 0 0;
    align-items: flex-end
  }

  .str-chat__message--me.str-chat__message--deleted-inner, .str-chat__message-simple--me.str-chat__message--deleted-inner {
    background: var(--white-smoke);
    padding: var(--xs-p) var(--sm-p);
    border-radius: var(--border-radius);
    font-size: var(--sm-font);
    color: var(--grey)
  }

  .str-chat__message--error, .str-chat__message--failed, .str-chat__message-simple--error, .str-chat__message-simple--failed {
    margin: 0 0 var(--lg-m) var(--xl-m);
    font-size: var(--sm-font);
    padding: var(--xxs-p) 0
  }

  .str-chat__message--error .str-chat__message-text-inner, .str-chat__message--failed .str-chat__message-text-inner, .str-chat__message-simple--error .str-chat__message-text-inner, .str-chat__message-simple--failed .str-chat__message-text-inner {
    background: var(--faded-red);
    border: 1px solid var(--faded-red)
  }

  .str-chat__message--me.str-chat__message--error, .str-chat__message--me.str-chat__message--failed, .str-chat__message-simple--me.str-chat__message--error, .str-chat__message-simple--me.str-chat__message--failed {
    border-left: initial;
    margin-right: var(--xl-m)
  }

  .str-chat__message .str-chat__message-attachment-file--item:hover, .str-chat__message-simple .str-chat__message-attachment-file--item:hover {
    background: transparent
  }

  .str-chat__message-simple {
    font-family: var(--second-font)
  }

  .str-chat__message-simple__actions {
    display: flex
  }

  .str-chat__message-simple__actions__action {
    margin: var(--xxs-m);
    display: flex;
    align-items: center;
    height: 10px;
    cursor: pointer
  }

  .str-chat__message-simple__actions__action svg {
    fill: var(--black);
    opacity: .5
  }

  .str-chat__message-simple__actions__action:hover svg {
    opacity: 1
  }

  .str-chat__message-simple__actions__action--thread, .str-chat__message-simple__actions__action--reactions {
    display: none
  }

  .str-chat__message-simple__actions__action--options {
    position: relative;
    display: none
  }

  .str-chat__message-simple:hover .str-chat__message-simple__actions__action--thread {
    display: flex
  }

  .str-chat__message-simple:hover .str-chat__message-simple__actions__action--reactions {
    display: flex
  }

  .str-chat__message-simple-text {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    position: relative
  }

  .str-chat__message-simple-text-inner {
    flex: initial;
    text-align: left;
    max-width: 460px
  }

  .str-chat__message-simple-text-inner.str-chat__message-simple-text-inner--is-emoji {
    background: transparent
  }

  .str-chat__message-simple-text-inner.str-chat__message-simple-text-inner--is-emoji p {
    line-height: 48px
  }

  .str-chat__message-simple-text-inner p {
    text-align: left
  }

  .str-chat__message-simple-text-inner a {
    color: var(--primary-color);
    font-weight: var(--font-weight-bold);
    text-decoration: none
  }

  .str-chat__message-simple-text-inner blockquote {
    margin: 0 0 0 var(--xxs-m);
    font-style: italic;
    padding-left: var(--md-p);
    position: relative
  }

  .str-chat__message-simple-text-inner blockquote::before {
    font-size: var(--xxl-font);
    content: "“";
    font-style: italic;
    position: absolute;
    opacity: .5;
    top: 2px;
    left: -5px
  }

  .str-chat__message-simple--me .str-chat__message-simple-reply-button {
    display: flex;
    justify-content: flex-end
  }

  .str-chat__message-simple--me .str-chat__message-simple-reply-button .str-chat__message-replies-count-button {
    display: flex;
    flex-direction: row-reverse
  }

  .str-chat__message-simple--me .str-chat__message-simple-reply-button .str-chat__message-replies-count-button svg {
    transform: scaleX(-1);
    margin-left: var(--xxs-m);
    margin-bottom: var(--xxs-m);
    margin-right: 0
  }

  .str-chat__message-simple--me .str-chat__message-simple__actions {
    justify-content: flex-end
  }

  .str-chat__message-simple--me .str-chat__message-attachment--image {
    max-width: 460px
  }

  .str-chat__message-simple--me-text-inner--is-emoji {
    background-color: transparent;
    line-height: 32px
  }

  .str-chat__message-simple--me .str-chat__message-simple__actions {
    order: -1
  }

  .str-chat__message-simple:hover .str-chat__message-simple__actions__action--options {
    display: flex
  }

  .str-chat__message-simple:hover .str-chat__message-simple__actions__action--reactions {
    display: flex
  }

  .str-chat__message-simple:hover .str-chat__message-simple__actions__action--thread {
    display: flex
  }

  @media screen and (max-width: 960px) {
    .str-chat__message-simple:hover .str-chat__message-simple__actions__action--options {
      display: none
    }

    .str-chat__message-simple:hover .str-chat__message-simple__actions__action--reactions {
      display: none
    }

    .str-chat__message-simple:hover .str-chat__message-simple__actions__action--thread {
      display: none
    }
  }

  .str-chat__simple-message--error-message {
    text-align: left;
    text-transform: uppercase;
    font-size: var(--xs-font);
    opacity: .5
  }

  .str-chat__message-simple-status {
    margin: var(--xs-m) 0 var(--xs-m) var(--xs-m);
    order: 3;
    position: absolute;
    left: 100%;
    bottom: 0;
    line-height: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1
  }

  .str-chat__message-simple-status-number {
    font-size: var(--xs-font);
    margin-left: 4px;
    position: absolute;
    left: 100%;
    color: var(--overlay-dark)
  }

  .str-chat__message-simple-status > .str-chat__avatar, .str-chat__message-simple-status > .str-chat-angular__avatar-host > .str-chat__avatar {
    align-self: flex-end;
    margin-right: 0
  }

  .str-chat__message-simple-status > .str-chat__tooltip {
    display: none;
    max-width: 300px;
    min-width: 100px;
    text-align: center
  }

  .str-chat__message-simple-status:hover > .str-chat__tooltip {
    display: block
  }

  .str-chat__message-simple-status::after {
    position: absolute;
    bottom: 100%;
    right: 0;
    content: " ";
    width: 15px;
    height: 15px
  }

  .str-chat__message-simple .str-chat__message-attachment-card {
    margin: 0;
    background: var(--white);
    border: 1px solid var(--border)
  }

  .str-chat__message-simple .str-chat__message-attachment-card--content {
    background: var(--grey-gainsboro)
  }

  .str-chat__message-simple .str-chat__message-attachment-card--text {
    display: none
  }

  .str-chat__message-simple .str-chat__message-attachment--file {
    margin: 0;
    background: var(--white);
    border-color: transparent;
    border: 1px solid var(--grey-gainsboro);
    border-radius: var(--border-radius-md)
  }

  .str-chat__message-simple .str-chat__message-attachment--file .str-chat__message-attachment-file--item {
    border-color: transparent;
    padding: 0 var(--xs-p)
  }

  .str-chat__message-simple .str-chat__message-attachment--file:first-of-type:not(.str-chat-angular__message-attachment-file-single) {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    border-bottom: transparent
  }

  .str-chat__message-simple .str-chat__message-attachment--file:last-of-type:not(.str-chat-angular__message-attachment-file-single) {
    border-top-color: transparent;
    border-radius: 0 0 var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__message-simple .str-chat__message-attachment--file:last-of-type:not(.str-chat-angular__message-attachment-file-single):first-of-type {
    border-bottom: 1px solid var(--grey-gainsboro);
    border-top: 1px solid var(--grey-gainsboro);
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__message-simple .str-chat__message-attachment-file--item:not(.str-chat-angular__message-attachment-file-single) {
    border-radius: 0
  }

  .str-chat__message-simple--me .str-chat__message-attachment-card {
    border-radius: var(--border-radius) var(--border-radius-sm) var(--border-radius-sm) var(--border-radius-sm)
  }

  .str-chat__message-simple--me .str-chat__message-attachment--file {
    background: var(--grey-gainsboro)
  }

  .str-chat__message-simple--me .str-chat__message-attachment--file:last-of-type:not(.str-chat-angular__message-attachment-file-single) {
    border-radius: 0 0 calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__message-simple--me .str-chat__message-attachment--file:last-of-type:not(.str-chat-angular__message-attachment-file-single):first-of-type:not(.str-chat-angular__message-attachment-file-single) {
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__list--thread .str-chat__message-simple__actions {
    width: 30px
  }

  .str-chat__list--thread .str-chat__message-simple__actions__action--options .str-chat__message-actions-box {
    right: unset;
    left: 100%;
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .livestream.str-chat .str-chat__li--single {
    margin: 0
  }

  @media screen and (max-width: 960px) {
    .str-chat__message-simple-text-inner {
      max-width: 218px
    }

    .str-chat__message-simple-status {
      left: unset;
      right: 8px;
      bottom: 30px
    }
  }

  .dark.str-chat .str-chat__message-simple-text-inner {
    background: var(--white-smoke);
    color: var(--white)
  }

  .dark.str-chat .str-chat__message-simple-text-inner--is-emoji {
    background: transparent
  }

  .dark.str-chat .str-chat__message-simple__actions svg {
    fill: var(--white)
  }

  .dark.str-chat .str-chat__message-simple-data {
    color: var(--white);
    opacity: .5
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-attachment-card {
    background: transparent
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-attachment-card--content {
    background: var(--white-smoke)
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-attachment-card--url {
    color: var(--grey-gainsboro)
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-attachment--file {
    border-color: transparent;
    background: var(--white-smoke)
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-attachment--file a, .dark.str-chat .str-chat__message-simple .str-chat__message-attachment--file span {
    color: var(--white)
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-attachment--file span {
    opacity: .5
  }

  .dark.str-chat .str-chat__message-simple .str-chat__message-simple-status-number {
    color: var(--grey-gainsboro)
  }

  .dark.str-chat .str-chat__message-simple--me .str-chat__message-simple-text-inner {
    background: var(--black)
  }

  .dark.str-chat .str-chat__message-simple--me .str-chat__message-simple-text-inner--is-emoji {
    background: transparent
  }

  .dark.str-chat .str-chat__message-simple--me .str-chat__message-simple .str-chat__message-attachment-card--content {
    background: var(--black)
  }

  .dark.str-chat .str-chat__message-simple--me .str-chat__message-simple .str-chat__message-attachment--file {
    background: var(--overlay)
  }

  .dark.str-chat .str-chat__message-simple__actions__action--options .str-chat__actions-box {
    background: var(--grey);
    box-shadow: 0 0 2px 0 var(--overlay), 0 1px 0 0 var(--border), 0 1px 8px 0 var(--border)
  }

  .dark.str-chat .str-chat__message--error .str-chat__message-simple-text-inner, .dark.str-chat .str-chat__message--failed .str-chat__message-simple-text-inner {
    background: var(--faded-red);
    border: 1px solid var(--faded-red)
  }

  .str-chat__message .str-chat__message-simple__actions__action--options .str-chat__message-actions-box {
    left: 100%;
    right: unset
  }

  .str-chat__message .str-chat__message-simple__actions__action--options .str-chat__message-actions-box--reverse {
    right: 100%;
    left: unset;
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__message .str-chat__message-simple__actions__action--options .str-chat__message-actions-box--mine {
    right: 100%;
    left: unset;
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__message .str-chat__message-simple__actions__action--options .str-chat__message-actions-box--mine.str-chat__message-actions-box--reverse {
    left: 100%;
    right: unset;
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2)
  }

  .str-chat__message a[href^="mailto:"] {
    -webkit-hyphens: none;
    -moz-hyphens: none;
    hyphens: none
  }

  @media screen and (max-width: 375px) {
    .str-chat__message .str-chat__message-attachment--img {
      max-width: 235px
    }
  }

  @media screen and (max-width: 414px) {
    .str-chat__message .str-chat__message-attachment--img {
      max-width: 274px
    }
  }

  @media only screen and (device-width: 375px)and (-webkit-device-pixel-ratio: 3) {
    .str-chat__message .str-chat__message-attachment--img {
      max-width: 240px
    }
  }

  .str-chat .mml-container {
    display: flex;
    padding-bottom: var(--xxs-p)
  }

  .str-chat .mml-icon {
    font-family: "Material Icons", sans-serif
  }

  .str-chat .mml-wrap {
    display: block;
    max-width: none;
    max-width: 345px
  }

  @media screen and (max-width: 375px) {
    .str-chat .mml-wrap {
      max-width: 220px
    }
  }

  .str-chat .mml-datepicker {
    min-width: 180px
  }

  .str-chat .mml-align-right .mml-btnlist--floating, .str-chat .mml-align-right .mml-carousel {
    margin-left: auto
  }

  .str-chat .mml-align-left .mml-btnlist--floating, .str-chat .mml-align-left .mml-carousel {
    margin-right: auto
  }

  @media screen and (max-width: 960px) {
    .str-chat .mml-align-left .mml-carousel {
      margin-left: -10px
    }

    .str-chat .mml-align-right .mml-carousel {
      margin-right: -10px
    }
  }

  @media screen and (max-width: 960px) {
    .str-chat.messaging .mml-align-left .mml-carousel {
      margin-left: -10px
    }

    .str-chat.messaging .mml-align-right .mml-carousel {
      margin-right: -10px
    }
  }

  .str-chat__message-simple.mobile-press .str-chat__message-simple__actions__action--options {
    display: flex
  }

  .str-chat__message-simple.mobile-press .str-chat__message-simple__actions__action--reactions {
    display: flex
  }

  .str-chat__message-simple.mobile-press .str-chat__message-simple__actions__action--thread {
    display: flex
  }

  .str-chat__message-actions-box {
    position: absolute;
    display: none;
    bottom: 20px;
    left: 40px;
    width: 120px;
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 0;
    background: var(--white);
    background-image: linear-gradient(-180deg, var(--bg-gradient-start), var(--bg-gradient-end));
    box-shadow: 0 0 2px 0 var(--border), 0 1px 0 0 var(--border), 0 1px 8px 0 var(--border);
    z-index: 999
  }

  .str-chat__message-actions-box--open {
    display: block
  }

  .str-chat__message-actions-list {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  .str-chat__message-actions-list-item {
    padding: var(--xs-p) var(--xs-p);
    width: 100%;
    margin: 0
  }

  .str-chat__message-actions-list button {
    background: none;
    text-align: left;
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    width: 100%;
    font-size: var(--sm-font);
    color: var(--black);
    text-decoration: none
  }

  .str-chat__message-actions-list button:hover {
    color: var(--primary-color)
  }

  .str-chat__message-actions-list button:not(:last-of-type) {
    border-bottom: 1px solid var(--black5)
  }

  .str-chat__message-actions {
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--xxs-m) var(--xs-m);
    cursor: pointer
  }

  .str-chat__message-actions {
    order: 2
  }

  .str-chat__message--me .str-chat__message-actions {
    order: -1
  }

  .str-chat__message-actions-reactions, .str-chat__message-actions-options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px
  }

  .str-chat__message-actions-reactions, .str-chat__message-actions-options svg {
    fill: var(--grey);
    position: relative
  }

  .str-chat__message-actions-reactions:hover, .str-chat__message-actions-options:hover svg {
    fill: var(--primary-color)
  }

  .str-chat__message-commerce {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 0 0 0;
    position: relative;
    margin: 1px 0
  }

  .str-chat__message-commerce-inner {
    position: relative
  }

  .str-chat__message-commerce-inner > .str-chat__message-commerce__actions {
    min-height: 10px;
    min-width: 30px;
    float: right
  }

  .str-chat__message-commerce-inner > .str-chat__message-commerce__actions .str-chat__reaction-list {
    left: unset;
    right: 46px
  }

  .str-chat__message-commerce .str-chat__avatar {
    margin-right: 8px
  }

  .str-chat__message-commerce .str-chat__message-attachment-card--content {
    margin: 0;
    padding: 6px 8px
  }

  .str-chat__message-commerce--top, .str-chat__message-commerce--middle {
    margin-left: 40px
  }

  .str-chat__message-commerce--top .str-chat__message-commerce-data, .str-chat__message-commerce--middle .str-chat__message-commerce-data {
    display: none
  }

  .str-chat__message-commerce--top .str-chat__message-commerce-text-inner {
    border-radius: 16px 16px 4px 4px
  }

  .str-chat__message-commerce--bottom .str-chat__message-commerce-text-inner {
    border-radius: 4px 4px 16px 0
  }

  .str-chat__message-commerce--single .str-chat__message-commerce-text-inner {
    border-radius: 16px 16px 16px 0
  }

  .str-chat__message-commerce--single .str-chat__message-commerce-text-inner--has-attachment {
    border-radius: 4px 4px 16px 0
  }

  .str-chat__message-commerce--middle .str-chat__message-commerce-text-inner {
    border-radius: 4px 4px 4px 4px
  }

  .str-chat__message-commerce-text {
    display: flex;
    padding: 0 0 0 0;
    position: relative
  }

  .str-chat__message-commerce-text-inner {
    position: relative;
    display: block;
    min-height: 32px;
    padding: 5px 10px;
    font-size: var(--lg-font);
    color: #000;
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 0;
    background: #fff;
    border: 1px solid var(--border-color);
    margin-left: 0;
    max-width: 345px
  }

  .str-chat__message-commerce-text-inner p {
    margin: 0;
    white-space: pre-line;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
  }

  .str-chat__message-commerce-text-inner p:not(:first-of-type) {
    margin: 16px 0 0
  }

  .str-chat__message-commerce-text-inner--has-attachment {
    border-radius: 2px var(--border-radius) var(--border-radius) 2px
  }

  .str-chat__message-commerce-text-inner--is-emoji {
    background: transparent;
    border: 1px solid transparent;
    font-size: 32px;
    line-height: 48px;
    padding-left: 0;
    padding-right: 0
  }

  .str-chat__message-commerce-attachment--img {
    width: 100%;
    max-width: 480px;
    display: block;
    height: inherit;
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in
  }

  .str-chat__message-commerce-data {
    margin-top: 5px;
    width: 100%;
    font-size: var(--xs-font);
    color: rgba(0, 0, 0, .5)
  }

  .str-chat__message-commerce-name {
    font-weight: var(--font-weight-bold);
    margin-right: 5px
  }

  .str-chat__message-commerce p {
    margin: 0;
    line-height: 20px
  }

  .str-chat__message-commerce--with-reactions {
    margin-top: 30px
  }

  .str-chat__message-commerce--with-reactions .str-chat__message-commerce__actions__action--reactions {
    display: none
  }

  .str-chat__message-commerce-link {
    color: var(--primary-color);
    font-weight: var(--font-weight-bold);
    text-decoration: none
  }

  .str-chat__message-commerce--inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start
  }

  .str-chat__message-commerce--deleted {
    background: var(--grey);
    float: left;
    padding: 8px 16px;
    border-radius: var(--border-radius);
    font-size: var(--sm-font);
    color: var(--darken-grey);
    margin: 0 0 0 42px
  }

  .str-chat__message-commerce--error {
    margin: 0 0 32px 0;
    font-size: var(--sm-font)
  }

  .str-chat__message-commerce--error .str-chat__message-text-inner {
    background: rgba(208, 2, 27, .1);
    border: 1px solid rgba(208, 2, 27, .1)
  }

  .str-chat__message-commerce--right.str-chat__message-commerce {
    justify-content: flex-end;
    margin-left: 0
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce__actions {
    justify-content: flex-end
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-inner > .str-chat__message-commerce__actions {
    float: left
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-inner > .str-chat__message-commerce__actions .str-chat__reaction-list {
    left: 46px
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-inner > .str-chat__message-commerce-reply-button {
    display: flex;
    justify-content: flex-end
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-inner > .str-chat__message-commerce-reply-button .str-chat__message-replies-count-button {
    display: flex;
    flex-direction: row-reverse
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-inner > .str-chat__message-commerce-reply-button .str-chat__message-replies-count-button svg {
    transform: scaleX(-1);
    margin-left: 5px;
    margin-bottom: 4px;
    margin-right: 0
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-text-inner {
    background: #ebebeb;
    border-width: 0px;
    margin-top: 2px;
    border-color: transparent
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-text-inner p {
    text-align: right
  }

  .str-chat__message-commerce--right.str-chat__message-commerce > .str-chat__avatar {
    display: none
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-attachment {
    margin: 0 auto 0 30px
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-attachment--img {
    border-radius: var(--border-radius) var(--border-radius) 2px var(--border-radius)
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-attachment-card {
    border-radius: 16px 16px 4px 16px
  }

  .str-chat__message-commerce--right.str-chat__message-commerce--bottom, .str-chat__message-commerce--right.str-chat__message-commerce--single {
    margin-right: 0
  }

  .str-chat__message-commerce--right.str-chat__message-commerce--single .str-chat__message-commerce-text-inner {
    border-radius: 16px 16px 4px 16px
  }

  .str-chat__message-commerce--right.str-chat__message-commerce--single .str-chat__message-commerce-text-inner--has-attachment {
    border-radius: 16px 4px 4px 16px
  }

  .str-chat__message-commerce--right.str-chat__message-commerce--bottom .str-chat__message-commerce-text-inner {
    border-radius: 4px 4px 4px 16px
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__avatar {
    order: 1
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-text {
    flex-direction: row-reverse;
    justify-content: flex-start
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-text-inner {
    flex: unset
  }

  .str-chat__message-commerce--right.str-chat__message-commerce .str-chat__message-commerce-data {
    text-align: right
  }

  .str-chat__message-commerce--has-text .str-chat__message-commerce-inner .str-chat__message-attachment {
    width: 100%;
    height: auto;
    margin: 4px auto
  }

  .str-chat__message-commerce {
    font-family: var(--second-font)
  }

  .str-chat__message-commerce__actions {
    display: flex;
    margin-top: 5px;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 30px
  }

  .str-chat__message-commerce__actions__action {
    margin: 5px;
    display: flex;
    align-items: center;
    height: 10px;
    cursor: pointer
  }

  .str-chat__message-commerce__actions__action svg {
    fill: #000;
    opacity: .5
  }

  .str-chat__message-commerce__actions__action:hover svg {
    opacity: 1
  }

  .str-chat__message-commerce__actions__action--thread, .str-chat__message-commerce__actions__action--reactions {
    display: none
  }

  .str-chat__message-commerce__actions__action--options {
    position: relative;
    display: none
  }

  .str-chat__message-commerce__actions__action--options .str-chat__message-actions-box {
    bottom: 10px;
    left: unset;
    right: 100%;
    width: 120px;
    border-radius: 16px 16px 2px 16px
  }

  .str-chat__message-commerce:hover .str-chat__message-commerce__actions__action--thread {
    display: flex
  }

  .str-chat__message-commerce:hover .str-chat__message-commerce__actions__action--reactions {
    display: flex
  }

  .str-chat__message-commerce-text {
    display: flex;
    padding: 0 0 0 0;
    position: relative
  }

  .str-chat__message-commerce-text-inner {
    text-align: left
  }

  .str-chat__message-commerce-text-inner.str-chat__message-commerce-text-inner--is-emoji {
    margin: 5px 0;
    background: transparent
  }

  .str-chat__message-commerce-text-inner p {
    text-align: left
  }

  .str-chat__message-commerce-text-inner a {
    color: var(--secondary-color);
    font-weight: var(--font-weight-bold);
    text-decoration: none
  }

  .str-chat__message-commerce-text-inner blockquote {
    margin: 0 0 0 5px;
    font-style: italic;
    padding-left: 20px;
    position: relative
  }

  .str-chat__message-commerce-text-inner blockquote::before {
    font-size: var(--xxl-font);
    content: "“";
    font-style: italic;
    position: absolute;
    opacity: .5;
    top: 2px;
    left: -5px
  }

  .str-chat__message-commerce:hover .str-chat__message-commerce__actions__action--options {
    display: flex
  }

  .str-chat__message-commerce:hover .str-chat__message-commerce__actions__action--reactions {
    display: flex
  }

  .str-chat__message-commerce:hover .str-chat__message-commerce__actions__action--thread {
    display: flex
  }

  .str-chat__commerce-message--error-message {
    text-align: left;
    text-transform: uppercase;
    font-size: var(--xs-font);
    opacity: .5
  }

  .str-chat__message-commerce-status {
    margin: 10px 0px 10px 10px;
    order: 3;
    position: absolute;
    left: 100%;
    bottom: 0;
    line-height: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 11
  }

  .str-chat__message-commerce-status-number {
    font-size: var(--xs-font);
    margin-left: 4px;
    position: absolute;
    left: 100%;
    color: rgba(0, 0, 0, .6)
  }

  .str-chat__message-commerce-status > .str-chat__avatar {
    align-self: flex-end;
    margin-right: 0
  }

  .str-chat__message-commerce-status > .str-chat__tooltip {
    display: none;
    max-width: 300px;
    min-width: 100px;
    text-align: center
  }

  .str-chat__message-commerce-status:hover > .str-chat__tooltip {
    display: block
  }

  .str-chat__message-commerce-status::after {
    position: absolute;
    bottom: 100%;
    right: 0;
    content: " ";
    width: 15px;
    height: 15px
  }

  .str-chat__message-commerce .str-chat__message-attachment {
    width: calc(100% - 30px);
    max-width: unset;
    border-radius: unset;
    margin: 0 auto 0 0
  }

  .str-chat__message-commerce .str-chat__message-attachment-card {
    margin: 0;
    border-radius: 4px var(--border-radius) 4px 4px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .08)
  }

  .str-chat__message-commerce .str-chat__message-attachment-card--content {
    background: #ebebeb
  }

  .str-chat__message-commerce .str-chat__message-attachment-card--text {
    display: none
  }

  .str-chat__list--thread .str-chat__message-commerce__actions {
    width: 30px
  }

  .str-chat__list--thread .str-chat__message-commerce__actions__action--options .str-chat__message-actions-box {
    right: unset;
    left: 100%;
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 2px
  }

  .str-chat.dark .str-chat__message-commerce-data {
    color: #fff;
    opacity: .5
  }

  .str-chat.dark .str-chat__message-commerce-text-inner {
    background: rgba(255, 255, 255, .05);
    color: #fff
  }

  .str-chat.dark .str-chat__message-commerce__actions svg {
    fill: #fff
  }

  .str-chat.dark .str-chat__message-commerce .str-chat__message-attachment-card {
    background: rgba(0, 0, 0, .2)
  }

  .str-chat.dark .str-chat__message-commerce .str-chat__message-attachment-card--content {
    background: rgba(0, 0, 0, .2)
  }

  .str-chat.dark .str-chat__message-commerce .str-chat__message-attachment-card--title {
    color: #fff
  }

  .str-chat.dark .str-chat__message-commerce .str-chat__message-attachment-card--url {
    color: rgba(255, 255, 255, .5)
  }

  .str-chat.dark .str-chat__message-commerce--right .str-chat__message-commerce-text-inner {
    background: rgba(0, 0, 0, .2)
  }

  .str-chat.dark .str-chat__message-commerce--right .str-chat__message-commerce .str-chat__message-attachment-card {
    background: rgba(0, 0, 0, .2)
  }

  .str-chat.dark .str-chat__message-commerce--right .str-chat__message-commerce .str-chat__message-attachment-card--content {
    background: rgba(0, 0, 0, .2)
  }

  .str-chat__input {
    background: var(--white);
    box-shadow: 0 -1px 3px 0 var(--border), 0 -1px 0 0 var(--border);
    display: flex;
    flex-wrap: wrap;
    padding: var(--xs-p);
    position: relative;
    font-family: var(--second-font);
    padding-bottom: 0
  }

  .str-chat__input--emojipicker {
    position: absolute;
    bottom: 100%;
    right: 0
  }

  .str-chat__input .rfu-file-previewer {
    flex: 1 1 100%
  }

  .str-chat__input--textarea-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex: 1 0;
    position: relative
  }

  .str-chat__input--textarea-wrapper .str-chat__textarea textarea {
    padding-right: 72px
  }

  .str-chat__input-emojiselect, .str-chat__input .rfu-file-upload-button {
    position: absolute;
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: 44px 44px;
    fill: var(--black60)
  }

  .str-chat__input-emojiselect:hover, .str-chat__input .rfu-file-upload-button:hover {
    fill: var(--black)
  }

  .str-chat__input-emojiselect {
    right: 20px;
    top: calc(100% - 35px)
  }

  .str-chat__input .rfu-file-upload-button {
    right: 46px;
    top: calc(100% - 34px)
  }

  .str-chat__input-footer {
    display: flex;
    justify-content: space-between;
    font-size: var(--sm-font);
    background: var(--white);
    padding: 0 var(--xs-p) var(--xs-p) var(--xs-p);
    color: var(--lighten-black)
  }

  .str-chat__input-footer--typing {
    font-style: italic
  }

  .str-chat__input-footer--count--hidden {
    visibility: hidden
  }

  .str-chat__textarea {
    height: auto;
    flex: 1
  }

  .str-chat__textarea textarea {
    width: 100%;
    outline: none;
    padding: var(--sm-p);
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--border-radius-md);
    font-size: var(--lg-font);
    min-height: 42px;
    transition: height 100ms ease-in;
    resize: none
  }

  .str-chat__textarea textarea:focus {
    background: var(--white);
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-faded)
  }

  .str-chat__textarea textarea:placeholder {
    color: var(--black50)
  }

  .str-chat__emojisearch {
    bottom: calc(100%);
    left: 0;
    width: calc(100% - 20px);
    position: absolute;
    background: var(--white95);
    box-shadow: 0 0 1px 0 var(--black30), 0 0 6px 0 var(--black10);
    z-index: -1;
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
    margin: 0 var(--xs-m);
    max-height: 360px;
    overflow-y: auto
  }

  .str-chat__emojisearch__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0
  }

  .dark.str-chat .str-chat__emojisearch {
    background: var(--dark-grey);
    box-shadow: 0 0 1px 0 var(--black30), 0 0 6px 0 var(--black10);
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0
  }

  .dark.str-chat .str-chat__emojisearch .rta__list-header {
    background: var(--dark-grey);
    border: 1px solid var(--white5);
    box-shadow: 0 2px 1px 0 var(--black5);
    color: var(--white)
  }

  .dark.str-chat .str-chat__emojisearch .rta__entity {
    color: var(--white)
  }

  .dark.str-chat .rfu-file-previewer__file a {
    color: var(--white)
  }

  .dark.str-chat .rfu-file-previewer__file:hover {
    background: transparent
  }

  .dark.str-chat .rfu-file-previewer__close-button {
    color: var(--white)
  }

  .rta {
    font-size: var(--md-font)
  }

  .rta__entity--selected {
    background-color: var(--primary-color);
    color: var(--white)
  }

  .rta__list {
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0
  }

  .rta__list-header {
    padding: var(--sm-p);
    font-size: var(--md-font)
  }

  .str-chat__emoji-item {
    padding: 0 var(--md-p);
    display: flex;
    align-items: center;
    margin: 0 calc(var(--xs-m) * -1)
  }

  .str-chat__emoji-item--entity {
    min-width: 24px
  }

  .str-chat__emoji-item--highlight {
    font-weight: var(--font-weight-bold);
    font-size: var(--sm-font)
  }

  .str-chat__emoji-item--part {
    font-size: var(--sm-font)
  }

  .str-chat__slash-command {
    padding: var(--xs-p) var(--sm-p);
    font-size: var(--md-font)
  }

  .str-chat__slash-command-description {
    font-size: var(--sm-font)
  }

  .str-chat__user-item {
    padding: var(--xs-p) var(--sm-p);
    display: flex
  }

  .str-chat__user-item--highlight {
    font-weight: var(--font-weight-bold);
    font-size: var(--sm-font)
  }

  .str-chat__user-item--part {
    font-size: var(--sm-font)
  }

  .str-chat .rfu-dropzone .rfu-dropzone__notifier {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: var(--xxs-p);
    z-index: 1001;
    display: none
  }

  .str-chat .rfu-dropzone--accept .rfu-dropzone__notifier {
    background: var(--primary-color-faded);
    display: block
  }

  .str-chat .rfu-dropzone--reject .rfu-dropzone__notifier {
    background: var(--red);
    display: block
  }

  .rfu-dropzone__inner {
    width: 100%;
    height: 100%;
    padding: 0 var(--lg-p);
    border: 1px dashed transparent;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white);
    font-weight: 800;
    font-size: var(--sm-font)
  }

  .rfu-dropzone__inner svg {
    display: none
  }

  .rfu-dropzone--reject .rfu-dropzone__inner {
    display: none
  }

  .str-chat__file-uploads {
    max-height: 300px;
    flex: 1 1 100%;
    overflow-y: auto
  }

  .rfu-file-upload-button svg {
    fill: var(--grey)
  }

  .dark.str-chat .str-chat__input {
    background: var(--white5);
    box-shadow: 0 -1px 1px 0 var(--black30)
  }

  .dark.str-chat .str-chat__input-footer {
    background: var(--white5)
  }

  .dark.str-chat .str-chat__input textarea {
    background: var(--black10);
    border: 1px solid var(--black40);
    border-radius: var(--border-radius-sm);
    color: var(--white)
  }

  .dark.str-chat .str-chat__input .str-chat__input-emojiselect svg {
    fill: var(--white)
  }

  .dark.str-chat .str-chat__input .rfu-file-upload-button svg {
    fill: var(--white)
  }

  .str-chat__fileupload-wrapper .str-chat__tooltip {
    display: none;
    bottom: 35px;
    right: 50px
  }

  .str-chat__fileupload-wrapper:hover .str-chat__tooltip {
    display: block
  }

  .str-chat__emojiselect-wrapper .str-chat__tooltip {
    display: none;
    bottom: 35px;
    right: 24px
  }

  .str-chat__emojiselect-wrapper:hover .str-chat__tooltip {
    display: block
  }

  .str-chat__small-message-input--textarea-wrapper .str-chat__fileupload-wrapper .str-chat__tooltip {
    bottom: 32px;
    right: 32px
  }

  .str-chat__small-message-input--textarea-wrapper .str-chat__emojiselect-wrapper .str-chat__tooltip {
    bottom: 32px;
    right: 10px
  }

  .str-chat__small-message-input--textarea-wrapper .str-chat__input-small-cooldown {
    position: absolute;
    right: 20px;
    font-size: var(--lg-font);
    font-weight: var(--font-weight-bold);
    top: 6px
  }

  .str-chat__input-flat {
    background: var(--white);
    padding: 10px;
    position: relative;
    z-index: 1;
    width: 100%
  }

  .str-chat__input-flat-quoted {
    border-top: 1px solid var(--black10)
  }

  .str-chat__input-flat-quoted .quoted-message-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--xs-m)
  }

  .str-chat__input-flat-quoted .quoted-message-preview-header {
    font-size: var(--md-font);
    margin-bottom: var(--xs-m)
  }

  .str-chat__input-flat-quoted .quoted-message-preview-header .str-chat__square-button {
    position: absolute;
    right: 0;
    top: 0;
    margin: unset;
    padding: var(--xs-p);
    border-radius: var(--border-radius);
    cursor: pointer
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content {
    display: flex;
    align-items: flex-end;
    background: var(--grey-whisper);
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) 0;
    max-width: 60%;
    padding: var(--xs-p) var(--sm-p)
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner {
    display: flex;
    text-align: start;
    align-items: flex-end
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment {
    margin: 0
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment--image {
    width: 48px
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment--img, .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment--card {
    border-radius: var(--border-radius-md);
    max-height: 48px;
    max-width: 48px;
    width: 100%
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment--file {
    min-width: 33%
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment-file--item {
    background: var(--white);
    border-radius: var(--border-radius-md);
    border-left: none;
    padding: 0 var(--xs-p)
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner .str-chat__message-attachment-card--image {
    border: none;
    border-radius: var(--border-radius-md)
  }

  .str-chat__input-flat-quoted .quoted-message-preview-content-inner :nth-child(2) {
    margin-left: var(--xs-m)
  }

  .str-chat__input-flat-wrapper {
    display: flex;
    flex-wrap: wrap
  }

  .str-chat__input-flat .str-chat__textarea {
    flex: 1
  }

  .str-chat__input-flat .str-chat__textarea > textarea {
    min-height: 56px;
    background: var(--grey-whisper);
    border-radius: var(--border-radius-md);
    padding: 20px 69px;
    padding-left: 20px; 
    font-size: var(--lg-font);
    line-height: 17px;
    border: none;
    margin: 0
  }

  .str-chat__input-flat .str-chat__textarea > textarea:focus {
    border: none;
    color: var(--black);
    border-radius: var(--border-radius-md);
    box-shadow: 0 0 0 3px var(--primary-color)
  }

  .str-chat__input-flat-footer {
    padding: var(--xs-p) var(--xl-p);
    background: var(--white)
  }

  .str-chat__input-flat-emojiselect {
    position: absolute;
    top: calc(100% - 45px);
    left: 25px;
    display: none;
  }

  .str-chat__input-flat-emojiselect svg {
    fill: var(--black);
    opacity: .5
  }

  .str-chat__input-flat-emojiselect svg:hover {
    opacity: 1
  }

  .str-chat__input-flat-cooldown {
    font-size: var(--xl-font);
    font-weight: var(--font-weight-bold)
  }

  .str-chat__input-flat--textarea-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex: 1 0;
    position: relative
  }

  .str-chat__input-flat--textarea-wrapper .str-chat__fileupload-wrapper .str-chat__tooltip {
    bottom: 45px;
    right: 25px
  }

  .str-chat__input-flat--textarea-wrapper .str-chat__emojiselect-wrapper .str-chat__tooltip {
    bottom: 50px;
    left: 32px;
    right: unset
  }

  .str-chat__input-flat--textarea-wrapper .str-chat__emojiselect-wrapper .str-chat__tooltip::after {
    left: 5px;
    right: unset
  }

  .str-chat__input-flat .str-chat__input--emojipicker {
    left: 0;
    right: auto
  }

  .str-chat__input-flat .rfu-dropzone {
    width: 100%
  }

  .str-chat__input-flat .rfu-file-previewer {
    width: 100%
  }

  .str-chat__input-flat .rfu-file-upload-button {
    position: absolute;
    top: calc(100% - 40px);
    right: 25px
  }

  .str-chat__input-flat .rfu-file-upload-button svg {
    fill: var(--black);
    opacity: .5
  }

  .str-chat__input-flat .rfu-file-upload-button svg:hover {
    opacity: 1
  }

  .rfu-image-previewer {
    flex: 1 1 100%
  }

  .rfu-image-previewer__image {
    width: 60px !important;
    height: 60px !important
  }

  .rfu-image-previewer__image .rfu-thumbnail__wrapper {
    width: 60px !important;
    height: 60px !important;
    border-radius: var(--border-radius-md)
  }

  .rfu-image-previewer__image .rfu-thumbnail__wrapper .rfu-thumbnail__overlay, .rfu-image-previewer__image .rfu-thumbnail__wrapper .rfu-icon-button {
    padding: 0
  }

  .rfu-image-previewer__image .rfu-thumbnail__wrapper .rfu-thumbnail__overlay svg, .rfu-image-previewer__image .rfu-thumbnail__wrapper .rfu-icon-button svg {
    opacity: .9;
    height: 25px;
    width: 25px
  }

  .rfu-image-previewer .rfu-thumbnail-placeholder {
    width: 60px;
    height: 60px;
    border-radius: var(--border-radius-md)
  }

  .commerce.str-chat .str-chat__input-flat {
    padding: 8px 24px;
    background: transparent
  }

  .dark.str-chat .str-chat__input-flat {
    background: var(--white5)
  }

  .dark.str-chat .str-chat__input-flat textarea {
    background: var(--white5);
    border-radius: var(--border-radius-md);
    color: var(--white)
  }

  .dark.str-chat .str-chat__input-flat-emojiselect svg, .dark.str-chat .str-chat__input-flat .rfu-file-upload-button svg {
    fill: var(--white)
  }

  .dark.str-chat.commerce .str-chat__input-flat {
    background: none
  }

  @media screen and (max-width: 960px) {
    .str-chat.messaging .str-chat__input-flat {
      padding: var(--xs-p) var(--xs-p)
    }
  }

  .str-chat__message-notification {
    display: block;
    position: absolute;
    align-self: center;
    background: var(--primary-color);
    border: none;
    color: var(--white);
    border-radius: 50px;
    padding: var(--xxs-p) var(--xs-p);
    font-size: var(--sm-font);
    bottom: 10px;
    z-index: 101
  }

  .str-chat__message-notification-right {
    align-self: flex-end
  }

  .str-chat__message-notification-scroll-down {
    cursor: pointer;
    display: block;
    width: 42px;
    height: 42px;
    background-size: 14px auto;
    border-radius: 50%;
    background: var(--white);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26)
  }

  .str-chat__message-notification-scroll-down::before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid var(--primary-color);
    border-width: 0 0 2px 2px
  }

  .str-chat__message-notification-scroll-down-unread-count {
    font-size: 10px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    bottom: 18px
  }

  .str-chat__list, .str-chat-angular__message-list-host {
    overflow-x: hidden;
    overflow-y: auto
  }

  .str-chat__list {
    flex: 1;
    -webkit-overflow-scrolling: touch;
    padding: 0
  }

  .str-chat__list .str-chat__reverse-infinite-scroll {
    padding-top: 72px
  }

  .str-chat__list-wrapper {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column
  }

  .str-chat__list--thread {
    padding: var(--sm-p) 0 0 0;
    overflow: visible
  }

  .str-chat__list__center {
    width: 100%;
    display: flex;
    justify-content: center
  }

  .str-chat__ul {
    display: block;
    list-style-type: none;
    padding: 0;
    margin: 0
  }

  .str-chat__custom-notification {
    border-radius: var(--border-radius-sm);
    font-size: var(--sm-font);
    padding: var(--xs-p);
    font-family: var(--second-font);
    text-align: center
  }

  .str-chat__custom-notification.notification-success {
    background: var(--faded-green);
    border: 1px solid var(--green);
    color: var(--green)
  }

  .str-chat__custom-notification.notification-error {
    background: var(--faded-red);
    border: 1px solid var(--red);
    color: var(--red)
  }

  .str-chat__connection-issue {
    background: var(--faded-red);
    border: 1px solid var(--red);
    color: var(--red);
    border-radius: var(--border-radius-sm);
    font-size: var(--sm-font);
    padding: var(--xs-p);
    font-family: var(--second-font);
    text-align: center
  }

  .str-chat__list-notifications {
    padding: 0 var(--xl-p);
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center
  }

  .messaging.str-chat .str-chat__list {
    padding: 0 var(--xl-p) 0;
    padding: 0 30px;
    background: var(--white)
  }

  .messaging.str-chat .str-chat__list .str-chat__reverse-infinite-scroll {
    padding-top: 0
  }

  .messaging.str-chat .str-chat__list-notifications {
    background: var(--white)
  }

  @media screen and (max-width: 960px) {
    .messaging.str-chat .str-chat__list {
      padding: 0 var(--xs-p) 0
    }

    .messaging.str-chat .str-chat__list .str-chat__reverse-infinite-scroll {
      padding-top: 0
    }

    .messaging.str-chat .str-chat__list-notifications {
      padding: 0 var(--xs-p)
    }
  }

  .messaging.str-chat.dark .str-chat__list {
    background: var(--white5)
  }

  .messaging.str-chat.dark .str-chat__list-notifications {
    background: var(--white5)
  }

  .livestream.str-chat .str-chat__list {
    padding: 0 var(--xs-p)
  }

  .livestream.str-chat .str-chat__list .str-chat__reverse-infinite-scroll {
    padding-top: 56px
  }

  .commerce.str-chat .str-chat__list {
    padding: 0 var(--md-p) 0
  }

  .commerce.str-chat .str-chat__list .str-chat__reverse-infinite-scroll {
    padding-top: 72px
  }

  .commerce.str-chat .str-chat__list-notifications {
    padding-left: var(--md-p);
    padding-right: var(--md-p)
  }

  .str-chat__virtual-list {
    position: relative;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: var(--white);
    margin: 0;
    width: 100%;
    height: 100%
  }

  .str-chat__virtual-list__loading {
    display: flex;
    padding-top: var(--xs-p);
    justify-content: center;
    width: 100%;
    position: absolute
  }

  .str-chat__virtual-list p {
    margin: 0 !important
  }

  .str-chat__virtual-list p a {
    white-space: pre-line;
    overflow: hidden;
    word-wrap: break-word
  }

  .dark .str-chat__virtual-list {
    background: var(--white5)
  }

  .str-chat__message-team {
    font-family: var(--second-font);
    position: relative;
    display: flex;
    padding: 5px 40px
  }

  .str-chat__message-team .str-chat__avatar {
    margin-right: 0
  }

  .str-chat__message-team-pin-indicator {
    padding-left: 40px
  }

  .str-chat__message-team-actions {
    position: absolute;
    top: -12px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75px;
    height: 24px;
    border-radius: 100px;
    background: var(--white);
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .07);
    z-index: 10;
    visibility: hidden;
    padding: 0 4px 0
  }

  .str-chat__message-team-actions > span {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    cursor: pointer
  }

  .str-chat__message-team-actions > span > span {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center
  }

  .str-chat__message-team-actions > span svg {
    fill: #000;
    opacity: .5
  }

  .str-chat__message-team-actions > span:hover svg {
    opacity: 1
  }

  .str-chat__message-team-actions .str-chat__message-actions-box {
    bottom: initial;
    left: initial;
    visibility: hidden;
    right: 100%;
    top: -10px;
    border-radius: 7px
  }

  .str-chat__message-team-actions .str-chat__message-actions-box--open {
    visibility: visible
  }

  .str-chat__message-team-group {
    position: relative;
    width: 100%
  }

  .str-chat__message-team-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 50px;
    padding: 0 10px 0 0;
    justify-content: space-between
  }

  .str-chat__message-team-meta time {
    text-transform: uppercase;
    color: rgba(0, 0, 0, .5);
    font-size: var(--xs-font);
    margin-bottom: 5px;
    text-align: right;
    visibility: hidden
  }

  .str-chat__message-team-author {
    font-size: 15px;
    text-transform: capitalize;
    line-height: 40px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between
  }

  .str-chat__message-team-content {
    width: 100%;
    padding-left: 10px;
    color: #404040;
    font-size: 15px;
    line-height: 22px;
    font-weight: var(--font-weight-regular);
    border-left: 1px solid rgba(0, 0, 0, .1);
    position: relative;
    margin: 0 0
  }

  .str-chat__message-team-content--image {
    padding-left: 0;
    border-left-color: transparent
  }

  .str-chat__message-team-content p {
    margin: 0;
    white-space: pre-line;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
  }

  .str-chat__message-team-content p:not(:first-of-type) {
    margin: 16px 0 0
  }

  .str-chat__message-team-content p a {
    color: var(--secondary-color);
    font-weight: var(--font-weight-bold);
    text-decoration: none
  }

  .str-chat__message-team-content p code {
    background-color: #f8f8f8;
    border: 1px solid rgba(208, 2, 27, .1);
    border-radius: 3px;
    padding: 2px
  }

  .str-chat__message-team-content pre, .str-chat__message-team-content code {
    font-family: var(--main-font);
    line-height: inherit;
    font-size: var(--sm-font);
    font-weight: var(--font-weight-bold)
  }

  .str-chat__message-team-content pre {
    margin: 0 5px 0 0;
    border-radius: 4px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    padding: 10px
  }

  .str-chat__message-team-content code {
    width: inherit;
    white-space: pre-wrap;
    word-break: break-all
  }

  .str-chat__message-team-content ul {
    margin: 0
  }

  .str-chat__message-team-content--top:not(.str-chat__message-team-content--image)::before, .str-chat__message-team-content--single:not(.str-chat__message-team-content--image)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-135deg) translateX(1px);
    transform-origin: 0;
    width: 5px;
    height: 1px;
    background-color: rgba(0, 0, 0, .1)
  }

  .str-chat__message-team-content--top {
    margin: 5px 0 0
  }

  .str-chat__message-team-content--single {
    margin: 5px 0 0
  }

  .str-chat__message-team-content--middle {
    margin: 0 0 0
  }

  .str-chat__message-team-content--bottom {
    margin: 0 0 0
  }

  .str-chat__message-team-text--is-emoji {
    font-size: var(--xxxl-font);
    line-height: 42px
  }

  .str-chat__message-team-status {
    position: absolute;
    left: 100%;
    bottom: 1px;
    line-height: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 11
  }

  .str-chat__message-team-status-number {
    font-size: var(--xs-font);
    margin-left: 4px;
    position: absolute;
    left: 100%;
    color: rgba(0, 0, 0, .6)
  }

  .str-chat__message-team-status > .str-chat__avatar {
    align-self: flex-end;
    margin-right: 0
  }

  .str-chat__message-team-status > .str-chat__tooltip {
    display: none;
    max-width: 300px;
    min-width: 100px;
    text-align: center
  }

  .str-chat__message-team-status:hover > .str-chat__tooltip {
    display: block
  }

  .str-chat__message-team-status::after {
    position: absolute;
    bottom: 100%;
    right: 0;
    content: " ";
    width: 15px;
    height: 15px
  }

  .str-chat__message-team-failed {
    border: 0;
    background: none;
    display: flex;
    align-items: center;
    color: #ea152f;
    cursor: pointer;
    margin: 5px 0;
    font-size: var(--sm-font);
    padding: 0
  }

  .str-chat__message-team-failed svg {
    margin-right: 7px
  }

  .str-chat__message-team-form-footer {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 5px
  }

  .str-chat__message-team--bottom .str-chat__message-team-meta time, .str-chat__message-team--single .str-chat__message-team-meta time {
    visibility: visible
  }

  .str-chat__message-team--editing {
    padding: 10px;
    background: #edf4ff;
    box-shadow: 0 0 11px 0 rgba(0, 0, 0, .06), inset 0 1px 0 0 #006cff, inset 0 -1px 0 0 #006cff;
    z-index: 1
  }

  .str-chat__message-team:hover:not(.str-chat__message-team--editing,.str-chat__message-team--error) .str-chat__message-team-content {
    background: rgba(0, 0, 0, .03)
  }

  .str-chat__message-team:hover .str-chat__message-team-meta time {
    visibility: visible
  }

  .str-chat__message-team:hover .str-chat__message-team-actions {
    visibility: visible
  }

  .str-chat__message-team--error {
    padding-top: 20px;
    padding-bottom: 20px
  }

  .str-chat__message-team--error .str-chat__message-team-status {
    display: none
  }

  .str-chat__message-team--error .str-chat__message-team-content {
    background: transparent;
    border-width: 2px;
    border-color: #d0021b
  }

  .str-chat__message-team--error .str-chat__message-team-content p {
    opacity: .5
  }

  .str-chat__message-team--error .str-chat__message-team-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-135deg) translateX(1px);
    transform-origin: 0;
    width: 5px;
    height: 2px;
    background-color: #d0021b
  }

  .str-chat__message-team--ephemeral .str-chat__message-team-status {
    display: none
  }

  .str-chat__message-team--failed .str-chat__message-team-content--text {
    border-color: #d0021b
  }

  .str-chat__message-team--failed .str-chat__message-team-content--text p {
    opacity: .5
  }

  .str-chat__message-team .str-chat__message-attachment--img {
    border-radius: 0;
    padding-left: 5px;
    border-left: 1px solid rgba(0, 0, 0, .1)
  }

  .str-chat__message-team .str-chat__message-attachment-card {
    margin: 0;
    border-radius: 4px 4px 4px 4px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .08)
  }

  .str-chat__message-team .str-chat__message-attachment-card--content {
    background: #ebebeb
  }

  .str-chat__message-team .str-chat__message-attachment-card--text {
    display: none
  }

  .str-chat__message-team .str-chat__input-emojiselect, .str-chat__message-team .str-chat__input-fileupload {
    position: static;
    top: initial
  }

  .str-chat__message-team .quoted-message {
    align-items: center;
    padding-left: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .15);
    border-radius: 8px;
    width: fit-content;
    background: #fff
  }

  .str-chat__message-team .quoted-message-inner {
    background: #fff
  }

  .str-chat__message-team .quoted-message-inner .str-chat__message-attachment img {
    padding-left: 0;
    border-left: 0
  }

  .str-chat__message-team-error-header {
    font-size: var(--xs-font);
    color: rgba(0, 0, 0, .4);
    font-style: italic;
    text-transform: none
  }

  .str-chat__thread-list .str-chat__message-simple__actions {
    min-width: 30px
  }

  .str-chat__thread-list .str-chat__message-team {
    padding: 5px 10px
  }

  .str-chat__thread-list .str-chat__message-team-actions {
    width: 60px;
    min-width: unset
  }

  .str-chat__thread-list .str-chat__message-team-actions .str-chat__message-actions-box {
    top: initial;
    bottom: initial;
    bottom: -10px
  }

  .str-chat blockquote {
    margin: 0 0 0 5px;
    font-style: italic;
    padding-left: 20px;
    position: relative
  }

  .str-chat blockquote::before {
    font-size: var(--xxl-font);
    content: "“";
    font-style: italic;
    position: absolute;
    opacity: .5;
    top: 2px;
    left: -5px
  }

  .str-chat.dark .str-chat__message-team-error-header {
    color: rgba(255, 255, 255, .5);
    opacity: 1
  }

  .str-chat.dark .str-chat__message-team-author {
    color: #fff
  }

  .str-chat.dark .str-chat__message-team-meta time {
    color: rgba(255, 255, 255, .3)
  }

  .str-chat.dark .str-chat__message-team-content, .str-chat.dark .str-chat__message-team .str-chat__message-attachment {
    border-color: rgba(0, 0, 0, .4);
    color: #fff
  }

  .str-chat.dark .str-chat__message-team-content--top:not(.str-chat__message-team-content--image)::before, .str-chat.dark .str-chat__message-team-content--single:not(.str-chat__message-team-content--image)::before, .str-chat.dark .str-chat__message-team .str-chat__message-attachment--top:not(.str-chat__message-team-content--image)::before, .str-chat.dark .str-chat__message-team .str-chat__message-attachment--single:not(.str-chat__message-team-content--image)::before {
    background-color: rgba(0, 0, 0, .4)
  }

  .str-chat.dark .str-chat__message-team-content--image, .str-chat.dark .str-chat__message-team .str-chat__message-attachment--image {
    border-color: transparent
  }

  .str-chat.dark .str-chat__message-team-content p code, .str-chat.dark .str-chat__message-team .str-chat__message-attachment p code {
    background-color: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .1)
  }

  .str-chat.dark .str-chat__message-team-content pre, .str-chat.dark .str-chat__message-team .str-chat__message-attachment pre {
    background-color: rgba(255, 255, 255, .05);
    border: 1px solid rgba(255, 255, 255, .1)
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-file--item, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-file--item {
    border-color: rgba(0, 0, 0, .4)
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-file--item a, .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-file--item span, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-file--item a, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-file--item span {
    color: #fff
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-file--item span, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-file--item span {
    opacity: .4
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-file--item:hover, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-file--item:hover {
    background: transparent
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment--file a, .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment--file span, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment--file a, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment--file span {
    color: #fff
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment--file span, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment--file span {
    opacity: .4
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-card, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-card {
    background: transparent
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-card--content, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-card--content {
    background: rgba(0, 0, 0, .1);
    min-height: 58px;
    margin: 0;
    padding: 0px 16px
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-card--title, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-card--title {
    color: #fff
  }

  .str-chat.dark .str-chat__message-team-content .str-chat__message-attachment-card--url, .str-chat.dark .str-chat__message-team .str-chat__message-attachment .str-chat__message-attachment-card--url {
    color: rgba(255, 255, 255, .4)
  }

  .str-chat.dark .str-chat__message-team-actions {
    background: #1b1d20;
    border: 1px solid rgba(224, 224, 224, .03);
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .07);
    border-radius: 12px
  }

  .str-chat.dark .str-chat__message-team-actions .str-chat__message-actions-box {
    background: #6a6b6d
  }

  .str-chat.dark .str-chat__message-team-actions > span {
    border-color: rgba(0, 0, 0, .04)
  }

  .str-chat.dark .str-chat__message-team-actions > span svg {
    fill: #fff
  }

  .str-chat.dark .str-chat__message-team--error .str-chat__message-team-content {
    border-color: red;
    border-width: 1px
  }

  .str-chat.dark .str-chat__message-team--error .str-chat__message-team-content p {
    color: rgba(255, 255, 255, .5);
    opacity: 1
  }

  .str-chat.dark .str-chat__message-team--error .str-chat__message-team-content--top:not(.str-chat__message-team-content--image)::before, .str-chat.dark .str-chat__message-team--error .str-chat__message-team-content--single:not(.str-chat__message-team-content--image)::before {
    background-color: red;
    height: 1px
  }

  .str-chat.dark .str-chat__message-team--editing {
    padding: 10px;
    background: rgba(0, 0, 0, .1);
    box-shadow: 0 0 11px 0 rgba(0, 0, 0, .06), inset 0 1px 0 0 rgba(0, 108, 255, .1), inset 0 -1px 0 0 rgba(0, 108, 255, .1);
    z-index: 1
  }

  .str-chat__message-livestream {
    font-family: var(--second-font);
    display: flex;
    width: 100%;
    margin: 0 0;
    padding: 10px 10px;
    border: 1px solid transparent;
    position: relative
  }

  .str-chat__message-livestream-pin-indicator {
    padding-left: 10px
  }

  .str-chat__message-livestream-left {
    width: 30px
  }

  .str-chat__message-livestream-left .str-chat__avatar {
    margin-right: 0
  }

  .str-chat__message-livestream-right {
    flex: 1
  }

  .str-chat__message-livestream-content {
    position: relative;
    padding: 5px 10px;
    border: 1px solid transparent
  }

  .str-chat__message-livestream-content > * {
    font-size: var(--sm-font);
    line-height: 20px;
    margin: 0
  }

  .str-chat__message-livestream-content p {
    margin: 0;
    white-space: pre-line;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto
  }

  .str-chat__message-livestream-content p:not(:first-of-type) {
    margin: 16px 0 0
  }

  .str-chat__message-livestream-content p code {
    background-color: var(--white20);
    border: 1px solid var(--primary-color-faded);
    border-radius: 3px;
    padding: 2px 4px
  }

  .str-chat__message-livestream-content p a {
    color: var(--primary-color);
    font-weight: var(--font-weight-bold);
    text-decoration: none
  }

  .str-chat__message-livestream-content pre, .str-chat__message-livestream-content code {
    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
    line-height: inherit;
    padding: 10px;
    font-size: var(--sm-font);
    font-weight: var(--font-weight-bold)
  }

  .str-chat__message-livestream-content pre {
    margin: 0 5px 0 0;
    border-radius: 4px;
    background-color: var(--primary-color-faded);
    border: 1px solid var(--primary-color)
  }

  .str-chat__message-livestream-content code {
    width: inherit;
    word-break: break-all
  }

  .str-chat__message-livestream-content .livestream-quoted-message {
    background: var(--light-grey);
    border: 1px solid var(--black10);
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px
  }

  .str-chat__message-livestream:hover .str-chat__message-livestream-actions {
    display: flex
  }

  .str-chat__message-livestream-actions {
    background: var(--white60);
    border: 1px solid var(--black20);
    box-shadow: 0 2px 1px 0 var(--black5);
    width: 141px;
    height: 24px;
    padding: 0 4px;
    position: absolute;
    top: -12px;
    right: 0;
    border-radius: 24px;
    display: none;
    align-items: center;
    justify-content: space-between
  }

  .str-chat__message-livestream-actions > span {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    cursor: pointer
  }

  .str-chat__message-livestream-actions > span:not(:last-of-type) {
    border-right: 1px solid var(--light-grey)
  }

  .str-chat__message-livestream-actions > span > span {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center
  }

  .str-chat__message-livestream-actions > span svg {
    fill: var(--black);
    opacity: .5
  }

  .str-chat__message-livestream-actions > span:hover svg {
    opacity: 1
  }

  .str-chat__message-livestream-actions .str-chat__message-actions-box {
    bottom: initial;
    left: initial;
    visibility: hidden;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 7px
  }

  .str-chat__message-livestream-actions .str-chat__message-actions-box--open {
    visibility: visible
  }

  .str-chat__message-livestream-time {
    font-size: var(--xs-font);
    line-height: 20px;
    color: var(--black50);
    flex: 2;
    padding: 0 4px
  }

  .str-chat__message-livestream-text--is-emoji {
    font-size: var(--xxxl-font);
    line-height: 42px
  }

  .str-chat__message-livestream-author {
    margin-bottom: 8px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: flex-start
  }

  .str-chat__message-livestream-author strong {
    margin-right: 8px
  }

  .str-chat__message-livestream:hover {
    background: var(--white5);
    border: 1px solid var(--black5);
    box-shadow: 0 0 6px 0 var(--black5);
    border-radius: 6px
  }

  .str-chat__message-livestream .str-chat__message-attachment--img {
    border-radius: 0
  }

  .str-chat__message-livestream .str-chat__message-attachment-card {
    margin: 0;
    border-radius: 0;
    background: var(--white20);
    border: 1px solid var(--black10)
  }

  .str-chat__message-livestream .str-chat__message-attachment-card--content {
    background: var(--white20)
  }

  .str-chat__message-livestream .str-chat__message-attachment-card--text {
    display: none
  }

  .str-chat__message-livestream .str-chat__message-attachment-card--url {
    text-transform: lowercase
  }

  .str-chat__message-livestream__thread-banner {
    text-align: center;
    font-size: var(--sm-font);
    padding: 8px;
    margin: 8px 10px 0 10px;
    background: var(--primary-color);
    border-radius: 2px;
    color: var(--dark-grey)
  }

  .str-chat__message-livestream--error .str-chat__message-livestream-content p, .str-chat__message-livestream--failed .str-chat__message-livestream-content p {
    color: var(--red)
  }

  .str-chat__message-livestream--error .str-chat__message-livestream-content p svg, .str-chat__message-livestream--failed .str-chat__message-livestream-content p svg {
    position: relative;
    top: 2px;
    margin-right: 4px
  }

  .str-chat__message-livestream--failed .str-chat__message-livestream-content p {
    cursor: pointer
  }

  .str-chat__message-livestream--initial-message {
    margin: 20px 10px 0;
    width: auto
  }

  .str-chat__list--thread .str-chat__message-livestream__actions {
    min-width: 30px
  }

  .str-chat__list--thread .str-chat__message-livestream-actions {
    width: 110px;
    min-width: unset
  }

  .str-chat__list--thread .str-chat__message-livestream-actions .str-chat__message-actions-box {
    top: initial;
    bottom: initial;
    bottom: -10px
  }

  .livestream.dark.str-chat .str-chat__message-livestream {
    color: var(--light-grey)
  }

  .livestream.dark.str-chat .str-chat__message-livestream:hover {
    background: var(--white5);
    border: 1px solid var(--black5);
    box-shadow: 0 0 6px 0 var(--black5);
    border-radius: 6px
  }

  .livestream.dark.str-chat .str-chat__message-livestream .str-chat__message-attachment-card {
    background: var(--black10);
    border: 1px solid var(--white10)
  }

  .livestream.dark.str-chat .str-chat__message-livestream .str-chat__message-attachment-card--content {
    background: var(--black10)
  }

  .livestream.dark.str-chat .str-chat__message-livestream .str-chat__message-attachment-card--url {
    color: var(--white80)
  }

  .livestream.dark.str-chat .str-chat__message-livestream-actions {
    background: var(--dark-grey);
    border: 1px solid var(--white5);
    box-shadow: 0 2px 1px 0 var(--black5)
  }

  .livestream.dark.str-chat .str-chat__message-livestream-actions > span:not(:last-of-type) {
    border-color: var(--white5)
  }

  .livestream.dark.str-chat .str-chat__message-livestream-actions svg {
    fill: var(--white)
  }

  .livestream.dark.str-chat .str-chat__message-livestream-time {
    color: var(--white);
    opacity: .5
  }

  .str-chat__message-replies-count-button {
    display: block;
    border: none;
    background: none;
    padding: 0;
    margin-top: var(--xs-m);
    font-size: var(--sm-font);
    line-height: 15px;
    font-weight: var(--font-weight-bold);
    color: var(--primary-color);
    cursor: pointer
  }

  .str-chat__message-replies-count-button svg {
    fill: var(--grey-whisper);
    margin-right: var(--xxs-m)
  }

  .dark.str-chat .str-chat__message-replies-count-button svg {
    fill: var(--white10)
  }

  .dark.str-chat.team .str-chat__message-replies-count-button svg {
    fill: var(--black40)
  }

  .str-chat__modal {
    background: var(--black);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    opacity: .89;
    display: none;
    align-items: center;
    justify-content: center
  }

  .str-chat__modal--open {
    display: flex
  }

  .str-chat__modal__inner {
    max-width: 667px;
    background: var(--white);
    padding: var(--md-p);
    border-radius: var(--border-radius-md)
  }

  .str-chat__modal__close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: var(--md-p);
    font-size: var(--md-font);
    line-height: 10px;
    color: var(--white);
    cursor: pointer;
    display: flex;
    align-items: center
  }

  .str-chat__modal__close-button svg {
    position: relative;
    top: 1px;
    margin-left: var(--xs-m);
    fill: var(--white)
  }

  .str-chat__modal__close-button:hover {
    opacity: .79
  }

  .str-chat__modal .str-chat__edit-message-form {
    min-width: 300px
  }

  .str-chat__modal .str-chat__input-emojiselect, .str-chat__modal .str-chat__input-fileupload {
    position: relative;
    top: unset;
    right: unset
  }

  .str-chat.dark.messaging .str-chat__modal__inner {
    border: 2px solid var(--white);
    background: var(--black)
  }

  .str-chat__modal-image__wrapper {
    line-height: 0;
    position: relative;
    text-align: center;
    box-sizing: border-box
  }

  .str-chat__modal-image__image {
    max-height: 100vh;
    max-width: 100%
  }

  .str-chat__message .str-chat__reaction-list::after, .str-chat__message .str-chat__reaction-list::before, .str-chat__message-commerce .str-chat__reaction-list::after, .str-chat__message-commerce .str-chat__reaction-list::before, .str-chat__message .str-chat__reaction-list, .str-chat__message-commerce .str-chat__reaction-list {
    background: url("../assets/str-chat__reaction-list-sprite@1x.png") no-repeat;
    background-size: 59px 101px
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx) {
    .str-chat__message .str-chat__reaction-list::after, .str-chat__message .str-chat__reaction-list::before, .str-chat__message-commerce .str-chat__reaction-list::after, .str-chat__message-commerce .str-chat__reaction-list::before, .str-chat__message .str-chat__reaction-list, .str-chat__message-commerce .str-chat__reaction-list {
      background-image: url("../assets/str-chat__reaction-list-sprite@2x.png")
    }
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min-resolution: 3dppx) {
    .str-chat__message .str-chat__reaction-list::after, .str-chat__message .str-chat__reaction-list::before, .str-chat__message-commerce .str-chat__reaction-list::after, .str-chat__message-commerce .str-chat__reaction-list::before, .str-chat__message .str-chat__reaction-list, .str-chat__message-commerce .str-chat__reaction-list {
      background-image: url("../assets/str-chat__reaction-list-sprite@3x.png")
    }
  }

  .str-chat__message .str-chat__reaction-list, .str-chat__message-commerce .str-chat__reaction-list {
    position: absolute;
    right: 15px;
    top: -28px;
    z-index: 1;
    height: 33px;
    width: initial;
    background-position: 0 -66px;
    background-repeat: repeat-x
  }

  .str-chat__message .str-chat__reaction-list ul, .str-chat__message-commerce .str-chat__reaction-list ul {
    position: relative;
    list-style-type: none;
    padding: 0;
    font-size: var(--lg-font);
    line-height: 26px;
    display: flex;
    justify-content: center;
    margin: -1px -16px 0 0;
    z-index: 888
  }

  .str-chat__message .str-chat__reaction-list .emoji-mart-emoji, .str-chat__message-commerce .str-chat__reaction-list .emoji-mart-emoji {
    display: flex
  }

  .str-chat__message .str-chat__reaction-list::after, .str-chat__message .str-chat__reaction-list::before, .str-chat__message-commerce .str-chat__reaction-list::after, .str-chat__message-commerce .str-chat__reaction-list::before {
    position: absolute;
    content: "";
    top: 0;
    height: 33px
  }

  .str-chat__message .str-chat__reaction-list::after, .str-chat__message-commerce .str-chat__reaction-list::after {
    right: -26px;
    width: 26px;
    background-position: -33px -33px
  }

  .str-chat__message .str-chat__reaction-list::before, .str-chat__message-commerce .str-chat__reaction-list::before {
    left: -13px;
    width: 13px;
    background-position: 0 -33px
  }

  .str-chat__message .str-chat__reaction-list--reverse, .str-chat__message-commerce .str-chat__reaction-list--reverse {
    right: initial;
    left: 15px;
    position: absolute
  }

  .str-chat__message .str-chat__reaction-list--reverse ul, .str-chat__message-commerce .str-chat__reaction-list--reverse ul {
    margin: -1px -4px 0 -16px
  }

  .str-chat__message .str-chat__reaction-list--reverse::after, .str-chat__message-commerce .str-chat__reaction-list--reverse::after {
    right: -13px;
    width: 13px;
    background-position: -46px 0
  }

  .str-chat__message .str-chat__reaction-list--reverse::before, .str-chat__message-commerce .str-chat__reaction-list--reverse::before {
    left: -26px;
    width: 26px;
    background-position: 0 0
  }

  .str-chat__message .str-chat__reaction-list li, .str-chat__message-commerce .str-chat__reaction-list li {
    display: flex;
    align-items: center
  }

  .str-chat__message .str-chat__reaction-list li button, .str-chat__message-commerce .str-chat__reaction-list li button {
    padding: 0
  }

  .str-chat__message .str-chat__reaction-list--counter, .str-chat__message-commerce .str-chat__reaction-list--counter {
    color: var(--button-background);
    font-size: var(--sm-font)
  }

  .str-chat__message--me .str-chat__message-commerce-inner > .str-chat__reaction-list, .str-chat__message--right .str-chat__message-commerce-inner > .str-chat__reaction-list, .str-chat__message-commerce--me .str-chat__message-commerce-inner > .str-chat__reaction-list, .str-chat__message-commerce--right .str-chat__message-commerce-inner > .str-chat__reaction-list {
    left: 46px
  }

  .str-chat__message--me .str-chat__reaction-list, .str-chat__message--right .str-chat__reaction-list, .str-chat__message-commerce--me .str-chat__reaction-list, .str-chat__message-commerce--right .str-chat__reaction-list {
    right: initial;
    left: 16px
  }

  .str-chat__message--me .str-chat__reaction-list ul, .str-chat__message--right .str-chat__reaction-list ul, .str-chat__message-commerce--me .str-chat__reaction-list ul, .str-chat__message-commerce--right .str-chat__reaction-list ul {
    margin: -1px 0 0 -16px
  }

  .str-chat__message--me .str-chat__reaction-list::after, .str-chat__message--right .str-chat__reaction-list::after, .str-chat__message-commerce--me .str-chat__reaction-list::after, .str-chat__message-commerce--right .str-chat__reaction-list::after {
    right: -13px;
    width: 13px;
    background-position: -46px 0
  }

  .str-chat__message--me .str-chat__reaction-list::before, .str-chat__message--right .str-chat__reaction-list::before, .str-chat__message-commerce--me .str-chat__reaction-list::before, .str-chat__message-commerce--right .str-chat__reaction-list::before {
    left: -26px;
    width: 26px;
    background-position: 0 0
  }

  .str-chat__message--me .str-chat__reaction-list--reverse, .str-chat__message--right .str-chat__reaction-list--reverse, .str-chat__message-commerce--me .str-chat__reaction-list--reverse, .str-chat__message-commerce--right .str-chat__reaction-list--reverse {
    right: 15px;
    left: initial
  }

  .str-chat__message--me .str-chat__reaction-list--reverse ul, .str-chat__message--right .str-chat__reaction-list--reverse ul, .str-chat__message-commerce--me .str-chat__reaction-list--reverse ul, .str-chat__message-commerce--right .str-chat__reaction-list--reverse ul {
    margin: -1px -16px 0 0
  }

  .str-chat__message--me .str-chat__reaction-list--reverse::after, .str-chat__message--right .str-chat__reaction-list--reverse::after, .str-chat__message-commerce--me .str-chat__reaction-list--reverse::after, .str-chat__message-commerce--right .str-chat__reaction-list--reverse::after {
    right: -26px;
    width: 26px;
    background-position: -33px -33px
  }

  .str-chat__message--me .str-chat__reaction-list--reverse::before, .str-chat__message--right .str-chat__reaction-list--reverse::before, .str-chat__message-commerce--me .str-chat__reaction-list--reverse::before, .str-chat__message-commerce--right .str-chat__reaction-list--reverse::before {
    left: -13px;
    width: 13px;
    background-position: 0 -33px
  }

  .str-chat__message-commerce-inner > .str-chat__reaction-list {
    left: unset;
    right: 46px
  }

  .str-chat__message-commerce--right .str-chat__message-commerce-inner > .str-chat__reaction-list {
    right: unset;
    left: 46px
  }

  .str-chat__message-reactions-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex
  }

  .str-chat__message-reactions-list-item {
    font-size: var(--xl-font);
    margin: 0 var(--xxs-m);
    position: relative;
    line-height: 0
  }

  .str-chat__message-reactions-list-item button {
    padding: 0
  }

  .str-chat__message-reactions-list-item span[role=img] {
    position: relative;
    display: block;
    top: -2px;
    transition: transform 100ms ease
  }

  .str-chat__message-reactions-list-item span[role=img]:hover {
    transform: scale(1.4)
  }

  .str-chat__message-reactions-list-item__count {
    position: absolute;
    top: 28px;
    font-size: var(--xs-font);
    color: var(--white);
    font-weight: var(--font-weight-bold);
    left: 6px
  }

  .str-chat__message-reactions-list-item .latest-user {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -24px;
    left: 0
  }

  .str-chat__message-reactions-list-item .latest-user-tooltip {
    display: none;
    text-align: center;
    position: absolute;
    bottom: calc(100% + 5px);
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--black80);
    border-radius: var(--border-radius-sm);
    background-image: linear-gradient(-180deg, transparent, var(--black50));
    max-width: 237px;
    padding: var(--xxs-p) var(--xs-p);
    font-size: var(--sm-font);
    color: var(--white)
  }

  .str-chat__message-reactions-list-item .latest-user-tooltip::after {
    content: "";
    position: absolute;
    top: calc(100% - 4px);
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
    width: 7px;
    height: 7px;
    background-color: var(--dark-grey)
  }

  .str-chat__message-reactions-list-item .latest-user-not-found {
    border: 1.5px solid var(--white);
    border-radius: var(--border-radius-round);
    background-color: var(--secondary-color);
    width: inherit;
    height: inherit
  }

  .str-chat__message-reactions-list-item .latest-user img {
    border: 1.5px solid var(--white);
    border-radius: var(--border-radius-round);
    object-fit: cover;
    width: inherit;
    height: inherit
  }

  .str-chat__message-reactions-list-item .latest-user:hover .latest-user-tooltip {
    display: block
  }

  .str-chat__reaction-selector {
    z-index: 999;
    height: 60px;
    position: absolute;
    width: initial;
    background: var(--black);
    background-image: linear-gradient(-180deg, transparent, var(--border));
    border: 1px solid var(--white5);
    box-shadow: 0 3px 1px 0 var(--border), 0 11px 8px 0 var(--border);
    border-radius: var(--border-radius-round);
    display: flex;
    align-items: center
  }

  .str-chat__reaction-selector ul {
    position: relative;
    z-index: 1000;
    margin: 0 var(--sm-m)
  }

  .str-chat__reaction-selector-tooltip {
    position: absolute;
    bottom: calc(100% + 15px);
    background: var(--black);
    border-radius: var(--border-radius-sm);
    min-width: 85px;
    min-height: 24px;
    max-width: 100%;
    padding: var(--xxs-p) var(--xs-p);
    font-size: var(--sm-font);
    color: var(--white);
    text-align: center
  }

  .str-chat__reaction-selector-tooltip .arrow {
    position: absolute;
    top: calc(100% - 4px);
    left: 50%;
    transform: translate(-50%, 0) rotate(45deg);
    width: 7px;
    height: 7px;
    background-color: var(--black)
  }

  .str-chat__reaction-selector .emoji-mart-emoji:hover {
    transition: .1s;
    transform: scale(1.2);
    cursor: pointer
  }

  .str-chat__message .str-chat__reaction-selector, .str-chat__message-team .str-chat__reaction-selector, .str-chat__message-simple .str-chat__reaction-selector, .str-chat__message-commerce .str-chat__reaction-selector, .str-chat__message-livestream .str-chat__reaction-selector {
    top: -65px;
    left: 0
  }

  .str-chat__message-commerce--right .str-chat__reaction-selector {
    left: unset;
    right: 0
  }

  .str-chat__message-livestream .str-chat__reaction-selector {
    left: unset;
    top: -70px;
    right: 0
  }

  .str-chat__message-team .str-chat__reaction-selector {
    left: unset;
    top: -60px;
    right: 0
  }

  .str-chat__message-simple .str-chat__reaction-selector {
    right: unset;
    left: 0
  }

  .str-chat__message-simple .str-chat__reaction-selector--reverse {
    right: 0;
    left: unset
  }

  .str-chat__message-simple--me .str-chat__reaction-selector {
    left: unset;
    right: 0
  }

  .str-chat__message-simple--me .str-chat__reaction-selector--reverse {
    right: unset;
    left: 0
  }

  .str-chat__send-button {
    margin-left: var(--xs-m);
    border: 0;
    background: 0;
    outline: 0
  }

  @media screen and (min-width: 768px) {
    .str-chat__send-button {
    }
  }

  .str-chat__simple-reactions-list {
    list-style-type: none;
    padding: var(--xxs-p) var(--xxs-p) calc(var(--xxs-p) / 2) var(--xxs-p);
    display: inline-flex;
    margin: var(--xs-m) 0 0 0;
    border: 1px solid var(--border);
    border-radius: var(--border-radius-sm);
    line-height: 1;
    position: relative
  }

  .str-chat__simple-reactions-list-tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--overlay-dark);
    border-radius: var(--border-radius-sm);
    background-image: linear-gradient(-180deg, transparent, var(--black50));
    min-height: 24px;
    width: auto;
    max-width: 275px;
    padding: var(--xxs-p) var(--xs-p);
    font-size: var(--sm-font);
    color: var(--white);
    text-align: center
  }

  .str-chat__simple-reactions-list-tooltip > .arrow {
    position: absolute;
    top: calc(100%);
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--overlay-dark)
  }

  .str-chat__simple-reactions-list-item {
    margin: 0;
    cursor: pointer
  }

  .str-chat__simple-reactions-list-item > span {
    line-height: 1
  }

  .str-chat__simple-reactions-list-item .emoji-mart-emoji:hover {
    transition: transform .2s ease-in-out;
    transform: scale(1.2)
  }

  .str-chat__simple-reactions-list-item--last-number {
    font-size: var(--xs-font);
    display: flex;
    align-items: center;
    color: #000
  }

  .dark.str-chat .str-chat__simple-reactions-list {
    border: 1px solid var(--white10);
    border-radius: var(--border-radius-sm)
  }

  .dark.str-chat .str-chat__simple-reactions-list-item--last-number {
    color: var(--white)
  }

  .str-chat__small-message-input {
    display: flex;
    flex-wrap: wrap;
    margin: var(--xs-m);
    position: relative;
    z-index: 1000
  }

  .str-chat__small-message-input .rfu-file-previewer {
    flex: 1 1 100%
  }

  .str-chat__small-message-input .rfu-image-previewer {
    flex: 1 1 100%
  }

  .str-chat__small-message-input__wrapper {
    position: relative;
    z-index: 0;
    width: 100%
  }

  .str-chat__small-message-input-emojiselect {
    bottom: 10px;
    right: 6px
  }

  .str-chat__small-message-input .rfu-file-upload-button {
    bottom: 9px;
    right: 26px
  }

  .str-chat__small-message-input--textarea-wrapper {
    flex-wrap: wrap;
    flex: 1 0;
    position: relative
  }

  .str-chat__small-message-input-emojiselect, .str-chat__small-message-input .rfu-file-upload-button {
    position: absolute;
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: 44px 44px;
    fill: var(--grey)
  }

  .str-chat__small-message-input-emojiselect:hover, .str-chat__small-message-input .rfu-file-upload-button:hover {
    fill: var(--black)
  }

  .str-chat__small-message-input-emojipicker {
    position: absolute;
    bottom: 100%;
    right: 0;
    transform: scale(0.8);
    transform-origin: 100% 100%
  }

  .str-chat__small-message-input--send-button {
    background: none;
    border: none;
    cursor: pointer;
    flex: 0 1;
    outline: 0
  }

  .str-chat__small-message-input--send-button:hover {
    opacity: .69
  }

  @media screen and (min-width: 768px) {
    .str-chat__small-message-input--send-button {
    }
  }

  .str-chat__small-message-input textarea {
    background: var(--grey-whisper);
    color: var(--black);
    min-height: 36px;
    font-size: var(--sm-font);
    padding: 10px 44px 8px 8px
  }

  .str-chat__small-message-input textarea:focus {
    height: 36px
  }

  .str-chat__small-message-input .str-chat__emojisearch {
    bottom: 100%
  }

  .str-chat__small-message-input .str-chat__user-item {
    font-size: var(--md-font)
  }

  .str-chat__small-message-input .rfu-file-upload-button {
    position: absolute;
    cursor: pointer;
    right: 28px
  }

  .str-chat__small-message-input .rfu-dropzone .rfu-dropzone__notifier {
    z-index: 1000
  }

  .dark.str-chat .str-chat__small-message-input textarea {
    background: var(--white5);
    border: 1px solid var(--black20);
    border-radius: var(--border-radius-sm);
    color: var(--white)
  }

  .dark.str-chat .str-chat__small-message-input .rfu-file-upload-button svg, .dark.str-chat .str-chat__small-message-input .str-chat__small-message-input-emojiselect svg {
    fill: var(--white)
  }

  .str-chat__thread {
    background: var(--grey-whisper);
    flex: 1 0 300px;
    min-width: 300px;
    max-width: 300px;
    overflow-y: hidden;
    font-family: var(--second-font);
    overflow: hidden;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 0
  }

  .str-chat__thread--full {
    max-width: 100%
  }

  .str-chat__thread-header {
    position: relative;
    width: 100%;
    background: var(--grey-whisper);
    box-shadow: 0 1px 1px 0 var(--border);
    height: 70px;
    min-height: 70px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--sm-p)
  }

  .str-chat__thread-header-details {
    font-size: var(--md-font)
  }

  .str-chat__thread-header-details small {
    display: block;
    font-size: var(--sm-font)
  }

  .str-chat__thread-start {
    border-radius: var(--border-radius-sm);
    margin: var(--xs-m) var(--xs-m) 0 var(--xs-m);
    padding: var(--xs-p);
    background: var(--grey-whisper);
    text-align: center;
    font-size: var(--sm-font)
  }

  .str-chat__thread-list {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding-top: var(--sm-p)
  }

  .str-chat__thread-list .str-chat__list {
    padding: 0
  }

  .str-chat__thread-list .str-chat__message:first-of-type .str-chat__message-inner {
    margin-left: unset;
    margin-right: unset
  }

  .str-chat__thread-list .str-chat__message-attachment.str-chat__message-attachment--file {
    border-radius: var(--border-radius-md);
    border-bottom: 1px solid var(--grey-whisper)
  }

  .str-chat__thread-list .quoted-message {
    display: flex;
    align-items: flex-end;
    margin-bottom: var(--xxs-m)
  }

  .str-chat__thread-list .quoted-message-inner {
    display: flex;
    text-align: start;
    align-items: flex-end;
    background: var(--grey-whisper);
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) 0;
    max-width: 408px;
    padding: var(--xxs-p) var(--xs-p)
  }

  .str-chat__thread-list .quoted-message-inner .str-chat__message-attachment.str-chat__message-attachment--file {
    display: none
  }

  .str-chat__thread-list .quoted-message-inner .str-chat__message-attachment-card.str-chat__message-attachment-card--image {
    border-radius: unset
  }

  .str-chat__thread-list .quoted-message-inner .str-chat__message-attachment.str-chat__message-attachment--card {
    border: none;
    border-radius: var(--border-radius-md)
  }

  .str-chat__thread-list .quoted-message-inner .str-chat__message-attachment--image:first-of-type {
    max-height: 48px;
    max-width: 48px
  }

  .str-chat__thread-list .quoted-message-inner .str-chat__message-attachment img {
    border-radius: var(--border-radius-md)
  }

  .str-chat__thread-list .quoted-message-inner :nth-child(2) {
    margin-left: var(--xs-m)
  }

  .str-chat__thread-list .quoted-message.mine .quoted-message-inner {
    background: var(--white)
  }

  .messaging.str-chat .str-chat__thread {
    margin-right: var(--xs-m);
    margin-top: var(--sm-m);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    overflow: hidden;
    background: var(--white);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 0
  }

  .messaging.str-chat .str-chat__thread.str-chat__thread--full {
    margin: 0
  }

  .messaging.str-chat .str-chat__thread .str-chat__gallery {
    justify-content: flex-end;
    border-radius: 0
  }

  .messaging.str-chat .str-chat__thread .str-chat__gallery-image, .messaging.str-chat .str-chat__thread .str-chat__gallery-placeholder {
    width: 100px;
    height: 100px
  }

  .messaging.str-chat .str-chat__thread-list {
    padding: var(--sm-p) var(--sm-p) 0 var(--sm-p)
  }

  .messaging.str-chat .str-chat__thread-list > .str-chat__list {
    background: transparent;
    padding: 0
  }

  .messaging.str-chat .str-chat__thread-list > .str-chat__list .str-chat__list--thread {
    padding: 0
  }

  .messaging.str-chat .str-chat__thread-header {
    border: none;
    background: var(--white);
    box-shadow: 0 2px 9px 0 var(--border), 0 1px 0 0 var(--border)
  }

  .messaging.str-chat .str-chat__thread-start {
    margin-top: var(--md-m)
  }

  @media screen and (max-width: 960px) {
    .messaging.str-chat .str-chat__thread {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      background: var(--white);
      z-index: 1000;
      margin: 0;
      width: 100vw;
      max-width: 100%
    }
  }

  .messaging.str-chat.dark .str-chat__thread {
    background: var(--white5)
  }

  .messaging.str-chat.dark .str-chat__thread-header {
    background: var(--black80);
    box-shadow: 0 7px 9px 0 var(--black5), 0 1px 0 0 var(--black5);
    color: var(--white)
  }

  .messaging.str-chat.dark .str-chat__thread-start {
    color: var(--white)
  }

  @media screen and (max-width: 960px) {
    .messaging.str-chat.dark .str-chat__thread {
      background: var(--dark-grey)
    }
  }

  .team.str-chat .str-chat__thread {
    background: var(--white)
  }

  @media screen and (max-width: 960px) {
    .team.str-chat .str-chat__thread {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      background: var(--white);
      z-index: 1000;
      margin: 0;
      width: 100vw;
      max-width: 100%
    }
  }

  .team.str-chat .str-chat__thread-header {
    height: 80px
  }

  .team.str-chat.dark .str-chat__thread {
    background: var(--dt-bg-team)
  }

  .livestream.str-chat .str-chat__thread, .str-chat .str-chat__thread {
    background: transparent
  }

  .livestream.str-chat .str-chat__thread-header, .str-chat .str-chat__thread-header {
    background: var(--white30)
  }

  .livestream.str-chat .str-chat__list--thread, .str-chat .str-chat__list--thread {
    padding: 0 var(--xs-p)
  }

  .livestream.str-chat.dark .str-chat__thread, .str-chat.dark .str-chat__thread {
    background: var(--dark-grey)
  }

  .livestream.str-chat.dark .str-chat__thread-header, .str-chat.dark .str-chat__thread-header {
    background: var(--white5);
    box-shadow: 0 1px 1px 0 var(--black30);
    color: var(--white)
  }

  .livestream.str-chat.dark .str-chat__thread-start, .str-chat.dark .str-chat__thread-start {
    background: var(--black5);
    border-radius: var(--border-radius-sm);
    color: var(--white)
  }

  .str-chat__typing-indicator {
    display: flex;
    visibility: hidden;
    align-items: center
  }

  .str-chat__typing-indicator--typing {
    visibility: visible
  }

  .str-chat__typing-indicator__avatars {
    display: flex
  }

  .str-chat__typing-indicator__avatars .str-chat__avatar {
    margin-right: calc(var(--xs-m) * -1)
  }

  .str-chat__typing-indicator__avatars .str-chat__avatar:last-of-type {
    margin-right: var(--xs-m)
  }

  .str-chat__typing-indicator__dots {
    position: relative;
    background: var(--white);
    border: 1px solid var(--black10);
    padding: var(--xxs-p) var(--xs-m);
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 2px
  }

  .str-chat__typing-indicator__dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: var(--border-radius-round);
    margin-right: var(--xxs-m);
    background: var(--primary-color);
    animation: wave 1.1s linear infinite
  }

  .str-chat__typing-indicator__dot:nth-child(2) {
    animation-delay: -0.9s;
    opacity: .5
  }

  .str-chat__typing-indicator__dot:nth-child(3) {
    animation-delay: -0.8s;
    opacity: .2
  }

  .dark.str-chat .str-chat__typing-indicator__avatars .str-chat__avatar {
    border-color: var(--dark-grey)
  }

  .dark.str-chat .str-chat__typing-indicator__dots {
    background: var(--white5)
  }

  @keyframes wave {
    0%, 60%, 100% {
      transform: initial
    }
    30% {
      transform: translateY(-8px)
    }
  }

  .str-chat__tooltip {
    position: absolute;
    right: 0;
    bottom: calc(100% + 10px);
    display: flex;
    background: var(--black);
    border-radius: var(--border-radius-sm);
    padding: var(--xxs-p) var(--xs-p);
    color: var(--white);
    font-size: var(--xs-font);
    max-width: 300px
  }

  .str-chat__tooltip button {
    outline: none;
    outline: 0;
    background: none;
    color: var(--primary-color);
    font-size: var(--xs-font);
    font-family: var(--second-font);
    border: none
  }

  .str-chat__tooltip a {
    color: var(--primary-color);
    text-decoration: none
  }

  .str-chat__tooltip::after {
    content: "";
    position: absolute;
    bottom: -2px;
    right: 5px;
    width: 5px;
    height: 5px;
    background: var(--black);
    transform: rotate(45deg)
  }

  .str-chat__virtual-list {
    font-size: 0
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper {
    padding: 1px var(--xl-p);
    width: 100%
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple {
    padding-bottom: var(--sm-p)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first {
    padding-bottom: 0;
    padding-left: var(--xl-p)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first .str-chat__avatar, .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first .str-chat__message-data.str-chat__message-simple-data {
    display: none
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first.str-chat__message-simple--me {
    padding-right: var(--xl-p);
    padding-left: 0
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first.str-chat__message-simple--me.str-chat__virtual-message__wrapper--end {
    padding-right: 0
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first.str-chat__virtual-message__wrapper--end {
    padding-bottom: var(--xs-p)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--first.str-chat__virtual-message__wrapper--end .str-chat__message-data.str-chat__message-simple-data {
    display: block;
    position: relative;
    width: 100%
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--group {
    align-items: center;
    padding-bottom: 0;
    padding-left: var(--xl-p)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--group.str-chat__message-simple--me {
    padding-right: var(--xl-p);
    padding-left: 0
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--group.str-chat__message-simple--me.str-chat__virtual-message__wrapper--end {
    padding-right: 0
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--group .str-chat__message-data.str-chat__message-simple-data {
    display: block;
    position: relative;
    width: 100%
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--end {
    padding-bottom: var(--xs-p);
    padding-left: 0
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--end .str-chat__avatar, .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple.str-chat__virtual-message__wrapper--end .str-chat__message-data.str-chat__message-simple-data {
    display: block
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message {
    display: flex;
    align-items: flex-end;
    margin-bottom: var(--xxs-m)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message-inner {
    display: flex;
    text-align: start;
    align-items: flex-end;
    background: var(--grey-whisper);
    border-radius: var(--border-radius-md) var(--border-radius-md) var(--border-radius-md) 0;
    max-width: 408px;
    padding: var(--xxs-p) var(--xs-p)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message-inner .str-chat__message-attachment-card.str-chat__message-attachment-card--image {
    border: none;
    border-radius: var(--border-radius-md)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message-inner .str-chat__message-attachment--image:first-of-type {
    max-height: 48px;
    max-width: 48px;
    border-radius: var(--border-radius-md)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message-inner .str-chat__message-attachment img {
    border-radius: var(--border-radius-md)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message-inner .str-chat__message-attachment--file:first-of-type {
    background: var(--white);
    border-radius: var(--border-radius-md);
    border-bottom: 1px solid var(--grey-whisper);
    min-width: 33%
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message-inner :nth-child(2) {
    margin-left: var(--xs-m)
  }

  .str-chat__virtual-list .str-chat__virtual-list-message-wrapper .str-chat__message-simple .quoted-message.mine .quoted-message-inner {
    background: var(--white-snow)
  }

  .str-chat__virtual-list .str-chat__message.str-chat__message--deleted {
    align-items: initial;
    margin: 0
  }

  .str-chat__virtual-list .str-chat__typing-indicator {
    padding: 5px 40px
  }

  .giphy-preview-message {
    background: var(--white-snow);
    border-top: 2px solid var(--border)
  }

  .str-chat__virtual-message__wrapper {
    display: flex;
    padding: 10px 40px;
    flex-direction: row;
    position: relative
  }

  .str-chat__virtual-message__wrapper:hover {
    background: #f8f8ff
  }

  .str-chat__virtual-message__wrapper > .str-chat__avatar {
    margin: 0
  }

  .str-chat__virtual-message__wrapper > .str-chat__virtual-message__content {
    padding-left: 12px
  }

  .str-chat__virtual-message__wrapper .str-chat__avatar--rounded {
    border-radius: var(--border-radius)
  }

  .str-chat__virtual-message__wrapper .str-chat__avatar-fallback {
    background-color: #789
  }

  .str-chat__virtual-message__meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%
  }

  .str-chat__virtual-message__data {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    min-width: 70px;
    margin-left: auto
  }

  .str-chat__virtual-message__author {
    color: var(--primary-color);
    font-size: 1rem
  }

  .str-chat__virtual-message__date {
    font-size: .7rem;
    opacity: .5;
    padding-left: 8px;
    display: block;
    margin-left: auto
  }

  .str-chat__virtual-message__actions {
    position: relative;
    cursor: pointer
  }

  .str-chat__virtual-message__actions svg {
    fill: var(--black);
    opacity: .5
  }

  .str-chat__virtual-message__actions:hover svg {
    opacity: 1
  }

  .str-chat__virtual-message__actions .str-chat__message-actions-box {
    bottom: 10px;
    left: unset;
    right: 100%;
    border-radius: var(--border-radius) var(--border-radius) calc(var(--border-radius-sm) / 2) var(--border-radius)
  }

  .str-chat__virtual-message__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start
  }

  .str-chat__virtual-message__content .str-chat__message--deleted-inner {
    padding: 8px 0
  }

  .str-chat__virtual-message__text {
    padding-top: 5px;
    font-size: .9rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    word-break: break-word
  }

  .str-chat__virtual-message__text p {
    padding-right: 16px
  }

  .str-chat__virtual-message__text a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: var(--font-weight-bold)
  }

  .str-chat__virtual-message__wrapper--group {
    padding-top: 0
  }

  .str-chat__virtual-message__wrapper--group > .str-chat__avatar {
    display: none
  }

  .str-chat__virtual-message__wrapper--group .str-chat__virtual-message__author {
    display: none
  }

  .str-chat__virtual-message__wrapper--group .str-chat__virtual-message__content {
    padding-left: 50px
  }

  .str-chat__virtual-message__wrapper--group .str-chat__virtual-message__content .str-chat__gallery {
    width: 100%;
    margin: 0;
    justify-content: unset
  }

  .dark .str-chat__virtual-message__wrapper:hover {
    background: var(--black20)
  }

  .dark .str-chat__virtual-message__text {
    color: #f8f8ff
  }

  .dark .str-chat__virtual-message__date {
    color: var(--white)
  }
`;

export default StylesChat;
