import React from "react"
import { graphql } from "gatsby"
import Components from "../components"

export default function HomePage({ data }) {
  // console.log("🚀🚀🚀", data, "🚀🚀🚀")
  const contentBlocks = data?.wpPage?.template?.siteContent?.contentBlocks
  const lastThreePosts = data?.allWpPost
  // console.log({ lastThreePosts })
  console.log({ contentBlocks })
  return (
    <>
      {contentBlocks.map(contentBlock => {
        const contentBlockName = contentBlock.__typename?.split("_").pop()
        if (
          contentBlockName === undefined
        ) return
        const Component = Components[contentBlockName]
        return <Component key={contentBlockName} lastThreePosts={lastThreePosts} contentBlock={contentBlock} />
      })}
    </>
  )
}

export const bigQuery = graphql`
  query {
    wpPage(uri: { eq: "/home-page/" }) {
      id
      link
      template {
        ... on WpDefaultTemplate {
          siteContent {
            contentBlocks {
              ... on WpDefaultTemplate_Sitecontent_ContentBlocks_HeroBanner {
                __typename
                heroType
                backgroundColor
                fieldGroupName
                statement
                backgroundVideo
                backgroundImage {
                  gatsbyImage(cropFocus: CENTER, width: 1600)
                  altText
                }
                image {
                  altText
                  gatsbyImage(width: 300, placeholder: BLURRED)
                }
                links {
                  fieldGroupName
                  link1 {
                    target
                    title
                    url
                  }
                  link2 {
                    target
                    title
                    url
                  }
                }
              }
              ... on WpDefaultTemplate_Sitecontent_ContentBlocks_BasicContent {
                __typename
                fieldGroupName
                width
                content
              }
              ... on WpDefaultTemplate_Sitecontent_ContentBlocks_FeaturedLogos {
                __typename
                title
                subtitle
                logos {
                  logo {
                    altText
                    gatsbyImage(width: 250)
                  }
                }
                secondaryLogos {
                  logo {
                    altText
                    gatsbyImage(width: 250)
                  }
                }
              }
              ... on WpDefaultTemplate_Sitecontent_ContentBlocks_RecentNews {
                __typename
                title
              }
            }
          }
        }
      }
    }
    allWpPost(limit: 3) {
      nodes {
        categories {
          nodes {
            name
          }
        }
        id
        contentType {
          node {
            id
            label
          }
        }
        author {
          node {
            name
          }
        }
        content
      }
    }
  }
`
