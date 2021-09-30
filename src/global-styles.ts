import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{theme: any}>`
  body {
    font-family: ${props => props.theme.font.fontPrimary};
  }
`

export default GlobalStyle;