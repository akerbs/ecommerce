import React, { useState, useContext, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import Typography from "@material-ui/core/Typography"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
import { CartContext } from "../../context/CartContext"
import { navigate } from "gatsby"
import { DrawerCartContext } from "../../context/DrawerCartContext"
import PaypalExpressBtn from "react-paypal-express-checkout"
import Divider from "@material-ui/core/Divider"
import Coupon from "./CouponCart"

const useStyles = makeStyles(theme => ({
  btnWrapper: {
    textAlign: "center",
    margin: 20,
  },
}))

export default function Cart(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { actCurrency } = useContext(CurrencyContext)

  const [loading, setLoading] = useState(false)
  function handleSetLoading() {
    setLoading(true)
  }

  const { handleDrawerCartClose } = useContext(DrawerCartContext)

  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    incrCartItem,
    decrCartItem,
    ttlPriceFormatted,
  } = useContext(CartContext)

  // console.log("cartDetails:", cartDetails)

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onSuccess = async payment => {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment)

    try {
      let response = await fetch(
        // `${process.env.GATSBY_MAILER_URL}/pppdate`,
        "https://my-store-1-mailer.herokuapp.com/pppdate",
        // "http://localhost:3000/pppdate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
      if (response.ok) {
        handleDrawerCartClose()
        clearCart()
        navigate("/success")
        let responseJson = await response.json()
        return responseJson
      }
    } catch (error) {
      console.error(error)
    }

    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onCancel = data => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data)
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onError = err => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err)
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  let env = "sandbox" // you can set here to 'production' for production
  // let currency = "EUR" //{ actCurrency } // or you can set this value from your props or state
  // let total = 1 //{ ttlPriceFormatted } // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  const client = {
    sandbox:
      "AS5h-8gSSmEnVnUPEFYfkq2QTdMl0JGuncsuAAaAHQmrcFM_T_Zp2xsNa9g4aRwQhPMLmN2_Ek-50EAD",
    production: process.env.GATSBY_PAYPAL_API_ID, //
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <CssBaseline />
      <div>
        {Object.keys(cart).map((item, idx) => {
          const cartItem = cart[item]
          return (
            <CartItem
              onClose={props.onClose}
              open={props.open}
              key={idx}
              cartItem={cartItem}
              incrementItem={incrCartItem}
              decrementItem={decrCartItem}
              removeItem={removeFromCart}
            />
          )
        })}
      </div>

      {!cart.length ? null : (
        <Slide in={props.open} timeout={1000} direction="up">
          <div>
            <Fade in={props.open} timeout={2000}>
              <Coupon />
            </Fade>
          </div>
        </Slide>
      )}

      {!cart.length ? (
        <Slide in={props.open} timeout={1000} direction="up">
          <div>
            <Fade in={props.open} timeout={2000}>
              <Typography variant="body2" align="center" color="textSecondary">
                {actLanguage === "DEU"
                  ? "Einkaufswagen ist leer..."
                  : actLanguage === "RUS"
                  ? "Корзина пуста ..."
                  : actLanguage === "ENG"
                  ? " Cart is empty..."
                  : " Cart is empty..."}
              </Typography>
            </Fade>
          </div>
        </Slide>
      ) : (
        <>
          <Slide in={props.open} timeout={1000} direction="up">
            <div>
              <Fade in={props.open} timeout={2000}>
                <Typography
                  variant="body2"
                  align="right"
                  color="textPrimary"
                  style={{ textAlign: "center" }}
                >
                  {actLanguage === "DEU"
                    ? "Zwischensumme"
                    : actLanguage === "RUS"
                    ? "Предварительная сумма"
                    : actLanguage === "ENG"
                    ? "Subtotal"
                    : "Subtotal"}
                  : {ttlPriceFormatted}{" "}
                  {actCurrency === "EUR"
                    ? "€"
                    : actCurrency === "RUB"
                    ? "₽"
                    : actCurrency === "USD"
                    ? "$"
                    : null}
                </Typography>
              </Fade>
            </div>
          </Slide>

          <div className={classes.btnWrapper}>
            <Slide in={props.open} timeout={1000} direction="up">
              <div>
                <Fade in={props.open} timeout={2000}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={() => {
                      // console.log(cart)
                      handleSetLoading()
                      handleDrawerCartClose()
                      navigate("/checkout")
                    }}
                  >
                    {loading
                      ? actLanguage === "DEU"
                        ? "Verarbeitung..."
                        : actLanguage === "RUS"
                        ? "Обработка ..."
                        : actLanguage === "ENG"
                        ? "Processing..."
                        : "Processing..."
                      : actLanguage === "DEU"
                      ? "Zur Kasse"
                      : actLanguage === "RUS"
                      ? "Оформить заказ"
                      : actLanguage === "ENG"
                      ? "Checkout"
                      : "Checkout"}
                  </Button>
                </Fade>
              </div>
            </Slide>
          </div>
          <div className={classes.btnWrapper}>
            <Slide in={props.open} timeout={1000} direction="up">
              <div>
                <Fade in={props.open} timeout={2000}>
                  <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={actCurrency}
                    total={ttlPriceFormatted}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    fullWidth
                    style={{
                      layout: "horizontal",
                      size: "responsive",
                      color: "silver",
                      shape: "rect",
                      label: "pay",
                      tagline: "false",
                    }}
                  />
                </Fade>
              </div>
            </Slide>
          </div>
        </>
      )}
    </div>
  )
}
