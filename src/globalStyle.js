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
`
export default GlobalStyle
