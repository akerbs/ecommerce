import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import React, { useContext, useEffect } from "react"
import Items from "../components/AllProductsPage/Items"
import { Footer } from "../components/footer"
import Header from "../components/header"
import { HeaderHeightContext } from "../components/layout"
import Scroll from "../components/ScrollToTopBtn"
import SEO from "../components/seo"

const document = require("global/document")

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100vw",
    width: "100vw",
    minWidth: "100vw",
    overflow: "hidden",
  },
  contentWrapper: {
    minHeight: "80vh",
    flex: "1 0 auto",
  },
  titleWrapper: {
    width: "100vw",
    padding: "2% auto",
    backgroundColor: theme.palette.primary.light,
    textAlign: "center",
    overflow: "hidden",
  },
}))

export default function () {
  const { headerHeight } = useContext(HeaderHeightContext)
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 5)
  }, [])

  return (
    <div className={classes.root}>
      <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Scroll showBelow={250} />
      <div
        className={classes.contentWrapper}
        style={{ marginTop: headerHeight }}
      >
        <Items />
      </div>

      <Footer />
    </div>
  )
}
