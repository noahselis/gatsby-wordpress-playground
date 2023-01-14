import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const ContactStyles = styled.div`
  h1 {
    color: #000;
    font-size: 1rem;
  }
`

export default function ContactPage() {
  return (
    <Layout>
      <ContactStyles>
        <h1>Contact Page</h1>
      </ContactStyles>
    </Layout>
  )
}
