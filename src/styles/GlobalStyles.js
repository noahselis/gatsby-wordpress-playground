import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
    --white: #FFFDFA;
    --grey: #efefef;
    --black: #2E2E2E;
    --red: #FF4949;
    max-width: 1500px;
    margin: 0 auto;
}

html {
    font-size: 16px;
}

*,
:after,
:before {
  box-sizing: border-box;
}


`
export default GlobalStyles
