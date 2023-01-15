import * as React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import 'normalize.css'
import Nav from "./Nav"
import Footer from "./Footer"

const SiteBorderStyles = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  padding: clamp(5px, 1vw, 25px);
  border: 1px solid black;
`

export default function Layout({children}) {
  return (
    <>
    <GlobalStyles />
    <SiteBorderStyles>
      <Nav />
        {children}
      <Footer />
    </SiteBorderStyles>
    </>
  )
}

// import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"

// export default function Layout({ isHomePage, children }){
//   const {
//     wp: {
//       generalSettings: { title },
//     },
//   } = useStaticQuery(graphql`
//     query LayoutQuery {
//       wp {
//         generalSettings {
//           title
//           description
//         }
//       }
//     }
//   `)

//   return (
//     <div className="global-wrapper" data-is-root-path={isHomePage}>
//       <header className="global-header">
//         {isHomePage ? (
//           <h1 className="main-heading">
//             <Link to="/">{parse(title)}</Link>
//           </h1>
//         ) : (
//           <Link className="header-link-home" to="/">
//             {title}
//           </Link>
//         )}
//       </header>

//       <main>{children}</main>

//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.com">Gatsby</a>
//         {` `}
//         And <a href="https://wordpress.org/">WordPress</a>
//       </footer>
//     </div>
//   )
// }
