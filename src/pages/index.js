import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const HomeStyles = styled.div`
  text-transform: lowercase;

  h1 {
    color: red;
  }
`

export default function HomePage() {
  return (
    <Layout>
      <HomeStyles>
        <h1>Home Page</h1>
      </HomeStyles>
    </Layout>
  )
}
