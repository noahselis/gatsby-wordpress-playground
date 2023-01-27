import * as React from "react"
import styled from "styled-components"
// import { FaFacebookF } from '@react-icons/all-files/fa'
import { FaFacebookF as Facebook} from "react-icons/fa"
import { FaInstagram as Instagram } from 'react-icons/fa'
import { FaLinkedinIn as Linkedin } from 'react-icons/fa'
import { FaTwitter as Twitter } from 'react-icons/fa'
import { FaYoutube as Youtube } from 'react-icons/fa'

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-auto-rows: minmax(39px, auto);
  background: transparent
    linear-gradient(240deg, #11393d 0%, #08675c 100%, #08675c 100%) 0% 0%
    no-repeat padding-box;

  .stripes {
    height: fit-content;
    display: grid;
    grid-template-rows: repeat(3, 13px);
    clip-path: polygon(0 0, 93% 0, 100% 100%, 0% 100%);
    border: 1px solid black;
    transform: translateY(-50%);
    min-width: 260px;

    #red {
      background-color: #123a3e;
    }
    #grey {
      background-color: #38a3ac;
    }
    #orange {
      background-color: #f0b917;
    }
  }

  border: 1px solid red;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  height: 500px;

  border: 1px solid blue;
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="stripes">
        <span id="red" />
        <span id="grey" />
        <span id="orange" />
      </div>
      <ContentGrid className="content">
        <div className="newsletter">
          <p>Let's keep in touch</p>
          <p>only fresh, healthy content. no spam added.</p>
          <form>
            <fieldset>
              <label>First name *</label>
              <input />
            </fieldset>
          </form>
        </div>
        <div className="locations">
          <p>Boise & Eugene</p>
          <p>
            805 W. Idaho St. Ste. 300,
            <br />
            Boise, ID 83702
            <br />
            208.472.2129
          </p>
          <p>Spokane</p>
          <p>
            216 W Pacific Ave. Ste. 201
            <br />
            Spokane, WA 99201
            <br />
            509.456.5576
          </p>
        </div>
        <div className="connect">
          <p>Connect</p>
          <p>whatsup@116andwest.com</p>
          <div className="icons">
            <Facebook fill={'#fff'}/>
            <Instagram fill={'#fff'}/>
            <Linkedin fill={'#fff'}/>
            <Twitter fill={'#fff'}/>
            <Youtube fill={'#fff'}/>
          </div>
        </div>
        <div className="rights">
          <p>&#169;116 & West 2023. All Rights Reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </ContentGrid>
    </FooterStyles>
  )
}
