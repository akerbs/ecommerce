import React, { useContext, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import { LanguageContext } from "../layout"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const window = require("global/window")

const inputPadding = window.innerWidth <= 599 ? "0.05vw" : "0.5vw"
const btnPadding = window.innerWidth <= 599 ? "0.05vw" : "0.3vw"
const fontBtn = window.innerWidth <= 599 ? "0.5rem" : "1rem"

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: "1%",
    padding: "0 0 0 10%",
  },
  formElement: {
    marginTop: "3px ",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#c4c4c4",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  btn: {
    marginTop: "3px ",
    padding: btnPadding,
    fontSize: fontBtn,
  },
}))

const schemaEng = yup.object().shape({
  name: yup
    .string()
    .required("Name field is incomplete.")
    .min(3, "Name field is incomplete.")
    .max(30, "Name field is incomplete."),
  email: yup
    .string()
    .required("Email field is incomplete.")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Email field is incomplete."
    ),
  // .email('Please check your email')
})

const schemaDeu = yup.object().shape({
  name: yup
    .string()
    .required("Der Name ist unvollständig.")
    .min(3, "Der Name ist unvollständig.")
    .max(30, "Der Name ist unvollständig."),
  email: yup
    .string()
    .required("Die E-Mail-Adresse ist unvollständig.")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Die E-Mail-Adresse ist unvollständig."
    ),
  // .email('Please check your email')
})

const schemaRus = yup.object().shape({
  name: yup
    .string()
    .required("Имя указано не полностью.")
    .min(3, "Имя указано не полностью.")
    .max(30, "Имя указано не полностью."),
  email: yup
    .string()
    .required("Адрес эл. почты введен не полностью.")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Адрес эл. почты введен не полностью."
    ),
  // .email('Please check your email')
})

export default function (props) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()

  const schema =
    actLanguage === "DEU"
      ? schemaDeu
      : actLanguage === "RUS"
      ? schemaRus
      : actLanguage === "ENG"
      ? schemaEng
      : schemaEng

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  })
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  const [loading, setLoading] = useState(false)

  function handleLoadingOn() {
    setLoading(true)
  }
  function handleLoadingOff() {
    setLoading(false)
  }

  const alertMessage =
    actLanguage === "DEU"
      ? "Vielen Dank!!! Sie haben erfolgreich abonniert  :-)"
      : actLanguage === "RUS"
      ? "Спасибо!!! Вы успешно подписались :-)"
      : actLanguage === "ENG"
      ? "Thank You!!! You have successfully subscribed :-)"
      : "Thank You!!! You have successfully subscribed :-)"

  async function onSubmit(data) {
    if (!executeRecaptcha) {
      return
    }
    try {
      //   This is the same as grecaptcha.execute on traditional html script tags
      const result = executeRecaptcha("subscribe_form")
      setToken(result) //--> grab the generated token by the reCAPTCHA
      handleLoadingOn()

      data = { data, actLanguage }

      let response = await fetch(
        "https://my-store-1-mailer.herokuapp.com/subscribe",
        // "http://localhost:3000/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // body === body.form (on server)
        }
      )
      if (response.ok) {
        alert(alertMessage)
        handleLoadingOff()
        reset(response)

        props.onClose()
        window.scrollTo(0, 0)
        let responseJson = await response.json()
        return responseJson
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
      {/* <FormControl className={classes.formControl}> */}
      <TextField
        inputProps={{
          style: {
            padding: inputPadding,
          },
        }}
        // margin="dense"
        fullWidth={true}
        className={classes.formElement}
        type="text"
        name="name"
        placeholder={
          actLanguage === "DEU"
            ? "Ihr Name"
            : actLanguage === "RUS"
            ? "Ваше имя"
            : actLanguage === "ENG"
            ? "Your name"
            : "Your name"
        }
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errorName}
        helperText={errorName}
      />
      {/* </FormControl>
      <FormControl className={classes.formControl}> */}
      <TextField
        inputProps={{
          style: {
            padding: inputPadding,
          },
        }}
        fullWidth={true}
        // margin="dense"
        className={classes.formElement}
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
        inputRef={register}
        error={!!errorEmail}
        helperText={errorEmail}
      />
      {/* </FormControl> */}
      <Button
        fullWidth={true}
        id="submit"
        name="submit"
        type="submit"
        variant="contained"
        color="primary"
        className={classes.btn}
        size="small"
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
  )
}
