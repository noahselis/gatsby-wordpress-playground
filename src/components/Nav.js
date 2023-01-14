import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  ul {
    display: grid;
    /* grid-template-columns: 200px auto repeat(8, 1fr);
    grid-template-rows: 75px; */
    /* grid-template-columns: repeat(auto-fit, 150px); */
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    justify-content: start;
    column-gap: 0.5rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    list-style: none;
    li {
      border: 1px solid blue;
      /* &:first-child {
        margin-left: 1rem;
      } */
      /* &:nth-child(2) {
        grid-column-start: 7;
      } */
      &.logo {
        justify-self: start;
        border: 1px solid red;
      }
    }
    a {
      text-decoration: none;
    }
  }
  border: 1px solid red;
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className='logo'>
          <Link to="/" >
            A Very Good Website
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </NavStyles>
  )
}