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

button {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  background-color: rgba(42, 54, 125, 0.8);
  margin: 1rem 0;
  cursor: pointer;
}

button:hover {
  background-color: rgba(42, 54, 125, 1);
  text-decoration: underline;
}


`
export default GlobalStyles
