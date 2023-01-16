import React from "react"
import styled from "styled-components"

const MemberStyle = styled.div`
display: grid;
max-width: 400px;

.imgWrap {
    width: 400px;
    height: 300px;
}
img {
    width: 100%;
    object-fit: cover;
}
`

export default function TeamMember({ members }) {
  console.log({ members })
  return (
    <MemberStyle>
      {members.map(member => {
        return (
          <>
          <span className="imgWrap">
            <img src={member.picture.sourceUrl} alt={member.picture.alt} />
          </span>
            <p>{member.name}</p>
            <p>{member.title}</p>
            <p>{member.pronoun}</p>
          </>
        )
      })}
    </MemberStyle>
  )
}
