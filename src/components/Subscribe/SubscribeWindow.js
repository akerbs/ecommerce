import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import Picture from "../../images/products/funny_bunny/funny_bunny_1.jpg"
import Paper from "@material-ui/core/Paper"
import theme from "../theme"
import SubscribeForm from "./SubscribeForm"
import { LanguageContext } from "../layout"

const window = require("global/window")

const modalWindowWidth = window.innerWidth <= 1200 ? "100vw" : "50vw"
const boxMarginTop = window.innerWidth <= 599 ? "3%" : "5%"

const font1MarginBotom = window.innerWidth <= 599 ? "3%" : "8%"
const font2MarginBotom = window.innerWidth <= 599 ? "0%" : "2%"

const font1PaddingLeft = window.innerWidth <= 599 ? "10%" : "5%"
const font2PaddingLeft = window.innerWidth <= 599 ? "0%" : "7%"
const font3PaddingLeft = window.innerWidth <= 599 ? "8%" : "11%"

const scale1 = window.innerWidth <= 599 ? "1.1" : "2"
const scale2 = window.innerWidth <= 599 ? "0.7" : "1.2"
const scale3 = window.innerWidth <= 599 ? "0.4" : "1"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },
    maxHeight: " 100vh",
    width: modalWindowWidth,
    backgroundColor: theme.third.backgroundColor,
    // border: "2px solid ",
    // borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[5],

    zIndex: 9999,
    position: "fixed",
    inline: 0,
    outline: 0,
    padding: 0,
    margin: 0,
    fontSize: 0,
  },
  picture: {
    backgroundImage: `url(${Picture})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  contentRight: {
    textAlign: "center",
    marginTop: boxMarginTop,
  },

  font1: {
    fontSize: 12,
    transform: `scale(${scale1})`,
    fontWeight: "bold",
    lineHeight: 1.2,
    marginBottom: font1MarginBotom,
    color: theme.palette.primary.main,
    paddingLeft: font1PaddingLeft,
  },
  font2: {
    fontSize: 12,
    transform: `scale(${scale2})`,
    fontWeight: "regular",
    lineHeight: 1.1,
    marginBottom: font2MarginBotom,
    whiteSpace: "nowrap",
    paddingLeft: font2PaddingLeft,
  },
  font3: {
    fontSize: 12,
    transform: `scale(${scale3})`,
    fontWeight: "regular",
    marginBottom: "2%",
    whiteSpace: "nowrap",
    display: "flex",
    justifyContent: "center",
    paddingLeft: font3PaddingLeft,
  },
}))

export default function Impressum(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      // onClose={e => {
      //   props.onClose(e)
      //   props.visited(true)
      // }}
      open={props.open}
    >
      <Paper className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={5} className={classes.picture}></Grid>
          <Grid item xs={6} className={classes.contentRight}>
            {actLanguage === "DEU" ? (
              <Box className={classes.font1}>
                Hallo! Wir freuen uns,
                <br /> dass Sie hier sind!
              </Box>
            ) : actLanguage === "RUS" ? (
              <Box className={classes.font1}>
                Привет! Мы рады, <br /> что Вы здесь!
              </Box>
            ) : actLanguage === "ENG" ? (
              <Box className={classes.font1}>
                Hey there, thanks for <br /> checking us out!
              </Box>
            ) : (
              <Box className={classes.font1}>
                Hey there, thanks for <br /> checking us out!
              </Box>
            )}

            {actLanguage === "DEU" ? (
              <Box className={classes.font2}>
                Genießen Sie <b> 10% </b> Rabatt auf Ihre erste Bestellung,
                <br />
                wenn Sie abonnieren unsere Mailingliste.
              </Box>
            ) : actLanguage === "RUS" ? (
              <Box className={classes.font2}>
                Получите скидку <b> 10% </b> на свой первый заказ,
                <br /> подписавшись на нашу рассылку.
              </Box>
            ) : actLanguage === "ENG" ? (
              <Box className={classes.font2}>
                Enjoy <b>10%</b> off your first order when
                <br /> you subscribe to our mailing list.
              </Box>
            ) : (
              <Box className={classes.font2}>
                Enjoy <b>10%</b> off your first order when
                <br /> you subscribe to our mailing list.
              </Box>
            )}

            <Box>
              <SubscribeForm open={props.open} onClose={props.onClose} />
            </Box>
            <Box className={classes.font3}>
              {actLanguage === "DEU"
                ? "Informationen über unsere Datenschutzerklärung."
                : actLanguage === "RUS"
                ? "Информация о нашей политике конфиденциальности."
                : actLanguage === "ENG"
                ? "For more information please read our privacy policy."
                : "For more information please read our privacy policy."}
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              style={{
                margin: 0,
                marginTop: "1.5%",
                padding: 0,
                zIndex: 9999,
                position: "fixed",
              }}
              onClick={props.onClose}
              // onClick={e => {
              //   props.onClose(e)
              //   props.visited(true)
              // }}
            >
              <HighlightOffIcon
                style={{
                  fontSize: "1rem",
                  color: "rgba(0, 0, 0, 0.25)",
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  )
}
