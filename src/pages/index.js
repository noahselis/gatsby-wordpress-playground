import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

const HeroGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .hero {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  #hero-txt {
    display: grid;
    align-items: flex-end;
    justify-content: center;
    grid-column: 5 / 9;
    grid-row-end: 2;
    z-index: 1;

    p {
      font-size: clamp(1rem, 5vw, 2rem);
      color: white;
      text-align: center;
      grid-row-end: 3;
      color: var(--white);
      height: 50px;
    }
  }
`

export default function HomePage({ data }) {
  const hero = data.wpPage.homePage
  console.log({ hero })
  return (
    <HeroGrid>
      <div className="hero">
        <img src={hero.heroImage.sourceUrl} alt={hero.heroImage.altText} />
      </div>
      <span id="hero-txt">
        <p style={{}}>{hero.heroText}</p>
      </span>
    </HeroGrid>
  )
}

export const homeQuery = graphql`
  query {
    wpPage(uri: { eq: "/home-page/" }) {
      homePage {
        __typename
        heroImage {
          altText
          sourceUrl
        }
        heroText
      }
    }
  }
`
