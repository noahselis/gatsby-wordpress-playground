import React from "react"
import Layout from "./src/components/layout"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

export function wrapPageElement ({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
  }
