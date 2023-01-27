import React from "react"
import { graphql } from "gatsby"
import HeroBanner from "../components/HeroComponents/HeroBanner"
import BasicContent from "../components/BasicContent"
import LogoGrid from "../components/LogoGrid"

export default function HomePage({ data }) {
  // console.log(data)
  const contentBlocks = data?.wpPage?.template?.siteContent?.contentBlocks
  console.log({ contentBlocks })
  return (
    <>
      {contentBlocks.map((contentBlock, index) => {
        const contentBlockName = contentBlock.__typename
        console.log(contentBlockName)

        switch (contentBlockName) {
          case "WpDefaultTemplate_Sitecontent_ContentBlocks_HeroBanner":
            return (
              <HeroBanner key={contentBlockName} contentBlock={contentBlock} />
            )

          case "WpDefaultTemplate_Sitecontent_ContentBlocks_BasicContent":
            return (
              <BasicContent
                key={contentBlockName}
                contentBlock={contentBlock}
              />
            )

          case "WpDefaultTemplate_Sitecontent_ContentBlocks_FeaturedLogos":
            return (
              <LogoGrid key={contentBlockName} contentBlock={contentBlock} />
            )

          default:
            ;<h1>you done busted it</h1>
        }
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
            }
          }
        }
      }
    }
  }
`
