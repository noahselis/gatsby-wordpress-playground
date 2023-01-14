import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const BlogStyles = styled.div`
  h1 {
    color: #000;
    font-size: 1rem;
  }
`

export default function BlogPage() {
  return (
    <Layout>
      <BlogStyles>
        <h1>Blog Page</h1>
      </BlogStyles>
    </Layout>
  )
}
