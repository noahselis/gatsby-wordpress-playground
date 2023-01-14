import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const ProductsStyles = styled.div`
  h1 {
    font-size: 1rem;
  }
`

export default function ProductsPage() {
  return (
    <Layout>
      <ProductsStyles>
        <h1>Product Page</h1>
      </ProductsStyles>
    </Layout>
  )
}
