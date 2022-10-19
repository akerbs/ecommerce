import React, { useContext, useState, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Items from "../components/AllProductsPage/Items"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { CurrencyContext } from "../components/layout"
import Scroll from "../components/ScrollToTopBtn"
import Slide from "@material-ui/core/Slide"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import inView from "in-view"
import SubscribeWindow from "../components/Subscribe/SubscribeWindow"
import { ItemsContext } from "../context/ItemsContext"
import { HeaderHeightContext } from "../components/layout"

const document = require("global/document")

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100vw",
    width: "100vw",
    minWidth: "100vw",
    overflow: "hidden",
    // marginTop: "10%",
  },
  contentWrapper: {
    minHeight: "80vh",

    flex: "1 0 auto",
    // marginTop: "4.5%",
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: "16%",
    // },
  },
  titleWrapper: {
    width: "100vw",
    // padding: "50vh 0%",
    padding: "2% auto",

    backgroundColor: theme.palette.primary.light,
    textAlign: "center",
    overflow: "hidden",
  },
}))

export default function () {
  // console.log("DATA:", products)
  const { headerHeight } = useContext(HeaderHeightContext)

  const classes = useStyles()
  const { actCurrency } = useContext(CurrencyContext)
  const { products, changeHover } = useContext(ItemsContext)

  // const [showTitle, setShowTitle] = useState(false)
  // const [show2, setShow2] = useState(false)

  // // setTimeout(() => {
  // //   handleOpenSubscribeWindow()
  // // }, 3000)

  useEffect(() => {
    window.scrollTo(0, 5)
  }, [])

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     window.scrollTo(0, 0)
  //   })

  //   return () => {
  //     window.removeEventListener("load", window.scrollTo(0, 0))
  //   }
  // })

  // window.onload = () => {
  //   window.scrollTo(0, 0)
  // }

  // function startShowTitleInView() {
  //   setShowTitle(true)
  // }
  // function stopInView1() {
  //   setShow1(false)
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowTitle(true)
  //   }, 100)
  // })

  // useEffect(() => {
  //   // inView(".selector1").on("enter", startInView1).on("exit", stopInView1)
  //   inView("#selector1").once("enter", startShowTitleInView)
  //   // inView(".selector2").on("enter", startInView2).on("exit", stopInView2)
  //   // inView(".selector2").once("enter", startInView2)
  //   inView.threshold(0)
  // })

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
        {/* <div className={classes.titleWrapper}>
          <Slide in={showTitle} timeout={700} direction="up">
            <div>
          <h3>Shop now</h3>
          </div>
          </Slide>
        </div> */}

        <Items />
      </div>

      <Footer />
    </div>
  )
}

{
  /* <div className={classes.gridWrapper}>
        <h5 className={classes.title}>Shop</h5>
        <Items products={products} />
        {/* <p style={{ gridArea: "one" }}>1</p>
        <p style={{ gridArea: "two" }}>2</p>
        <p style={{ gridArea: "three" }}>3</p> */
}
{
  /* <p style={{ gridArea: "four" }}>4</p>

        <p style={{ gridArea: "five" }}>5</p>
        <p style={{ gridArea: "six" }}>6</p>
        <p style={{ gridArea: "seven" }}>7</p>
        <p style={{ gridArea: "eight" }}>8</p> */
}

// <Grid container spacing={1}>
//           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//             Shop
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={6}
//             lg={6}
//             xl={6}
//             direction="column"
//             container
//           >
//             <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container>
//               <Grid item> item1</Grid>
//               <Grid item> item2</Grid>
//             </Grid>
//             <Grid item xs={12} sm={12} md={6} lg={6} xl={6} container>
//               <Grid item> item3 </Grid>
//               <Grid item> item4</Grid>
//             </Grid>
//           </Grid>
//           {/* <Items /> */}
//         </Grid>
