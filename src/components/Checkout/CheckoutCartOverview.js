import React, { useState, useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { useShoppingCart } from "use-shopping-cart"
import CheckoutCartItem from "./CheckoutCartItem"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
import { CartContext } from "../../context/CartContext"
import { navigate, Link } from "gatsby"
import StorefrontIcon from "@material-ui/icons/Storefront"
import IconButton from "@material-ui/core/IconButton"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"
import clsx from "clsx"
import LinkToStripeInfo from "./linkToStripeInfo"
import CouponCheckout from "./CouponCheckout"

const window = require("global/window")

const btnBackToStoreMarginLeft = window.innerWidth <= 599 ? 0 : "-8%"
const paySumMarginLeft = window.innerWidth <= 599 ? 0 : "2%"
const paySumTextAlign = window.innerWidth <= 599 ? "center" : "inherit"
const rootMinHeight = window.innerWidth <= 599 ? 0 : "100vh"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: rootMinHeight,
  },
  iconBtnMain: {
    transition: "0.3s linear",
    "&:hover": {
      backgroundColor: "transparent",
      left: "-1%",
    },
  },
  arrowBtn: {
    color: "#b1b1b1",
    transition: "0.3s linear",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#303030",
    },
  },
  arrowBtnHovered: {
    color: "black",
  },
  storeBtn: {
    padding: "5%",
    margin: "0 2% 0 2%",
    width: 28,
    maxWidth: 28,
    minWidth: 28,
    height: 28,
    maxHeight: 28,
    minHeight: 28,

    "&:hover": {
      backgroundColor: "transparent",
      margin: "0 2% 0 3%",
    },
  },
  storeBtnNoHovered: {
    boxShadow: " -3px 2px 10px -1px rgba(0, 0, 0, 0.3)",
  },
}))

export default function (props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { actCurrency } = useContext(CurrencyContext)
  const { cart, ttlPriceFormatted, currentCurrencySign } = useContext(
    CartContext
  )
  const [hovered, setHovered] = useState(false)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ marginLeft: btnBackToStoreMarginLeft }}>
        <IconButton
          color="secondary"
          disableRipple={true}
          className={classes.iconBtnMain}
          onClick={() => {
            navigate("/")
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <IconButton
            color="secondary"
            edge="end"
            disableRipple={true}
            className={clsx(
              classes.arrowBtn,
              hovered && classes.arrowBtnHovered
            )}
          >
            <KeyboardBackspaceIcon fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            disableRipple={true}
            className={clsx(
              classes.storeBtn,
              !hovered && classes.storeBtnNoHovered
            )}
          >
            {hovered ? (
              <Typography
                style={{
                  color: "#303030",
                  fontSize: 14,
                  fontWeight: 600,
                  marginLeft: "20%",
                }}
              >
                {actLanguage === "DEU"
                  ? "Zurück"
                  : actLanguage === "RUS"
                  ? "Назад"
                  : actLanguage === "ENG"
                  ? "Back"
                  : null}
              </Typography>
            ) : (
              <StorefrontIcon
                style={{
                  fontSize: 18,
                }}
              />
            )}
          </IconButton>
          {!hovered && (
            <Typography
              style={{
                display: "inline",
                fontWeight: 600,
                color: "#303030",
                fontSize: 14,
              }}
            >
              MyStore
            </Typography>
          )}
        </IconButton>
      </div>
      <br />
      {window.innerWidth >= 600 && (
        <div
          style={{ marginLeft: paySumMarginLeft, textAlign: paySumTextAlign }}
        >
          <CouponCheckout />
          <Typography
            style={{
              display: "inline",
              fontWeight: 600,
              color: "#767676",
              fontSize: 16,
            }}
          >
            {actLanguage === "DEU"
              ? "Zahlen"
              : actLanguage === "RUS"
              ? "Оплатить"
              : actLanguage === "ENG"
              ? "Pay"
              : null}
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: 600, color: "#303030" }}
          >
            {ttlPriceFormatted} {currentCurrencySign}
          </Typography>
          <br />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "46vh", //58vh
          justifyContent: "space-between",
          // alignContent: "space-between",
        }}
      >
        <div>
          {Object.keys(cart).map((item, idx) => {
            const cartItem = cart[item]
            return <CheckoutCartItem key={idx} cartItem={cartItem} />
          })}
        </div>
        {window.innerWidth <= 599 && (
          <div
            style={{
              marginLeft: paySumMarginLeft,

              textAlign: paySumTextAlign,
            }}
          >
            <br /> <br />
            <CouponCheckout />
            <Typography
              style={{
                display: "inline",
                fontWeight: 600,
                color: "#767676",
                fontSize: 16,
              }}
            >
              {actLanguage === "DEU"
                ? "Bezahlen"
                : actLanguage === "RUS"
                ? "Оплатить"
                : actLanguage === "ENG"
                ? "Pay"
                : null}
            </Typography>
            <Typography
              variant="h4"
              style={{ fontWeight: 600, color: "#303030" }}
            >
              {currentCurrencySign}
              {ttlPriceFormatted}
            </Typography>
            <br />
          </div>
        )}

        {window.innerWidth >= 600 && <LinkToStripeInfo />}
      </div>
    </div>
  )
}

// export function CheckoutCartItem(props) {
//   return <>{props.cartItem.nameEng}</>
// }
