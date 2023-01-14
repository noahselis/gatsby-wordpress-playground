import * as React from 'react'
import styled from 'styled-components'
// import { FaFacebookF as Facebook } from '@react-icons/all-files/fa/FaFacebookF'
// import { FaInstagram as Instagram } from '@react-icons/all-files/fa/FaInstagram'
// import { FaLinkedinIn as Linkedin } from '@react-icons/all-files/fa/FaLinkedinIn'
// import { FaTwitter as Twitter } from '@react-icons/all-files/fa/FaTwitter'
// import { FaYoutube as Youtube } from '@react-icons/all-files/fa/FaYoutube'

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-auto-rows: fit-content;

  .stripes {
    display: grid;
    grid-template-rows: repeat(3, 25px);
    border: 1px solid black;

    #red {
      border: 1px solid blue;
    }
    #grey {
      border: 1px solid blue;
    }
    #orange {
      border: 1px solid blue;
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
            {/* <Facebook />
            <Instagram />
            <Linkedin />
            <Twitter />
            <Youtube /> */}
          </div>
        </div>
        <div className="rights">
        <p>&#169;116 & West 2023. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        </div>
      </ContentGrid>
      <div className="end" />
    </FooterStyles>
  )
}
