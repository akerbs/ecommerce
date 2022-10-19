import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { LanguageContext } from "../layout"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  btn: {
    width: 225,
    minWidth: 225,
    maxWidth: 225,
    fontSize: 15,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
      marginBottom: "8%",
    },
  },
}))

export function AddToCartBtn(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <Button
      className={classes.btn}
      variant="contained"
      color="secondary"
      onClick={() => {
        props.addToCart(props.item, props.quantityOfItem)
        props.handleDrawerCartOpen()
        props.resetCounter()
      }}
    >
      {actLanguage === "DEU"
        ? "in Warenkorb legen"
        : actLanguage === "RUS"
        ? "добавить в корзину"
        : actLanguage === "ENG"
        ? "add to cart"
        : null}
    </Button>
  )
}

export function BuyNowBtn(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <Button
      id="directPay"
      className={classes.btn}
      variant="contained"
      color="primary"
      disabled={props.loading}
      onClick={() => {
        // props.clearCart()
        props.handleSetLoading()
        props.addToCart(props.item, props.quantityOfItem)
        navigate("/checkout")
        // handleDirectPayment()
      }}
    >
      {props.loading
        ? actLanguage === "DEU"
          ? "Wird geladen..."
          : actLanguage === "RUS"
          ? "Загрузка ..."
          : actLanguage === "ENG"
          ? "Loading..."
          : null
        : actLanguage === "DEU"
        ? "Kaufen jetzt"
        : actLanguage === "RUS"
        ? "Купить сейчас"
        : actLanguage === "ENG"
        ? "Buy it now"
        : null}
    </Button>
  )
}
