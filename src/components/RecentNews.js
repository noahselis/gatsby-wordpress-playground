import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const RecentNewsStyles = styled.section`
  h2 {
    font-size: 2.5rem;
    margin: 3rem 0;
    display: grid;
    place-content: center;
  }

  #imgGrid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    #postCard {
      display: grid;
      margin: 0 2rem;
      height: 290px;
      width: 400px;

      .gatsby-image-wrapper {
        height: 200px;
      }

      #type {
        font-size: 1.2rem;
      }

      #title {
        font-size: 1.7rem;
      }

      border: 1px solid red;
    }
  }
`

export default function RecentNews({ lastThreePosts, contentBlock }) {
  console.log({ lastThreePosts })
  console.log({ contentBlock })
  const title = contentBlock.title
  const posts = lastThreePosts.nodes
  return (
    <RecentNewsStyles>
      <h2>{title}</h2>

      <div id="imgGrid">
        {posts.map(post => {
          const postType = post.categories.nodes
            .map(post => post.name)
            .join(", ")
          return (
            <div id="postCard">
              <GatsbyImage
                image={post.featuredImage.node.gatsbyImage}
                alt={post.featuredImage.node.altText}
              />
              <p id="type">{postType}</p>
              <Link to={`recent-posts/${post.slug}`}>
                <p id="title">{post.title}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </RecentNewsStyles>
  )
}
