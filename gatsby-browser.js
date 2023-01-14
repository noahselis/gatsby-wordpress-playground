const React = require("react")
const Layout = require("./src/components/layout").default


// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
  }