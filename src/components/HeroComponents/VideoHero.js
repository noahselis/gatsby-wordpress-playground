import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  #hero-vid {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 0;
    min-width: 350px;

    video {
      object-fit: cover;
      width: 100%;
    }
  }

  #overlay {
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    max-width: 100%;
    background: rgb(15, 15, 15);
    background: linear-gradient(
      45deg,
      rgba(15, 15, 15, 0.5) 30%,
      rgba(42, 54, 125, 0.5) 80%
    );
    z-index: 1;
  }

  #hero-img {
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    place-content: center;

    .gatsby-image-wrapper {
      display: grid;
      transform: translateY(-50%);
      height: fit-content;
      width: 250px;
    }
  }
  #hero-txt {
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    place-content: center;
    z-index: 1;
    transform: translateY(12%);

    p {
      font-size: clamp(2rem, 2vw, 3.5rem);
      text-align: center;
      color: var(--white);
      margin: 0 auto;
      width: 80%;
    }
  }
  .hero-btns {
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    place-content: center;
    z-index: 1;
    transform: translateY(28%);

    .btn-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        width: fit-content;
      }
      button {
        padding: 1rem 1rem;
        align-self: center;
      }
    }
  }
`

export default function HeroBanner({ heroContent }) {
  const videoHero = heroContent
  return (
    <>
      <HeroGrid>
        <div id="hero-vid">
          {/* <video controls>
            <source src={videoHero?.backgroundVideo} type="video/mp4" />
          </video> */}
          <video width={'100%'} loop autoPlay muted>
            <source src={videoHero?.backgroundVideo} type='video/mp4' />
          </video>
        </div>
        <div id="overlay" />
        <span id="hero-img">
          <GatsbyImage
            image={videoHero?.image?.gatsbyImage}
            alt={videoHero?.image?.altText}
          />
        </span>
        <span id="hero-txt">
          <p>{videoHero?.statement}</p>
        </span>
        <span className="hero-btns">
          <div className="btn-wrap">
            {videoHero?.links?.link1?.title && (
              <a href={videoHero?.links?.link1?.url} target="_blank">
                <button id="btn-1">{videoHero?.links?.link1?.title}</button>
              </a>
            )}
            {videoHero.links?.link2?.title && (
              <a href={videoHero?.links?.link2?.title}>
                <button id="btn-2">{videoHero?.links?.link2?.title}</button>
              </a>
            )}
          </div>
        </span>
      </HeroGrid>
    </>
  )
}
