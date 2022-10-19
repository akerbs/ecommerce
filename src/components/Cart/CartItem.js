import React, { useContext, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Counter from "./CounterCart"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import Divider from "@material-ui/core/Divider"
import { navigate } from "gatsby"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
const window = require("global/window")

const cartItemPadding =
  window.innerWidth <= 599 ? "6.7% 6% 0% 6%" : "2% 2% 2% 4.3%"

const itemTextPaddingLeft = window.innerWidth <= 599 ? "5%" : "2%"
const itemMarginBottom = window.innerWidth <= 599 ? "5%" : "0%"

const itemTextMarginTop = window.innerWidth <= 599 ? "2%" : "0%"

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    padding: cartItemPadding,
    marginBottom: itemMarginBottom,
  },
  imgBtn: {
    // marginTop: "5%",
    width: 100,
    height: 100,
    display: " inline-block",
    overflow: "hidden",
    transform: "translateZ(0)",
    borderRadius: "5%",
    // maskImage: "radial-gradient(white, black)",
    // borderRadius: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    width: 100,
    height: 100,
  },
}))

export default function CartItem(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { actCurrency } = useContext(CurrencyContext)

  const LinkToProductPage =
    props.cartItem.productId === "prod_HqQT1Nni7ovIFj"
      ? "funny-bunny"
      : props.cartItem.productId === "prod_HqorCSiih5dZWu"
      ? "cat-clock"
      : props.cartItem.productId === "prod_HrDKbPKHBo6qPK"
      ? "magic-hat"
      : null

  function getItemFormTotalPrice() {
    let itemTtlPrice =
      actCurrency === "EUR"
        ? props.cartItem.priceEur * props.cartItem.quantity
        : actCurrency === "RUB"
        ? props.cartItem.priceRub * props.cartItem.quantity
        : actCurrency === "USD"
        ? props.cartItem.priceUsd * props.cartItem.quantity
        : null

    let priceF = itemTtlPrice.toString()
    let beforeDot = priceF.slice(0, -2)
    let afterDot = priceF.slice(-2)
    let corrPrice = `${beforeDot}.${afterDot}`
    let formPrice = Number(corrPrice)
    let formPriceCorr = formPrice.toFixed(2)
    return formPriceCorr
  }

  useEffect(() => {
    getItemFormTotalPrice()
  }, [props.cartItem.quantity])

  return (
    <>
      <CssBaseline />
      <div style={{ overflow: "hidden" }}>
        <Slide in={props.open} timeout={1000} direction="up">
          <div className={classes.root}>
            <Paper className={classes.paper} elevation="0">
              <Grid container spacing={1}>
                <Grid item sm={3} xs={4}>
                  <ButtonBase
                    onClick={() => {
                      navigate(`/products/${LinkToProductPage}`)
                      props.onClose()
                    }}
                    className={classes.imgBtn}
                  >
                    <img
                      className={classes.img}
                      src={props.cartItem.firstImg}
                      alt={
                        // props.cartItem.name
                        actLanguage === "DEU"
                          ? props.cartItem.nameDeu
                          : actLanguage === "RUS"
                          ? props.cartItem.nameRus
                          : actLanguage === "ENG"
                          ? props.cartItem.nameEng
                          : null
                      }
                    />
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  sm={9}
                  xs={8}
                  container
                  style={{
                    paddingLeft: itemTextPaddingLeft,
                    paddingRight: 0,
                    marginTop: itemTextMarginTop,
                  }}
                >
                  <Grid item xs container direction="column" spacing={1}>
                    <Grid item xs>
                      <Typography variant="subtitle2" gutterBottom>
                        {
                          // props.cartItem.name

                          actLanguage === "DEU"
                            ? props.cartItem.nameDeu
                            : actLanguage === "RUS"
                            ? props.cartItem.nameRus
                            : actLanguage === "ENG"
                            ? props.cartItem.nameEng
                            : null
                        }
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        {
                          // props.cartItem.description
                          actLanguage === "DEU"
                            ? props.cartItem.descriptionDeu
                            : actLanguage === "RUS"
                            ? props.cartItem.descriptionRus
                            : actLanguage === "ENG"
                            ? props.cartItem.descriptionEng
                            : null
                        }
                      </Typography>
                      <div style={{ marginTop: "3%" }}>
                        <Typography variant="caption" color="textPrimary">
                          <Counter
                            incrementItem={props.incrementItem}
                            decrementItem={props.decrementItem}
                            quantity={props.cartItem.quantity}
                            cartItem={props.cartItem}
                          />{" "}
                          {/* {(props.item.currency = "eur" ? "€" : props.item.currency)}{" "} */}
                          {/* {corrPrice} */}
                          {
                            // props.cartItem.price

                            getItemFormTotalPrice()
                          }{" "}
                          {actCurrency === "EUR"
                            ? props.cartItem.currencySignEur
                            : actCurrency === "RUB"
                            ? props.cartItem.currencySignRub
                            : actCurrency === "USD"
                            ? props.cartItem.currencySignUsd
                            : null}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item style={{ marginRight: "5%" }}>
                    <Typography variant="subtitle1">
                      <IconButton
                        size="small"
                        onClick={() => props.removeItem(props.cartItem)}
                        style={{ padding: 0 }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Divider variant="middle" light={true} />
          </div>
        </Slide>
      </div>
    </>
  )
}
