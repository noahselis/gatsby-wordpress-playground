import React from "react"
import styled from "styled-components"

const MemberStyle = styled.div`
  display: grid;
  width: 400px;
  margin: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0px 1px 8px 0px #000000;

  img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 8px 8px 0 0;
  }

  .contentWrap {
    text-align: center;
    
    p{
      margin:0.5rem 0;
    }

    #name {
      font-size: 2rem;
      font-weight: 400;
    }

    #title {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    #pronouns {
      font-style: italic;
    }

  }
`

export default function TeamMember({ member }) {
  console.warn(member.name)
  return (
    <MemberStyle>
        <img src={member.picture.sourceUrl} alt={member.picture.alt} />
      <span className="contentWrap">
        <p id='name'>{member.name}</p>
        <p id='title'>{member.title}</p>
        <p id='pronouns'>({member.pronoun})</p>
      </span>
    </MemberStyle>
  )
}
