import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`
p {
    font-size: 1rem;
    margin: 0;
}
h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
}
a {
    color: var(--black)
}
`
