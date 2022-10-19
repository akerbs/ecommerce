import React, { useState, useContext, useEffect, useRef } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, fade } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { CurrencyContext } from "../layout"
import { LanguageContext } from "../layout"
import { CartContext } from "../../context/CartContext"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import clsx from "clsx"
import InputAdornment from "@material-ui/core/InputAdornment"
import payCard1 from "../../images/payCards/visa2.png"
import payCard2 from "../../images/payCards/mastercard2.png"
import payCard3 from "../../images/payCards/amex2.png"
import payCard4 from "../../images/payCards/cvc.png"

import CreditCardIcon from "@material-ui/icons/CreditCard"
import FormControl from "@material-ui/core/FormControl"
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js"
import StripeInput from "./StripeInput"
import LockIcon from "@material-ui/icons/Lock"
import { navigate } from "gatsby"
import LinkToStripeInfo from "./linkToStripeInfo"
import { DrawerCartContext } from "../../context/DrawerCartContext"
import {
  AllCountriesRus,
  AllCountriesDeu,
  AllCountriesEng,
} from "./AllCountries"

const window = require("global/window")

const foolWidth = window.innerWidth <= 599 ? 288 : 380
const halfFoolWidth = foolWidth / 2
// const selectMenuWidth = window.innerWidth <= 599 ? 288 : 348
const lockIconMarginLeft = window.innerWidth <= 599 ? "350%" : "470%"
const paymentCardsMarginRight = window.innerWidth <= 599 ? "11%" : "8%"

const useStyles = makeStyles(theme => ({
  root: {
    width: foolWidth,
    margin: "0 auto",
    minHeight: "100vh",
  },

  textfield: {
    "& .MuiOutlinedInput-inputMarginDense": {
      padding: "8px 12px",
      margin: 0,

      maxHeight: 36,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: 1,
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 4px`,
      },
    },

    // padding: "8px 12px",
  },

  textfieldFullWidth: {
    width: foolWidth,
  },
  textfieldFullWidthPartTop: {
    // paddingBottom: "-0.25%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `4px 4px 0 0 `,
        // borderWidth: "1px 1px  0 1px ",
        borderBottomColor: "transparent",
      },
      "&:hover fieldset": {
        borderBottomColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: theme.palette.primary.main,
      },
    },
  },
  textfieldFullWidthBetween: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: 0,
        borderBottomColor: "transparent",
        // borderWidth: "0 1px 1px 1px",
      },
      "&:hover fieldset": {
        borderBottomColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderBottomColor: theme.palette.primary.main,
      },
    },
  },
  textfieldHalfLeft: {
    width: halfFoolWidth,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `0 0 0 4px`,
        // borderTopColor: "transparent",
        borderRightColor: "transparent",
        // borderWidth: "0 0 1px 1px",
      },
      "&:hover fieldset": {
        borderRightColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderRightColor: theme.palette.primary.main,
      },
    },
  },
  textfieldHalfRight: {
    width: halfFoolWidth,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `0 0 4px 0`,
        // borderTopColor: "transparent",
        // borderWidth: "0 1px 1px 1px",
      },
    },
  },

  textfieldError: {
    "& .MuiOutlinedInput-root": {
      color: "rgb(220,39,39)",

      "& fieldset": {
        borderWidth: 1,
        borderColor: "rgb(220,39,39)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(220,39,39)",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .Mui-focused": {
      color: "black",
    },
  },
  textFieldLeftError: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRightColor: "transparent",
      },
      "&:hover fieldset": {
        borderRightColor: "transparent",
      },
    },
  },
  textFieldLeftErrorReset: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRightColor: "rgb(220,39,39)",
      },
      "&:hover fieldset": {
        borderRightColor: "rgb(220,39,39)",
      },
    },
  },

  textFieldBetweenError: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderBottomColor: "transparent",
      },
      "&:hover fieldset": {
        borderBottomColor: "transparent",
      },
    },
  },
  textFieldBetweenErrorReset: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderBottomColor: "rgb(220,39,39)",
      },
      "&:hover fieldset": {
        borderBottomColor: "rgb(220,39,39)",
      },
    },
  },
  errorMsg: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgb(220,39,39)",
  },
}))

export default function MyCheckoutForm(props) {
  const classes = useStyles()
  const { actCurrency, countryCode } = useContext(CurrencyContext)
  const { handleDrawerCartClose } = useContext(DrawerCartContext)

  const { actLanguage } = useContext(LanguageContext)
  const {
    cart,
    clearCart,
    ttlPrice,
    currentCurrency,
    ttlPriceFormatted,
    currentCurrencySign,
  } = useContext(CartContext)
  const stripe = useStripe()
  const elements = useElements()

  // const { register, handleSubmit, errors, control } = useForm()
  const [stripeErrorMsg, setStripeErrorMsg] = useState(null)
  const [form, setForm] = useState({
    email: null,
    name: null,
    country: countryCode,
    line1: null,
    line2: null,
    postal_code: null,
    city: null,
  })
  const [errorForm, setErrorForm] = useState({
    email: false,
    name: false,
    country: false,
    line1: false,
    line2: false,
    postal_code: false,
    city: false,
  })
  const [errorFormMsg, setErrorFormMsg] = useState({
    email: false,
    name: false,
    country: false,
    line1: false,
    line2: false,
    postal_code: false,
    city: false,
  })
  const [loading, setLoading] = useState(false)

  function handleLoadingOn() {
    setLoading(true)
  }
  function handleLoadingOff() {
    setLoading(false)
  }

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (
      form.email !== null &&
      form.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      setErrorForm({ email: false })
    }
  }, [form.email])

  useEffect(() => {
    if (
      form.name !== null &&
      form.name.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ name: false })
    }
  }, [form.name])

  useEffect(() => {
    if (
      form.country !== null &&
      form.country.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ country: false })
    }
  }, [form.country])

  useEffect(() => {
    if (
      form.line1 !== null &&
      form.line1.match(/([a-z ]{2,}\s{0,1})(\d{0,3})(\s{0,1}\S{2,})?/i)
    ) {
      setErrorForm({ line1: false })
    }
  }, [form.line1])

  useEffect(() => {
    if (
      form.line2 === null ||
      form.line2 === "" ||
      form.line2 === "undefined" ||
      (form.line2 !== null &&
        form.line2.match(/([a-z ]{2,}\s{0,1})(\d{0,3})(\s{0,1}\S{2,})?/i))
    ) {
      setErrorForm({ line2: false })
    }
  }, [form.line2])

  useEffect(() => {
    if (
      form.postal_code !== null &&
      form.postal_code.match(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/g)
    ) {
      setErrorForm({ postal_code: false })
    }
  }, [form.postal_code])

  useEffect(() => {
    if (
      form.city !== null &&
      form.city.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ city: false })
    }
  }, [form.city])

  const onSubmit = async event => {
    event.preventDefault()

    if (
      form.email === null ||
      !form.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
    ) {
      setErrorForm({ email: true })
      setErrorFormMsg({
        email:
          actLanguage === "DEU"
            ? "Die E-Mail-Adresse ist unvollständig."
            : actLanguage === "RUS"
            ? "Адрес эл. почты введен не полностью."
            : actLanguage === "ENG"
            ? "Email field is incomplete."
            : null,
      })
    } else if (
      form.name === null ||
      !form.name.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ name: true })
      setErrorFormMsg({
        name:
          actLanguage === "DEU"
            ? "Der Name ist unvollständig"
            : actLanguage === "RUS"
            ? "Имя указано не полностью."
            : actLanguage === "ENG"
            ? "Name field is incomplete."
            : null,
      })
    } else if (
      !form.country ||
      form.country === null ||
      form.country === "undefined"
    ) {
      setErrorForm({ country: true })
      setErrorFormMsg({
        country:
          actLanguage === "DEU"
            ? "Bitte wählen Sie das Land aus."
            : actLanguage === "RUS"
            ? "Пожалуйста, выберите страну."
            : actLanguage === "ENG"
            ? "Please select the country."
            : null,
      })
    } else if (
      form.line1 === null ||
      !form.line1.match(/([a-z ]{2,}\s{0,1})(\d{0,3})(\s{0,1}\S{2,})?/i)
    ) {
      setErrorForm({ line1: true })
      setErrorFormMsg({
        line1:
          actLanguage === "DEU"
            ? "Die Adresse ist unvollständig."
            : actLanguage === "RUS"
            ? "Адрес указан не полностью."
            : actLanguage === "ENG"
            ? "Address field is incomplete."
            : null,
      })
    } else if (
      form.line2 !== null &&
      form.line2 !== "" &&
      form.line2 !== "undefined" &&
      !form.line2.match(/[\w\d., ]+/i)
    ) {
      setErrorForm({ line2: true })
      setErrorFormMsg({
        line2:
          actLanguage === "DEU"
            ? "Die Adresse ist unvollständig."
            : actLanguage === "RUS"
            ? "Адрес указан не полностью."
            : actLanguage === "ENG"
            ? "Address field is incomplete."
            : null,
      })
    } else if (
      form.postal_code === null ||
      !form.postal_code.match(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/g)
    ) {
      setErrorForm({ postal_code: true })
      setErrorFormMsg({
        postal_code:
          actLanguage === "DEU"
            ? "Die Postleitzahl ist unvollständig."
            : actLanguage === "RUS"
            ? "Почтовый индекс указан не полностью."
            : actLanguage === "ENG"
            ? "Postal code field is incomplete."
            : null,
      })
    } else if (
      form.city === null ||
      !form.city.match(
        /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/g
      )
    ) {
      setErrorForm({ city: true })
      setErrorFormMsg({
        city:
          actLanguage === "DEU"
            ? "Der Ort ist unvollständig."
            : actLanguage === "RUS"
            ? "Город указан не полностью."
            : actLanguage === "ENG"
            ? "City field is incomplete."
            : null,
      })
    } else if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    } else {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: form.name,
          email: form.email,
          address: {
            country: form.country,
            line1: form.line1,
            line2: form.line2,
            postal_code: form.postal_code,
            city: form.city,
          },
        },
      })

      if (!error) {
        console.log("Stripe 23 | token generated!", paymentMethod)
        try {
          handleLoadingOn()
          const { id } = paymentMethod

          const response = await fetch(
            // " https://stripe-api-test-server.herokuapp.com/stripe/charge",
            // "http://localhost:8080/stripe/charge",
            // "http://localhost:3000/stripe/charge",
            "https://my-store-1-mailer.herokuapp.com/stripe/charge",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              // body: JSON.stringify(data),
              body: JSON.stringify({
                amount: ttlPrice,
                currency: currentCurrency,
                id: id,
                // receipt_email: form.email,
              }),
            }
          )
          if (response.ok) {
            setStripeErrorMsg(null)
            console.log("CheckoutForm.js 25 | payment successful!")
            console.log("YO", response)
            // handleLoadingOff()
            clearCart()
            handleDrawerCartClose()
            navigate("/success")
          }
        } catch (error) {
          console.log("CheckoutForm.js 28 | ", error)
        }
      } else {
        console.log(error.message)
        setStripeErrorMsg(error.message)
      }
    }
  }

  // function stripeChangeHandler(e) {
  //   e.preventDefault()

  //   if (
  //     stripeErrorMsg !== "Your card number is incomplete." &&
  //     stripeErrorMsg !== "Номер карты неполон."
  //   ) {
  //     let stripeCardNumber = document.getElementById("cardNumber")
  //     stripeCardNumber.classList.remove("textfieldError")
  //   }

  //   if (
  //     stripeErrorMsg !== "Your card's expiration date is incomplete." &&
  //     stripeErrorMsg !== "Срок истечения действия карты указан не полностью." &&
  //     stripeErrorMsg !== "Неполная дата истечения срока действия карты."
  //   ) {
  //     document.getElementById("cardExpiry").classList.remove("textfieldError")
  //   }

  //   if (
  //     stripeErrorMsg !== "Your card's security code is incomplete." &&
  //     stripeErrorMsg !== "Неполный код CVV/CVC карты."
  //   ) {
  //     document.getElementById("cvvCvc").classList.remove("textfieldError")
  //   }
  // }

  return (
    <div className={classes.root}>
      <CssBaseline />
      {window.innerWidth > 600 && (
        <Typography
          variant="body1"
          style={{ fontWeight: 600, color: "#303030" }}
        >
          {actLanguage === "DEU"
            ? "Mit Karte zahlen"
            : actLanguage === "RUS"
            ? "Оплатить картой"
            : actLanguage === "ENG"
            ? "Pay with card"
            : null}
        </Typography>
      )}

      <br />
      <form
        onSubmit={onSubmit}
        // onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <span style={{ fontSize: 14 }}>
          {actLanguage === "DEU"
            ? "E-mail"
            : actLanguage === "RUS"
            ? "Эл. почта"
            : actLanguage === "ENG"
            ? "Email"
            : null}
        </span>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.email && classes.textfieldError
          )}
        >
          <TextField
            type="email"
            variant="outlined"
            size="small"
            name="email"
            value={form.email}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
          />
        </FormControl>
        <span className={classes.errorMsg}>
          {errorForm.email && errorFormMsg.email}
        </span>
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14 }}>
            {actLanguage === "DEU"
              ? "Kartendated"
              : actLanguage === "RUS"
              ? "Данные карты"
              : actLanguage === "ENG"
              ? "Card information"
              : null}
          </span>
          {/* <span style={{ fontSize: 14 }}>error.message</span> */}
        </div>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            classes.textfieldFullWidthPartTop,
            (stripeErrorMsg === "Your card number is incomplete." ||
              stripeErrorMsg === "Номер карты неполон." ||
              stripeErrorMsg === "Die Kartennummer ist unvollständig.") &&
              classes.textfieldError
          )}
        >
          <TextField
            id="cardNumber"
            variant="outlined"
            size="small"
            name="cardNumber"
            onChange={e => setStripeErrorMsg(e.error)}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement,
              },
              endAdornment: (
                //  <CreditCardIcon />
                <div
                  style={{
                    display: "flex",
                    padding: 0,
                    margin: 0,
                    marginRight: paymentCardsMarginRight,
                  }}
                >
                  <img
                    src={payCard1}
                    style={{ height: 17, padding: 0, margin: 0 }}
                  />
                  <img
                    src={payCard2}
                    style={{
                      height: 17,
                      padding: 0,
                      margin: 0,
                      marginLeft: "5%",
                    }}
                  />
                  <img
                    src={payCard3}
                    style={{
                      height: 17,
                      padding: 0,
                      margin: 0,
                      marginLeft: "5%",
                    }}
                  />
                </div>
              ),
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
        </FormControl>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldHalfLeft,
            (stripeErrorMsg === "Your card's expiration date is incomplete." ||
              stripeErrorMsg ===
                "Срок истечения действия карты указан не полностью." ||
              stripeErrorMsg ===
                "Неполная дата истечения срока действия карты." ||
              stripeErrorMsg ===
                "Das Ablaufdatum der Karte ist unvollständig.") &&
              classes.textfieldError
          )}
        >
          <TextField
            id="cardExpiry"
            variant="outlined"
            size="small"
            name="cardExpiry"
            onChange={e => setStripeErrorMsg(e.error)}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />
        </FormControl>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldHalfRight,
            (stripeErrorMsg === "Your card's security code is incomplete." ||
              stripeErrorMsg === "Неполный код CVV/CVC карты." ||
              stripeErrorMsg ===
                "Der Sicherheitscode der Karte ist unvollständig") &&
              classes.textfieldError
          )}
        >
          <TextField
            id="cvvCvc"
            variant="outlined"
            size="small"
            name="cvvCvc"
            onChange={e => setStripeErrorMsg(e.error)}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement,
              },
              endAdornment: (
                //  <CreditCardIcon />

                <img
                  src={payCard4}
                  style={{ height: 17, padding: 0, margin: 0 }}
                />
              ),
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
        </FormControl>
        <span className={classes.errorMsg}>
          {stripeErrorMsg === "Your card number is incomplete." ||
          stripeErrorMsg === "Номер карты неполон." ||
          stripeErrorMsg === "Die Kartennummer ist unvollständig." ||
          stripeErrorMsg === "Your card's expiration date is incomplete." ||
          stripeErrorMsg ===
            "Срок истечения действия карты указан не полностью." ||
          stripeErrorMsg === "Неполная дата истечения срока действия карты." ||
          stripeErrorMsg === "Das Ablaufdatum der Karte ist unvollständig." ||
          stripeErrorMsg === "Your card's security code is incomplete." ||
          stripeErrorMsg === "Неполный код CVV/CVC карты." ||
          stripeErrorMsg === "Der Sicherheitscode der Karte ist unvollständig"
            ? stripeErrorMsg
            : null}
        </span>
        <br />
        <br />
        <span style={{ fontSize: 14 }}>
          {actLanguage === "DEU"
            ? "Name des Karteninhabers"
            : actLanguage === "RUS"
            ? "Имя, указанное на карте"
            : actLanguage === "ENG"
            ? "Name on card"
            : null}
        </span>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            errorForm.name && classes.textfieldError
          )}
        >
          <TextField
            type="text"
            id="name"
            variant="outlined"
            size="small"
            name="name"
            value={form.name}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
          />
        </FormControl>
        <span className={classes.errorMsg}>
          {errorForm.name && errorFormMsg.name}
        </span>
        <br /> <br />
        <span style={{ fontSize: 14 }}>
          {actLanguage === "DEU"
            ? "Lieferadresse"
            : actLanguage === "RUS"
            ? "Адрес доставки"
            : actLanguage === "ENG"
            ? "Shipping address"
            : null}
        </span>
        <FormControl
          variant="outlined"
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            classes.textfieldFullWidthPartTop,
            errorForm.country && classes.textfieldError
          )}
        >
          {actLanguage === "DEU" ? (
            <AllCountriesDeu
              country={form.country}
              changeHandler={changeHandler}
            />
          ) : actLanguage === "RUS" ? (
            <AllCountriesRus
              country={form.country}
              changeHandler={changeHandler}
            />
          ) : actLanguage === "ENG" ? (
            <AllCountriesEng
              country={form.country}
              changeHandler={changeHandler}
            />
          ) : null}
        </FormControl>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            classes.textfieldFullWidthBetween,
            errorForm.line1 && classes.textfieldError,
            errorForm.line1 && classes.textFieldBetweenError,
            errorForm.line1 &&
              !errorForm.city &&
              classes.textFieldBetweenErrorReset,
            errorForm.line1 &&
              !errorForm.postal_code &&
              classes.textFieldBetweenErrorReset
          )}
        >
          <TextField
            id="line1"
            variant="outlined"
            placeholder={
              actLanguage === "DEU"
                ? "Adresszeile 1"
                : actLanguage === "RUS"
                ? "Адрес (строка 1)"
                : actLanguage === "ENG"
                ? "Addressline 1"
                : null
            }
            size="small"
            name="line1"
            value={form.line1}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
          />
        </FormControl>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldFullWidth,
            classes.textfieldFullWidthBetween,
            errorForm.line2 && classes.textfieldError,
            errorForm.line1 &&
              errorForm.city &&
              errorForm.postal_code &&
              classes.textfieldError,
            errorForm.line1 && classes.textFieldBetweenError
          )}
        >
          <TextField
            id="line2"
            variant="outlined"
            placeholder={
              actLanguage === "DEU"
                ? "Adresszeile 2"
                : actLanguage === "RUS"
                ? "Адрес (строка 2)"
                : actLanguage === "ENG"
                ? "Addressline 2"
                : null
            }
            size="small"
            name="line2"
            value={form.line2}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
          />
        </FormControl>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldHalfLeft,
            errorForm.postal_code && classes.textfieldError,
            errorForm.postal_code && classes.textFieldLeftError,
            errorForm.postal_code &&
              !errorForm.city &&
              classes.textFieldLeftErrorReset
          )}
        >
          <TextField
            id="postal_code"
            variant="outlined"
            placeholder={
              actLanguage === "DEU"
                ? "PLZ"
                : actLanguage === "RUS"
                ? "Почтовый индекс"
                : actLanguage === "ENG"
                ? "ZIP"
                : null
            }
            size="small"
            name="postal_code"
            value={form.postal_code}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
          />
        </FormControl>
        <FormControl
          className={clsx(
            classes.textfield,
            classes.textfieldHalfRight,
            errorForm.city && classes.textfieldError
          )}
        >
          <TextField
            id="city"
            variant="outlined"
            placeholder={
              actLanguage === "DEU"
                ? "Ort"
                : actLanguage === "RUS"
                ? "Город"
                : actLanguage === "ENG"
                ? "City"
                : null
            }
            size="small"
            name="city"
            value={form.city}
            onChange={changeHandler}
            InputProps={{ style: { fontSize: 16 } }}
          />
        </FormControl>
        <span className={classes.errorMsg}>
          {(errorForm.country && errorFormMsg.country) ||
            (errorForm.line1 && errorFormMsg.line1) ||
            (errorForm.line2 && errorFormMsg.line2) ||
            (errorForm.postal_code && errorFormMsg.postal_code) ||
            (errorForm.city && errorFormMsg.city)}
        </span>
        <br />
        <br />
        <br />
        <Button
          fullWidth
          color="primary"
          id="submit"
          name="submit"
          type="submit"
          variant="contained"
          disabled={!stripe || loading}
          style={{ textTransform: "none" }}
          endIcon={
            <LockIcon
              style={{
                // marginLeft: lockIconMarginLeft
                right: "10%",
              }}
            />
          }
        >
          {loading ? (
            actLanguage === "DEU" ? (
              "Verarbeitung..."
            ) : actLanguage === "RUS" ? (
              "Обработка ..."
            ) : actLanguage === "ENG" ? (
              "Processing..."
            ) : (
              "Processing..."
            )
          ) : (
            <span style={{ marginLeft: "10%" }}>
              {actLanguage === "DEU"
                ? "Zahlen"
                : actLanguage === "RUS"
                ? "Оплатить"
                : actLanguage === "ENG"
                ? "Pay"
                : null}{" "}
              {ttlPriceFormatted} {currentCurrencySign}
            </span>
          )}
        </Button>
      </form>
      {window.innerWidth <= 599 && (
        <>
          <br />
          <LinkToStripeInfo />
        </>
      )}
    </div>
  )
}
