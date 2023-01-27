// import { graphql } from "gatsby"

// export const bigQuery = graphql`
//   query {
//     wpPage(uri: {eq: "/home-page/"}) {
//     id
//     link
//     template {
//       ... on WpDefaultTemplate {
//         siteContent {
//           contentBlocks {
//             ... on WpDefaultTemplate_Sitecontent_ContentBlocks_HeroBanner {
//               heroType
//               backgroundColor
//               fieldGroupName
//               statement
//               backgroundImage {
//                 gatsbyImage(cropFocus: CENTER, width: 1600)
//                 altText
//               }
//               backgroundVideo {
//                 link
//                 altText
//               }
//               image {
//                 altText
//                 gatsbyImage
//               }
//               links {
//                 fieldGroupName
//                 link1 {
//                   target
//                   title
//                   url
//                 }
//                 link2 {
//                   target
//                   title
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   }
// `