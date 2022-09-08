import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
  }
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'icons';
    src: url(./fonts/icons.woff) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icons' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-minus:before {
    content: "\e900";
  }
  .icon-star:before {
    content: "\e901";
  }
  .icon-marker:before {
    content: "\e902";
  }
  .icon-plus:before {
    content: "\e903";
  }
  .icon-account:before {
    content: "\e904";
  }
  .icon-list:before {
    content: "\e905";
  }
`
export default GlobalStyle
