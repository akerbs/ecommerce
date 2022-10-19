import React, { useState, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Link } from "gatsby"
import payCard1 from "../images/payCards/visa.jpg"
import payCard2 from "../images/payCards/mastercard.jpg"
import payCard3 from "../images/payCards/amex.jpg"
import payCard4 from "../images/payCards/paypal.jpg"

import payCard5 from "../images/payCards/ec.jpg"
import payCard6 from "../images/payCards/giropay.jpg"
import payCard7 from "../images/payCards/sepa.jpg"
import payCard8 from "../images/payCards/sofort.jpg"
import payCard9 from "../images/payCards/klarna.jpg"
import payCard10 from "../images/payCards/google.jpg"
import payCard11 from "../images/payCards/apple.jpg"

import inView from "in-view"
import Slide from "@material-ui/core/Slide"
import SubscribeFormFooter from "./Subscribe/SubscribeFormFooter"
const window = require("global/window")

// const footerPaddingTop = window.innerWidth <= 599 ? "20%" : "5%"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: "100%",

    padding: "4% 2% 0% 7%",

    [theme.breakpoints.down("sm")]: {
      padding: "15% 5% 5% 5%",
    },
  },
  // content: {
  //   marginTop: footerMarginTop,
  //   color: "black",
  // },

  title: {
    marginBottom: 20,
  },
  title2: {
    marginBottom: "3%",
  },
  payCards: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
  },
  payCardItem: {
    width: 40, // 48 40 32
    height: 25, // 30 25 20
    marginRight: 5,
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white",
    },
  },
}))

export default function () {
  const classes = useStyles()
  const [show, setShow] = useState(false)

  function startInView() {
    setShow(true)
  }
  function stopInView() {
    setShow(false)
  }

  useEffect(() => {
    inView("#selector").once("enter", startInView)
    inView.threshold(0.2)
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ overflow: "hidden" }} id="selector">
        <Slide in={show} timeout={1000} direction="up">
          <div>
            {/* <Container maxWidth="md" className={classes.content}> */}
            <Grid
              container
              className={classes.root}
              // spacing={10}
              spacing={5}
            >
              <Grid item md={5}>
                <Typography variant="body2" className={classes.title}>
                  CONTACTS
                </Typography>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque incidunt dolorem aut explicabo aliquid. Quae officiis
                  voluptate nemo dolore cum animi inventore possimus, beatae
                  incidunt praesentium.
                </Typography>
                <div className={classes.payCards}>
                  <img
                    src={payCard1}
                    title="visa"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard2}
                    title="master card"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard3}
                    title="maestro"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard4}
                    title="pay pal"
                    className={classes.payCardItem}
                  />
                  {/* <img
                    src={payCard5}
                    title="american express"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard6}
                    title="google pay"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard7}
                    title="apple pay"
                    className={classes.payCardItem}
                  />
                  <img
                    src={payCard8}
                    // title="apple pay"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard9}
                    // title="apple pay"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard10}
                    // title="apple pay"
                    className={classes.payCardItem}
                  />

                  <img
                    src={payCard11}
                    // title="apple pay"
                    className={classes.payCardItem}
                  /> */}
                </div>
              </Grid>
              <Grid item md={3}>
                <Typography variant="body2" className={classes.title}>
                  SERVICES
                </Typography>
                <Typography variant="caption">
                  <Link to="#" className={classes.link} key="termsOfService">
                    Terms of Service
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="returnsAndRefund">
                    Returns & Refund
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="privacyPolicy">
                    Privacy Policy
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="shippingPolicy">
                    Shipping Policy
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="aboutUs">
                    About us
                  </Link>
                  <br />
                  <Link to="#" className={classes.link} key="contactUs">
                    Contact us
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="body2" className={classes.title2}>
                  JOIN OUR NEWSLETTER
                </Typography>
                <SubscribeFormFooter />
                <Typography variant="body2" className={classes.title2}>
                  FOLLOW US
                </Typography>
                <Link to="#" className={classes.link}>
                  <FacebookIcon />
                </Link>
                <Link to="#" className={classes.link}>
                  <InstagramIcon />
                </Link>
              </Grid>
            </Grid>
            <div
              style={{
                textAlign: "center",
                minHeight: "50px",
              }}
            >
              © {new Date().getFullYear()}, MyStore
            </div>
            {/* </Container> */}
          </div>
        </Slide>
      </div>
    </div>
  )
}
