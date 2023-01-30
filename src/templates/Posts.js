import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export default function SinglePostPage({ data }) {
  const post = data.post
  console.log({ post })
  return (
    <>
      <GatsbyImage
        image={post.featuredImage.node.gatsbyImage}
        alt={post.featuredImage.node.altText}
      />
      <p>{post.categories.nodes.map(node => node.name).join(', ')}</p>
      <p>{post.title}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }}/>
    </>
  )
}

export const lastThreePostsQuery = graphql`
  query($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      title
      slug
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          gatsbyImage(placeholder: BLURRED, width: 1200)
        }
      }
      content
    }
  }
`
