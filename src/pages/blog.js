import React from "react"
import styled from "styled-components"

const BlogStyles = styled.div`
  h1 {
    color: #000;
    font-size: 1rem;
  }
`

export default function BlogPage() {
  return (
      <BlogStyles>
        <h1>Blog Page</h1>
      </BlogStyles>
  )
}
