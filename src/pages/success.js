import React, { useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
// import Link from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function () {
  return (
    <>
      <SEO title="Page success" />
      <CssBaseline />
      <h1>Hi from the success page</h1>
      <p>Successful!!!</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}
