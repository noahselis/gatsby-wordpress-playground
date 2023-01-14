import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const AboutStyles = styled.div`
  h1 {
    font-size: 1rem;
  }
`

export default function AboutPage() {
  return (
    <Layout>
      <AboutStyles>
        <h1>About Page</h1>
      </AboutStyles>
    </Layout>
  )
}
