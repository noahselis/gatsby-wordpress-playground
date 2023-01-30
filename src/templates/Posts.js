import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function SinglePostPage({ data }) {
  console.log(data )
  return <h1>peepee poopoo</h1>
}

export const lastThreePostsQuery = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
    }
  }
`
