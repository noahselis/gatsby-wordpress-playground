import React from "react"
import styled from "styled-components"

const NoPicStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  place-content: center;
  padding: 1rem;
  margin-bottom: 2rem;

  .line {
    border-top: 3px solid black;
    height: fit-content;
    width: 60%;
    justify-self: center;
    display: grid;
    align-self: center;
  }
  p {
    grid-column-start: 2;
  }
`

export default function NoPic(section) {
  const paragraph = section.paragraphNoPic
  return (
    <NoPicStyles>
      <div className="line" />
      <p>{paragraph}</p>
      <div className="line" />
    </NoPicStyles>
  )
}
