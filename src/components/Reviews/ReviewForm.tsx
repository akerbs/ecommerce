import { yupResolver } from "@hookform/resolvers"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import Rating from "@material-ui/lab/Rating"
import clsx from "clsx"
import React, { useContext, useState } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { LanguageContext } from "../layout"

const useStyles = makeStyles(theme => ({
  root: {},
  RatingFullReadOnly: {
    color: "rgb(89,157,210)",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  nameEmailBox: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
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
  nameField: {
    marginRight: "1%",
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  emailField: {
    marginTop: 0,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}))

const schemaEng = yup.object().shape({
  // rating: yup
  //   .string()
  //   .nullable()
  //   .required("Please enter a star rating for this review"),
  title: yup
    .string()
    .required("Review's title can't be empty")
    .min(3, "Title must be at-least 3 characters")
    .max(20, "Name must be 20 characters or less"),
  review: yup
    .string()
    .required("Review's  body can't be empty")
    .min(3, "Review must be at-least 3 characters")
    .max(40, "Name must be 40 characters or less"),
  name: yup
    .string()
    .required("Name field can't be empty")
    .min(3, "Name must be at-least 3 characters")
    .max(20, "Name must be 20 characters or less"),
  email: yup
    .string()
    .required("Email field can't be empty")
    .matches(
      /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Invalid email"
    ),
  // .email('Please check your email')
})

const schemaDeu = yup.object().shape({
  // rating: yup
  //   .string()
  //   .nullable()
  //   .required("Please enter a star rating for this review"),
  title: yup
    .string()
    .required("Titel der Bewertung darf nicht leer sein.")
    .min(3, "Der Titel muss mindestens 3 Zeichen lang sein.")
    .max(20, "Der Titel darf maximal 20 Zeichen lang sein."),
  review: yup
    .string()
    .required("Bewertung Feld darf nicht leer sein.")
    .min(3, "Die Bewertung muss mindestens 3 Zeichen lang sein.")
    .max(40, " Die Bewertung darf maximal 40 Zeichen lang sein."),
  name: yup
    .string()
    .required("Feld Name darf nicht leer sein.")
    .min(3, "Der Name muss mindestens 3 Zeichen lang sein.")
    .max(20, "Der Name darf maximal 20 Zeichen lang sein."),
  email: yup
    .string()
    .required("Das E-Mail-Feld darf nicht leer sein.")
    .matches(
      /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Ung??ltige E-Mail-Adresse."
    ),
  // .email('Please check your email')
})

const schemaRus = yup.object().shape({
  // rating: yup
  //   .string()
  //   .nullable()
  //   .required("Please enter a star rating for this review"),
  title: yup
    .string()
    .required("?????????????????? ???????????? ???? ?????????? ???????? ????????????.")
    .min(3, "?????????????????? ???????????? ?????????????????? ???? ?????????? 3 ????????????????.")
    .max(20, "?????????????????? ???????????? ?????????????????? ???? ?????????? 20 ????????????????."),
  review: yup
    .string()
    .required("???????? ???????????? ???? ?????????? ???????? ????????????.")
    .min(3, "???????? ????????????  ???????????? ?????????????????? ???? ?????????? 3 ????????????????.")
    .max(40, "???????? ????????????  ???????????? ?????????????????? ???? ?????????? 40 ????????????????."),
  name: yup
    .string()
    .required("???????? ?????????? ???? ?????????? ???????? ????????????.")
    .min(3, "???????? ??????????  ???????????? ?????????????????? ???? ?????????? 3 ????????????????.")
    .max(20, "???????? ?????????? ???????????? ?????????????????? ???? ?????????? 20 ????????????????."),
  email: yup
    .string()
    .required("???????? ?????????????????????? ?????????? ???? ?????????? ???????? ????????????.")
    .matches(
      /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "???????????????? ?????????? ?????????????????????? ??????????."
    ),
  // .email('Please check your email')
})

export default function (props) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const [rating, setRating] = useState(0)

  const schema =
    actLanguage === "DEU"
      ? schemaDeu
      : actLanguage === "RUS"
      ? schemaRus
      : actLanguage === "ENG"
      ? schemaEng
      : schemaEng

  const { register, handleSubmit, errors, control, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const [loading, setLoading] = useState(false)

  function handleLoadingOn() {
    setLoading(true)
  }
  function handleLoadingOff() {
    setLoading(false)
  }

  const linkId = props.itemInfo.linkId
  ///////////// DATE //////////////
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  const yyyy = today.getFullYear()
  if (dd < 10) {
    dd = `0${dd}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  today = `${dd}/${mm}/${yyyy}`
  // console.log(today);
  //////////////////////////////////////////

  // const errorRating =
  //   errors.hasOwnProperty("rating") && errors["rating"].message
  const errorTitle = errors.hasOwnProperty("title") && errors["title"].message
  const errorReview =
    errors.hasOwnProperty("review") && errors["review"].message
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  ////// :) :) :) :) :) :) :) :) :) ////////////
  // const id = props.itemInfo.productId

  // const item = products.filter(x => {
  //   return x.productId ===  id
  // })

  // const goal = item.reviews

  //   setProducts()
  // const saveReviewToFile = (filename = FILE_NAME, encoding = "utf8") => {
  //   const reviewItem = `${data
  //     .split(
  //       p =>
  //         `${p.date},${p.email},${p.name},${p.rating},${p.review},${p.title}\n`
  //     )
  //     .join("")}`

  //   fs.writeFileSync(filename, reviewItem, encoding)
  // }

  //////////////////////////////////////////////
  const alertMessage =
    actLanguage === "DEU"
      ? "Vielen Dank!!! Ihre Bewertung wird ??berpr??ft und ver??ffentlicht :-)"
      : actLanguage === "RUS"
      ? "??????????????!!! ?????? ?????????? ?????????? ???????????????? ?? ?????????????????????? :-)"
      : actLanguage === "ENG"
      ? "Thank You!!! Your review will be checked and published  :-)"
      : "Thank You!!! Your review will be checked and published  :-)"

  async function onSubmit(data) {
    // e.preventDefault() //--> prevent the page from reloading on form submit
    //    Check if the captcha was skipped or not
    if (!executeRecaptcha) {
      return
    }
    if (rating === 0) {
      const ratingErrorFieldEl = document.getElementById("ratingErrorField")
      ratingErrorFieldEl.style.display = "block"
    } else {
      // console.log(data)
      try {
        //   This is the same as grecaptcha.execute on traditional html script tags
        const result = executeRecaptcha("review_form")
        setToken(result) //--> grab the generated token by the reCAPTCHA
        handleLoadingOn()

        data = { data, actLanguage }

        let response = await fetch(
          "https://my-store-1-mailer.herokuapp.com/review",
          // "http://localhost:3000/review",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
        if (response.ok) {
          // console.log(JSON.stringify(data))
          // alert("data:", data)

          alert(alertMessage)
          handleLoadingOff()
          reset(response)
          props.handleAccClose()
          window.scrollTo(0, 0)
          //  navigate(`/products/${props.itemInfo.linkId}`)
          let responseJson = await response.json()
          return responseJson
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography variant="body2">
        {actLanguage === "DEU"
          ? "EINE BEWERTUNG SCHREIBEN"
          : actLanguage === "RUS"
          ? "???????????????? ??????????"
          : actLanguage === "ENG"
          ? "WRITE A REVIEW"
          : "WRITE A REVIEW"}
      </Typography>
      <br />
      <Typography variant="caption" style={{ color: "tomato" }}>
        *{" "}
      </Typography>
      <Typography variant="caption">
        {actLanguage === "DEU"
          ? "Markiert eine notwendiges Feld"
          : actLanguage === "RUS"
          ? "???????????????????? ???????????????????????? ????????"
          : actLanguage === "ENG"
          ? "Indicates a required field"
          : "Indicates a required field"}
      </Typography>
      <br /> <br />
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
          *{" "}
        </Typography>
        <Typography variant="caption">
          {actLanguage === "DEU"
            ? "Score:"
            : actLanguage === "RUS"
            ? "????????????:"
            : actLanguage === "ENG"
            ? "Score:"
            : "Score:"}
        </Typography>
        <br />
        <span
          id="ratingErrorField"
          style={{
            display: "none",
            color: "rgb(244,67,54)",
            fontSize: "10",
            transform: `scale(0.88)`,
            marginLeft: "-4.8%",
          }}
        >
          {actLanguage === "DEU"
            ? "Bitte w??hlen Sie eine Sternebewertung f??r diese Bewertung."
            : actLanguage === "RUS"
            ? "????????????????????, ???????????????? ?????????????????????? ?????????? ?????? ?????????? ????????????."
            : actLanguage === "ENG"
            ? "Please select a star rating for this review."
            : "Please select a star rating for this review."}
        </span>
        <FormControlLabel
          control={
            <>
              <input
                name="rating"
                type="number"
                value={rating}
                ref={register}
                hidden
                readOnly
              />
              <Rating
                style={{ marginLeft: "6%" }}
                name="rating"
                value={rating}
                control={control}
                precision={1}
                onChange={(_, value) => {
                  setRating(value)
                  // console.log("r a t i n g", value)
                  if (value !== 0) {
                    const ratingErrorFieldEl = document.getElementById(
                      "ratingErrorField"
                    )
                    ratingErrorFieldEl.style.display = "none"
                  }
                }}
                emptyIcon={
                  <StarBorderIcon
                    fontSize="inherit"
                    style={{ color: "rgb(254,198,1)" }}
                  />
                }
              />
            </>
          }
          // label="select rating"
        />
        <br /> <br />
        <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
          *{" "}
        </Typography>
        <Typography variant="caption">
          {actLanguage === "DEU"
            ? "Titel:"
            : actLanguage === "RUS"
            ? "??????????????????:"
            : actLanguage === "ENG"
            ? "Title:"
            : "Title:"}
        </Typography>
        <br />
        <TextField
          className={classes.formElement}
          id="title"
          variant="outlined"
          // margin="normal"
          fullWidth
          size="small"
          name="title"
          autoFocus
          inputRef={register()}
          error={!!errorTitle}
          helperText={errorTitle}
        />
        <br />
        <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
          *{" "}
        </Typography>
        <Typography variant="caption">
          {actLanguage === "DEU"
            ? "Bewertung:"
            : actLanguage === "RUS"
            ? "??????????:"
            : actLanguage === "ENG"
            ? "Review:"
            : "Review:"}
        </Typography>
        <br />
        <TextField
          className={classes.formElement}
          id="review"
          variant="outlined"
          // margin="normal"
          fullWidth
          name="review"
          autoFocus
          multiline
          rows={4}
          inputRef={register()}
          error={!!errorReview}
          helperText={errorReview}
        />
        <br /> <br />
        <br />
        <div className={classes.nameEmailBox}>
          <div>
            <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
              *{" "}
            </Typography>
            <Typography variant="caption">
              {actLanguage === "DEU"
                ? "Ihr Name:"
                : actLanguage === "RUS"
                ? "???????? ??????:"
                : actLanguage === "ENG"
                ? "Your name:"
                : "Your name:"}
            </Typography>
            <br />
            <TextField
              className={clsx(classes.formElement, classes.nameField)}
              id="name"
              style={{}}
              variant="outlined"
              margin="normal"
              size="small"
              name="name"
              autoFocus
              inputRef={register()}
              error={!!errorName}
              helperText={errorName}
            />
          </div>
          <div>
            <Typography variant="caption" style={{ color: "rgb(244,67,54)" }}>
              *{" "}
            </Typography>
            <Typography variant="caption">
              {actLanguage === "DEU"
                ? "Email:"
                : actLanguage === "RUS"
                ? "????. ??????????:"
                : actLanguage === "ENG"
                ? "Email:"
                : "Email:"}
            </Typography>
            <br />
            <TextField
              className={clsx(classes.formElement, classes.emailField)}
              style={{}}
              id="email"
              variant="outlined"
              margin="normal"
              size="small"
              type="email"
              name="email"
              autoFocus
              inputRef={register()}
              error={!!errorEmail}
              helperText={errorEmail}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{
              marginTop: 0,
            }}
            type="submit"
            disabled={loading}
            // fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {loading
              ? actLanguage === "DEU"
                ? "Wird geladen..."
                : actLanguage === "RUS"
                ? "???????????????? ..."
                : actLanguage === "ENG"
                ? "Loading..."
                : "Loading..."
              : actLanguage === "DEU"
              ? "Senden"
              : actLanguage === "RUS"
              ? "????????????????"
              : actLanguage === "ENG"
              ? "Submit"
              : null}
          </Button>
        </div>
        <input
          name="date"
          type="string"
          value={today}
          ref={register}
          hidden
          readOnly
        />
        <input
          name="linkId"
          type="string"
          value={linkId}
          ref={register}
          hidden
          readOnly
        />
      </form>
      {token && console.log("Token:", token)}
    </Container>
  )
}
