import React from "react"
import styled from "styled-components"

export default function RecentNews({ lastThreePosts, contentBlock }) {
  console.log({ lastThreePosts })
  console.log({ contentBlock })
  const title = contentBlock.title
  const posts = lastThreePosts.nodes
  return (
    <>
      <h2>{title}</h2>
      {posts.map((post) => {
        const postType = post.categories.nodes.map(post => post.name).join(', ')
        return (
          <div>
            <img src="https://via.placeholder.com/150" />
            <p>
                {postType}
            </p>
          </div>
        )
      })}
    </>
  )
}
