import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { useState } from "react"

const FeaturedLogosStyles = styled.section`
  .headerContent {
    display: grid;
    place-content: center;
    text-align: center;

    p {
      margin: 0.5rem 0;
    }
    #title {
      font-size: 3rem;
    }
    #subtitle {
      font-size: 1.5rem;
    }
  }

  .logoGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3rem;
    margin-top: 3rem;

    .logo {
      display: grid;
      place-content: center;
      min-height: 250px;
      border: 1px solid red;
    }
  }
  .secondaryLogoGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3rem;
    margin-top: 3rem;

    .logo {
      display: grid;
      place-content: center;
      min-height: 250px;
      border: 1px solid red;
    }
  }
  .btnWrap{
    display: grid;
    place-content: center;


    button {
        width: fit-content;
        margin: 2rem 0;
    }

    border: 1px solid red;
  }
`

export default function FeaturedLogos({ contentBlock }) {
  const logoContent = contentBlock
  const logos = logoContent.logos
  const secondaryLogos = logoContent.secondaryLogos
//   console.log({ secondaryLogos })

  const [displaySecondaryGrid, setDisplaySecondaryGrid] = useState(false)

  return (
    <FeaturedLogosStyles>
      <div className="headerContent">
        <p id="title">{logoContent.title}</p>
        <p id="subtitle">{logoContent.subtitle}</p>
      </div>
      <div className="logoGrid">
        {logos.map(logo => {
          return (
            <div className="logo">
              <GatsbyImage image={logo.logo.gatsbyImage} alt={logo.altText} />
            </div>
          )
        })}
      </div>
      {displaySecondaryGrid && (
        <div className="secondaryLogoGrid">
          {secondaryLogos.map(secondaryLogo => {
            return (
              <div className="logo">
                <GatsbyImage
                  image={secondaryLogo.logo.gatsbyImage}
                  alt={secondaryLogo.logo.altText}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="btnWrap">
        <button id="viewMore" onClick={() => setDisplaySecondaryGrid(!displaySecondaryGrid)}>
        { displaySecondaryGrid ? 'View Less' : 'View More'}
        </button>
      </div>
    </FeaturedLogosStyles>
  )
}
