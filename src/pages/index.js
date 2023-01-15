import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

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
  const hero = data.wpPage.homePage.herosection
  console.log({ hero })
  return (
    <HeroGrid>
      <div className="hero">
        <img src={hero.image.sourceUrl} alt={hero.image.altText} />
      </div>
      <span id="hero-txt">
        <p style={{color: hero.textColor}}>{hero.heroText}</p>
      </span>
    </HeroGrid>
  )
}

export const homeQuery = graphql`
  query {
    wpPage(uri: {eq: "/home-page/"}) {
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
    }
  }
  }
`
