import React from "react"
import Layout from './src/components/Layout.js'

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
  }