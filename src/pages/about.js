import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import TeamMember from "../components/TeamMember"

const IntroStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3fr);
  padding: 2rem;
  margin-bottom: 3rem;

  h1 {
    margin: 8px;
    margin-left: 0px;
    font-size: 3rem;
  }

  p {
    font-size: 1.25em;
  }

  border: 1px solid red;
`

const TeamHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(500px, 1fr) 1fr;
  grid-template-rows: repeat(2, 1fr);
  place-content: center;
  text-align: center;
  margin-bottom: 3rem;

  h3 {
    align-self: end;
    grid-column-start: 2;
  }
  h1 {
    grid-column-start: 2;
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`

export default function AboutPage({ data }) {
  const intro = data.wpPage.aboutUs.introBlurb
  const members = data.wpPage.aboutUs.teamMember
  // console.log(data)
  // console.log({ intro })
  console.log({ members })
  return (
    <>
      <IntroStyles>
        <h3>{intro.pageTitle}</h3>
        <h1>{intro.companyTitle}</h1>
        <p>{intro.introParagraph}</p>
      </IntroStyles>
      <TeamHeading>
        <h3>Our Team</h3>
        <h1>Nerds, jocks, artists, and weirdos: the gang’s all here.</h1>
      </TeamHeading>
      <TeamGrid>
        <TeamMember members={members} />
      </TeamGrid>
    </>
  )
}

export const AboutUsQuery = graphql`
  query {
    wpPage(uri: { eq: "/about-us/" }) {
      aboutUs {
        introBlurb {
          __typename
          fieldGroupName
          pageTitle
          companyTitle
          introParagraph
        }
        teamHeading {
          heading
          subHeading
        }
        teamMember {
          name
          picture {
            altText
            sourceUrl
          }
          pronoun
          title
        }
      }
    }
  }
`
