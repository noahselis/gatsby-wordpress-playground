import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

const HeroGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);

  .gatsby-image-wrapper {
    object-fit: cover;
    width: 100%;

  }

  .hero {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  h1 {
    text-align: center;
    grid-column 5 / 9;
    grid-row-end: 6;
    z-index: 1;
    color: var(--white);
    border: 3px solid black;
  }  
  button {
    text-align: center;
    grid-column 6 / 8;
    grid-row-end: 7;
    z-index: 1;
    color: var(--white);
    border: 3px solid black;
    height: 50px;
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
      <h1>Home Page!</h1>
      <button style={{}}>{hero.heroText}</button>
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
