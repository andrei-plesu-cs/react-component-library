import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{theme: any}>`
  body {
    font-family: ${props => props.theme.font.fontPrimary};
  }

  .all-components-wrapper {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default GlobalStyle;