// src/assets/styles/global-styles.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

const palette = {
  codeFont: '#eb5757',
  codeBackground: '#D7D7D5',
  paragraphBlackFont: '#37352F',
  tableBlackFont: '#37352F',
  border: '#D5D5D4',
  grayFont: '#787774',
  grayFill: '#91918e',
  grayBackground: '#f1f1ef',
  grayBlock: '#e3e2e0',
  brownFont: '#9f6b53',
  brownFill: '#bb846c',
  brownBackground: '#f4eeee',
  brownBlock: '#eee0da',
  orangeFont: '#d9730d',
  orangeFill: '#d7813a',
  orangeBackground: '#fbecdd',
  orangeBlock: '#fadec9',
  yellowFont: '#cb912f',
  yellowFill: '#cb9433',
  yellowBackground: '#fbf3db',
  yellowBlock: '#fdecc8',
  tealFont: '#448361',
  tealFill: '#6c9b7d',
  tealBackground: '#edf3ec',
  tealBlock: '#dbeddb',
  blueFont: '#337ea9',
  blueFill: '#5b97bd',
  blueBackground: '#e7f3f8',
  blueBlock: '#d3e5ef',
  purpleFont: '#9065b0',
  purpleFill: '#a782c3',
  purpleBackground: '#F1EEF3',
  purpleBlock: '#e8deee',
  pinkFont: '#c14c8a',
  pinkFill: '#cd749f',
  pinkBackground: '#F5ECF0',
  pinkBlock: '#e8deee',
  redFont: '#d44c47',
  redFill: '#e16f64',
  redBackground: '#fdebec',
  redBlock: '#ffe2dd',
};

export type Palette = { [K in keyof typeof palette]: K };

export const theme: DefaultTheme = {
  palette: palette as Palette,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  h1, h2, h3, h4, h5, h6, p, a, div, span, button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  .sans {
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji", "Noto Sans CJK KR";
  }
  .serif {
    font-family: Lyon-Text, Georgia, ui-serif, serif, "Twemoji", "Noto Color Emoji", "Noto Serif CJK KR";
  }
  .mono {
    font-family: iawriter-mono, Nitti, Menlo, Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK KR";
  }
  .code, code {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK KR";
  }

  body {
    margin: 2em auto;
    max-width: 900px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  a, a.visited {
    color: inherit;
    text-decoration: underline;
  }

  h1, h2, h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }

  h1 {
    font-size: 1.875rem;
    margin-top: 1.875rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1.25rem;
  }

  figure {
    margin: 1.25em 0;
  }

  figcaption {
    opacity: 0.5;
    font-size: 85%;
    margin-top: 0.5em;
  }

  mark {
    background-color: transparent;
  }

  hr {
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    visibility: visible;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.palette.border};
  }

  img {
    max-width: 100%;
  }

  table, th, td {
    border: 1px solid ${(props) => props.theme.palette.border};
    border-collapse: collapse;
  }

  table {
    border-left: none;
    border-right: none;
  }

  th, td {
    font-weight: normal;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    min-height: 1.5em;
    text-align: left;
  }

  th {
    color: ${(props) => props.theme.palette.tableBlackFont};
  }

  ol, ul {
    margin: 0;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }

  li > ol:first-child,
  li > ul:first-child {
    margin-block-start: 0.6em;
  }

  ul > li {
    list-style: disc;
  }

  ul {
    padding-inline-start: 1.7em;
  }

  ul > li {
    padding-left: 0.1em;
  }

  ol {
    padding-inline-start: 1.6em;
  }

  ol > li {
    padding-left: 0.2em;
  }

  time {
    opacity: 0.5;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 0.6em;
    vertical-align: middle;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  /* code class는 code를 감싸는 wrapper의 역할 */
  code {
    background: ${(props) => props.theme.palette.codeBackground};
    color: ${(props) => props.theme.palette.codeFont};
    border-radius: 3px;
    padding: 1.5em 1em;
    border-radius: 3px;
    font-size: 100%;
    tab-size: 2;
  }

  blockquote {
    font-size: 1.25em;
    margin: 1em 0;
    padding-left: 1em;
    border-left: 3px solid ${(props) => props.theme.palette.paragraphBlackFont};
  }
`;

export default GlobalStyle;
