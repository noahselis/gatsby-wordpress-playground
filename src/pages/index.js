import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import NoPic from "../components/Paragraphs/NoPic"
import PicLeft from "../components/Paragraphs/PicLeft"
import PicRight from "../components/Paragraphs/PicRight"

const HeroGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);

  .hero {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 0;

    img {
      width: 100%;
      object-fit: cover;
      max-height: 100vh;
    }
  }

  #hero-txt {
    display: grid;
    place-content: center;
    grid-column: 1 / -1;
    grid-row-end: 1 / -1;
    grid-area: 1 / 5 / -1 / 9;
    z-index: 1;

    p {
      font-size: clamp(1rem, 3vw, 1.5rem);
      color: white;
      text-align: center;
      grid-row-end: 3;
      color: var(--white);
      height: 50px;
    }
  }
`

export default function HomePage({ data }) {
  // console.log(data)
  const hero = data.wpPage.homePage.herosection
  const sections = data.wpPage.homePage.paragraphSections
  return (
    <>
      <HeroGrid>
        <div className="hero">
          <img src={hero.image.sourceUrl} alt={hero.image.altText} />
        </div>
        <span id="hero-txt">
          <p style={{ color: hero.textColor }}>{hero.heroText}</p>
        </span>
      </HeroGrid>
      <div>
        {sections?.map((section, index) => {
          const typeName = section.__typename

          switch (typeName) {
            case "WpPage_Homepage_ParagraphSections_ParagraphNoPic":
              return <NoPic key={index} {...section} />

            case "WpPage_Homepage_ParagraphSections_ParagraphPicLeft":
              return <PicLeft key={index} {...section} />

            case "WpPage_Homepage_ParagraphSections_ParagraphPicRight":
                return <PicRight key={index} {...section} />
          }
        })}
      </div>
    </>
  )
}

export const homeQuery = graphql`
  query {
    wpPage(uri: { eq: "/home-page/" }) {
      homePage {
        herosection {
          textColor
          heroText
          url
          image {
            altText
            sourceUrl
          }
        }
        paragraphSections {
          __typename
          ... on WpPage_Homepage_ParagraphSections_ParagraphNoPic {
            paragraphNoPic
          }
          ... on WpPage_Homepage_ParagraphSections_ParagraphPicLeft {
            paragraph
            picLeft {
              altText
              sourceUrl
            }
          }
          ... on WpPage_Homepage_ParagraphSections_ParagraphPicRight {
            paragraph
            picRight {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`
