import React, { useContext } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { LanguageContext } from "../layout"
import Stripe from "../../images/payCards/stripe.png"
const window = require("global/window")

const rootMarginBottom = window.innerWidth <= 599 ? "10%" : 0
const rootTextAlign = window.innerWidth <= 599 ? "center" : "inherit"
const termsPrivacyMarginTop = window.innerWidth <= 599 ? "3%" : 0
const termsPrivacydisplay = window.innerWidth <= 599 ? "block" : "inline"

const useStyles = makeStyles(theme => ({}))

export default function (props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <div
      style={{
        color: "#8c8c8c",
        textAlign: rootTextAlign,
        marginBottom: rootMarginBottom,
      }}
    >
      <a
        href="https://stripe.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div style={{ display: "inline" }}>
          <Typography style={{ display: "inline", fontSize: 12 }}>
            {actLanguage === "DEU"
              ? "Powered by"
              : actLanguage === "RUS"
              ? "На платформе"
              : actLanguage === "ENG"
              ? "Powered by"
              : null}{" "}
          </Typography>

          <img
            src={Stripe}
            alt="Stripe logo"
            style={{ width: 33, marginBottom: "-0.9%" }}
          />
        </div>
      </a>
      {window.innerWidth > 600 ? (
        <Typography
          style={{
            display: "inline",
            marginRight: "3%",
            marginLeft: "3%",
            color: "#e7e7e7",
            fontSize: 12,
          }}
        >
          {" "}
          |{" "}
        </Typography>
      ) : (
        <br />
      )}
      <div
        style={{
          display: termsPrivacydisplay,
          marginTop: termsPrivacyMarginTop,
        }}
      >
        <div style={{ display: "inline" }}>
          <a
            href="https://stripe.com/checkout/terms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              style={{ display: "inline", marginRight: "2%", fontSize: 12 }}
            >
              {actLanguage === "DEU"
                ? "Bedingungen"
                : actLanguage === "RUS"
                ? "Условия"
                : actLanguage === "ENG"
                ? "Terms"
                : null}{" "}
            </Typography>
          </a>
        </div>
        <div style={{ display: "inline" }}>
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography style={{ display: "inline", fontSize: 12 }}>
              {actLanguage === "DEU"
                ? "Datenschutz"
                : actLanguage === "RUS"
                ? "Конфиденциальность"
                : actLanguage === "ENG"
                ? "Privacy"
                : null}
            </Typography>
          </a>
        </div>
      </div>
    </div>
  )
}
