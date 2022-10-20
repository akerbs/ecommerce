// @ts-nocheck
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import "@stripe/stripe-js"; // https://github.com/stripe/stripe-js#import-as-a-side-effect
import axios from 'axios';
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import SimpleReactLightbox from "simple-react-lightbox";
import { CartContextProvider } from "../context/CartContext";
import { DrawerCartContextProvider } from "../context/DrawerCartContext";
import { DrawerMenuContextProvider } from "../context/DrawerMenuContext";
import { ItemsContextProvider } from "../context/ItemsContext";
import "./layout.css";
import theme from "./theme";
export const CurrencyContext = createContext()
export const LanguageContext = createContext()
export const HeaderHeightContext = createContext()

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

  async function getLocation() {
    try {
      const response = await axios("https://api.country.is")

      console.log('response',response);
      const countryCode = response?.data?.country
      console.log("countryCode", countryCode)
  
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
    } catch (e) {
      console.error(e)
    }
  }
 
 

  useEffect(() => {
    getLocation()
  }, [])

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
