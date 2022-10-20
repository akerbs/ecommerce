import CssBaseline from "@material-ui/core/CssBaseline"
import Slide from "@material-ui/core/Slide"
import { makeStyles } from "@material-ui/core/styles"
import React, { useContext, useEffect, useState } from "react"
import CookiesBar from "../components/cookiesBar"
import { Footer } from "../components/footer"
import Header from "../components/header"
import { HeaderHeightContext } from "../components/layout"
import Scroll from "../components/ScrollToTopBtn"
import SEO from "../components/seo"
import { WeclomeModal } from "../components/Subscribe/WeclomeModal"
import bgImg from "../images/castle77.jpg"
import cloud1 from "../images/cloud1.png"
import cloud2 from "../images/cloud2.png"
import cloud3 from "../images/cloud3.png"
import cloud4 from "../images/cloud4.png"
import cloud5 from "../images/cloud5.png"
// import "./index.css"

const document = require("global/document")

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: `"Poppins", sans-serif`,
  },
  banner: {
    overflow: "hidden",
    position: "relative",
    width: "100vw",
    background: `url(${bgImg})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
    },
  },
  title1: {
    position: "relative",
    color: "#fff",
    fontSize: "12em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5em",
    },
  },
  clouds: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    pointerEvents: "none",
  },
  cloudsImg: {
    position: "absolute",
    bottom: "-5%", //-20
    maxWidth: "100%",
    animation: "$animate calc(3s * var(--i)) linear infinite",
  },
  "@keyframes animate": {
    "0% ": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
  section: {
    width: "100vw",
    position: "relative",
    padding: "7%",
    [theme.breakpoints.down("sm")]: {
      padding: "10%",
      paddingTop: "20%",
    },
  },
  title2: {
    position: "relative",
    marginBottom: "5%",
    // display: "flex",
    textAlign: "center",
    fontSize: "2.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
    },
  },
}))

export default function IndexPage() {
  const [showModal, setShowModal] = useState(false) // WelcomeModal
  const { headerHeight } = useContext(HeaderHeightContext)
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 0)
    checkVisited()
  }, [])


  function checkVisited() {
   if (Boolean(document.cookie.indexOf('visited') >= 0)) {
      setShowModal(false)
      console.log("Already visited")
    } else {
      const timer = setTimeout(() => {
        const expiry = new Date()
        expiry.setTime(expiry.getTime() + 24 * 60 * 60 * 1000) // one day
        document.cookie = "visited=yes; expires=" + expiry.toUTCString()
        setShowModal(true)
        console.log("This is your first time")
          }, 5000)
          return () => clearTimeout(timer)
        }
  }
  
  const [show1, setShow1] = useState(false)

  useState(() => {
    setTimeout(() => {
      setShow1(true)
    }, 1000)
  })

  function handleScroll() {
    let text = document.getElementById("title1")
    let value = window.scrollY
    text.style.marginBottom = value * 2 + "px"
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div className={classes.root}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Scroll showBelow={250} />
      <div
        className={classes.contentWrapper}
        style={{ marginTop: headerHeight }}
      >
        <div
          className={classes.banner}
          id="banner"
        >
          <Slide in={show1} timeout={1000} direction="up">
            <h2 className={classes.title1} id="title1">
            Ecommerce
            </h2>
          </Slide>
          <div className={classes.clouds}>
            <img
              src={cloud1}
              className={classes.cloudsImg}
              style={{ ["--i"]: 1 }}
              // {...{ [i]: 1 }}
            />
            <img
              src={cloud2}
              className={classes.cloudsImg}
              style={{ ["--i"]: 2 }}
            />
            <img
              src={cloud3}
              className={classes.cloudsImg}
              style={{ ["--i"]: 3 }}
            />
            <img
              src={cloud4}
              className={classes.cloudsImg}
              style={{ ["--i"]: 4 }}
            />
            <img
              src={cloud5}
              className={classes.cloudsImg}
              style={{ ["--i"]: 5 }}
            />
          </div>
        </div>
        <div className={classes.section}>
          <h2 className={classes.title2} id="title2">
            Welcome
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            beatae cupiditate dolorem voluptatem itaque minima quod, velit
            obcaecati unde asperiores temporibus deleniti magni, impedit aliquid
            quidem sequi quis omnis excepturi illo qui inventore dolores?
            Nesciunt nobis unde, ad dolorum possimus quasi molestias numquam
            ullam at impedit enim aliquid? Assumenda esse explicabo totam
            excepturi corrupti accusantium aliquam vel ducimus mollitia dolor
            voluptas dolorum pariatur quia commodi dolores, impedit amet ipsa
            quo corporis? Odit officia praesentium exercitationem aliquam vero
            quod neque. Debitis perferendis illo non deserunt quisquam, quidem a
            deleniti eius corporis ut voluptates labore vel eaque, ratione
            libero assumenda rerum! Odit! dolorum possimus quasi molestias
            numquam ullam at impedit enim aliquid? Assumenda esse explicabo
            totam excepturi corrupti accusantium aliquam vel ducimus mollitia
            dolor voluptas dolorum pariatur quia commodi dolores, impedit amet
            ipsa quo corporis? Odit officia praesentium exercitationem aliquam
            vero quod neque. Debitis perferendis illo non deserunt quisquam,
            quidem a deleniti eius corporis ut voluptates labore vel eaque,
            ratione libero assumenda rerum! Odit! dolorum possimus quasi
            molestias numquam ullam at impedit enim aliquid? Assumenda esse
            explicabo totam excepturi corrupti accusantium aliquam vel ducimus
            mollitia dolor voluptas dolorum pariatur quia commodi dolores,
            impedit amet ipsa quo corporis? Odit officia praesentium
            exercitationem aliquam vero quod neque. Debitis perferendis illo non
            deserunt quisquam, quidem a deleniti eius corporis ut voluptates
            labore vel eaque, ratione libero assumenda rerum! Odit!
          </p>
        </div>
      </div>

      <Footer />
      {showModal && <WeclomeModal
        open={showModal}
        onClose={setShowModal}
      />}
      <CookiesBar />
    </div>
  )
}
