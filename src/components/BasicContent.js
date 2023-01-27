import React from "react"
import styled from "styled-components"

const contentWidth = props => {
  const divWidth = props.width

  switch (divWidth) {
    case "narrow":
      return "60%"
    case "extra-narrow":
      return "50%"
    case "default":
      return "90%"
  }
}

const BasicContentStyles = styled.div`
  margin: 3rem auto;
  width: ${contentWidth};
`

export default function BasicContent({ contentBlock }) {
  //   console.log({ contentBlock })
  return (
    <>
      <BasicContentStyles width={contentBlock.width}>
        <div dangerouslySetInnerHTML={{ __html: contentBlock.content }} />
      </BasicContentStyles>
    </>
  )
}
