import React, { useState, useContext, createContext, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./layout.css"
import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import "@stripe/stripe-js" // https://github.com/stripe/stripe-js#import-as-a-side-effect
import SimpleReactLightbox from "simple-react-lightbox"
import { DrawerCartContextProvider } from "../context/DrawerCartContext"
import { DrawerMenuContextProvider } from "../context/DrawerMenuContext"
import { ItemsContextProvider } from "../context/ItemsContext"
import { CartContextProvider } from "../context/CartContext"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const window = require("global/window")
const document = require("global/document")

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    // overflow: "hidden",
  },
}))
export const CurrencyContext = createContext()
export const LanguageContext = createContext()
export const HeaderHeightContext = createContext()

function Layout({ children }) {
  const classes = useStyles()

  const [actCurrency, setActCurrency] = useState("")
  const [actLanguage, setActLanguage] = useState("")

  const [countryCode, setCountryCode] = useState("")

  useEffect(() => {
    console.log("COUNTRY", countryCode)
  }, [countryCode])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      // console.log("LANGUAGE: ", window.navigator.language.slice(0, 2))

      if (window.navigator.language.slice(0, 2) === "ru") {
        setActLanguage("RUS")
      } else if (window.navigator.language.slice(0, 2) === "de") {
        setActLanguage("DEU")
      } else if (window.navigator.language.slice(0, 2) === "en") {
        setActLanguage("ENG")
      } else {
        setActLanguage("ENG")
      }
    }
  }, [])

  useEffect(() => {
    async function getLocation() {
      const response = await fetch("https://api.country.is")

      const info = await response.json()
      console.log("info", info)
      const countryCode = info.country

      setCountryCode(countryCode)

      countryCode === "US"
        ? setActCurrency("USD")
        : countryCode === "AT" ||
          countryCode === "BE" ||
          countryCode === "DE" ||
          countryCode === "GR" ||
          countryCode === "IE" ||
          countryCode === "ES" ||
          countryCode === "IT" ||
          countryCode === "CY" ||
          countryCode === "LV" ||
          countryCode === "LT" ||
          countryCode === "LU" ||
          countryCode === "MT" ||
          countryCode === "NL" ||
          countryCode === "PT" ||
          countryCode === "SK" ||
          countryCode === "SI" ||
          countryCode === "SF" ||
          countryCode === "FR" ||
          countryCode === "EE" ||
          countryCode === "VA" ||
          countryCode === "MC" ||
          countryCode === "SM" ||
          countryCode === "PM" ||
          countryCode === "YT" ||
          countryCode === "AD" ||
          countryCode === "ME" ||
          countryCode === "XK"
        ? setActCurrency("EUR")
        : countryCode === "RU"
        ? setActCurrency("RUB")
        : setActCurrency("USD")

      return countryCode
    }
    getLocation().then(countryCode => console.log("COUNTRY CODE:", countryCode))
  }, [])

  // useEffect(() => {
  //   async function getLocation() {
  //     const response = await fetch("https://ipapi.co/json")

  //     const info = await response.json()
  //     console.log("info", info)
  //     const countryCode = info.country_code

  //     setCountryCode(countryCode)

  //     countryCode == "US"
  //       ? setActCurrency("USD")
  //       : countryCode == "DE"
  //       ? setActCurrency("EUR")
  //       : countryCode == "RU"
  //       ? setActCurrency("RUB")
  //       : setActCurrency("USD")

  //     return countryCode
  //   }
  //   getLocation().then(countryCode => console.log("COUNTRY CODE:", countryCode))
  // }, [])

  // useEffect(() => {
  //   function getLocation() {
  //     window.navigator.geolocation.getCurrentPosition(
  //       position => {
  //         let latitude = position.coords.latitude
  //         let longitude = position.coords.longitude

  //         const url = `http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=anker2702`

  //         const response = fetch(url)
  //           .then(res => {
  //             return res.json()
  //           })
  //           .then(data => {
  //             setCountryCode(data.countryCode)

  //             data.countryCode == "US"
  //               ? setActCurrency("USD")
  //               : data.countryCode == "DE"
  //               ? setActCurrency("EUR")
  //               : data.countryCode == "RU"
  //               ? setActCurrency("RUB")
  //               : setActCurrency("USD")
  //             console.log("!!!!!ABC!!!!!", data)
  //             // alert(data.countryName)
  //           })

  //           .catch(err => {
  //             console.log(err)
  //           })
  //       },
  //       error => {
  //         console.log(error.code)
  //       }
  //     )
  //   }
  //   getLocation()
  // }, [])

  function handleCountryCodeChange(event) {
    setCountryCode(event.target.value)
  }

  function handleCurrencyChange(event) {
    setActCurrency(event.target.value)
    // clearCart();
    //  forceUpdate()
  }
  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    console.log(`headerHeight:   ${Math.round(headerHeight)}px`)
  }, [headerHeight])

  function handleHeaderHeightChange(value) {
    if (!!value) setHeaderHeight(value)
  }

  return (
    <div className={classes.root}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_RECAPTCHA_KEY}>
        <CurrencyContext.Provider
          value={{
            actCurrency,
            handleCurrencyChange,
            countryCode,
          }}
        >
          <LanguageContext.Provider
            value={{
              actLanguage,
              setActLanguage,
              handleLanguageChange,
            }}
          >
            <ItemsContextProvider>
              <CartContextProvider>
                <CssBaseline />
                <HeaderHeightContext.Provider
                  value={{
                    headerHeight,
                    handleHeaderHeightChange,
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <SimpleReactLightbox>
                      <DrawerMenuContextProvider>
                        <DrawerCartContextProvider>
                          {children}
                        </DrawerCartContextProvider>
                      </DrawerMenuContextProvider>
                    </SimpleReactLightbox>
                  </ThemeProvider>
                </HeaderHeightContext.Provider>
              </CartContextProvider>
            </ItemsContextProvider>
          </LanguageContext.Provider>
        </CurrencyContext.Provider>
      </GoogleReCaptchaProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
