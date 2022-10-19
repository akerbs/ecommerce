import React, { useState, useContext, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import { LanguageContext } from "../layout"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import clsx from "clsx"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

const useStyles = makeStyles(theme => ({
  textFieldEmail: {
    marginRight: 5,
    marginBottom: 3,
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#135aa1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#135aa1",
      },
    },
  },
  btnSubscribe: {
    marginBottom: 30,
    marginTop: 1,
  },
  errorMsg: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgb(220,39,39)",
  },

  textfieldError: {
    "& .MuiOutlinedInput-root": {
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
  },
}))

export default function () {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [tokenRecapcha, setTokenRecapcha] = useState("")
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    email: "",
  })
  const [errorMsg, setErrorMsg] = useState(null)

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleClickAway = () => {
    if (form.email === "") {
      setErrorMsg(null)
    }
  }

  const resetHandler = event => {
    setForm({ email: "" })
    setErrorMsg(null)
    // document.getElementById("email").classList.remove("textfieldError")
  }

  function handleLoadingOn() {
    setLoading(true)
  }
  function handleLoadingOff() {
    setLoading(false)
  }

  // useEffect(() => {
  //   console.log("form.email:", form.email)
  //   console.log("emailValue:", emailValue)
  // }, [form.email])

  const onSubmit = async event => {
    event.preventDefault()
    // alert("emailValue:", emailValue)
    // if (!executeRecaptcha) {
    //   return
    // }
    // console.log("here1:", form.email)
    // console.log("here2:", emailValue)

    if (form.email === "") {
      setErrorMsg(
        actLanguage === "ENG"
          ? "Email field is incomplete."
          : actLanguage === "DEU"
          ? "Die E-Mail-Adresse ist unvollständig."
          : actLanguage === "RUS"
          ? "Адрес эл. почты введен не полностью."
          : "Email field is incomplete."
      )
    } else if (!form.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      setErrorMsg(
        actLanguage === "ENG"
          ? "Email field is incomplete."
          : actLanguage === "DEU"
          ? "Die E-Mail-Adresse ist unvollständig."
          : actLanguage === "RUS"
          ? "Адрес эл. почты введен не полностью."
          : "Email field is incomplete."
      )
    } else {
      try {
        //   This is the same as grecaptcha.execute on traditional html script tags
        // const result = await executeRecaptcha("store1")
        // setTokenRecapcha(result) //--> grab the generated token by the reCAPTCHA
        handleLoadingOn()

        const data = form

        const dataToServer = JSON.stringify({
          data,
          actLanguage,
          // form,
          // , tokenRecapcha
        })

        let response = await fetch(
          // `${process.env.GATSBY_MAILER_URL}/subscribe`,
          "https://my-store-1-mailer.herokuapp.com/subscribe",
          // "http://localhost:3000/subscribe",

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: dataToServer, //  body === body (on server)
          }
        )
        if (response.ok) {
          alert(
            actLanguage === "ENG"
              ? "Thank You!!! You have successfully subscribed :-)"
              : actLanguage === "DEU"
              ? "Vielen Dank!!! Sie haben erfolgreich abonniert  :-)"
              : actLanguage === "RUS"
              ? "Спасибо!!! Вы успешно подписались :-)"
              : "Thank You!!! You have successfully subscribed :-)"
          )
          resetHandler()
          handleLoadingOff()
          window.scrollTo(0, 0)
          let responseJson = await response.json()
          return responseJson
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <form onSubmit={onSubmit} noValidate>
        <span className={classes.errorMsg}>{errorMsg}</span>
        <FormControl
          id="email"
          className={clsx(
            classes.textFieldEmail,
            errorMsg && classes.textfieldError
          )}
        >
          <TextField
            type="email"
            name="email"
            placeholder={
              actLanguage === "DEU"
                ? "Ihre Emailadresse..."
                : actLanguage === "RUS"
                ? "Ваш электронный адрес..."
                : actLanguage === "ENG"
                ? "Your email address..."
                : "Your email address..."
            }
            variant="outlined"
            size="small"
            value={form.email}
            onChange={changeHandler}
          />
        </FormControl>
        <Button
          id="submit"
          name="submit"
          type="submit"
          variant="outlined"
          color="default"
          className={classes.btnSubscribe}
          disabled={loading}
        >
          {loading
            ? actLanguage === "DEU"
              ? "Wird geladen..."
              : actLanguage === "RUS"
              ? "Загрузка ..."
              : actLanguage === "ENG"
              ? "Loading..."
              : "Loading..."
            : actLanguage === "DEU"
            ? "Anmelden"
            : actLanguage === "RUS"
            ? "Подписаться"
            : actLanguage === "ENG"
            ? "Sing up"
            : null}
        </Button>
      </form>
    </ClickAwayListener>
  )
}
