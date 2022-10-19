import React, { useState, useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import CartOverview from "./Cart/CartOverview"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
// import { LanguageContext } from "../context/LanguageContext"
import { LanguageContext } from "../components/layout"

const window = require("global/window")

const drawerWidth = window.innerWidth <= 599 ? "100vw" : 450

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  cartTitle: {
    flexGrow: 1,
  },
}))

export default function DrawerCart(props) {
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <CssBaseline />
      <Drawer
        transitionDuration={{ enter: 500, exit: 300 }}
        onEscapeKeyDown={props.onClose}
        onBackdropClick={props.onClose}
        variant="temporary"
        anchor="right"
        open={props.open}
        classes={{
          paperAnchorRight: classes.drawerPaper,
          root: classes.drawer,
        }}
      >
        <div className={classes.drawerHeader}>
          <Slide in={props.open} timeout={800} direction="up">
            <div>
              <Fade in={props.open} timeout={1600}>
                <Typography variant="body1" className={classes.cartTitle}>
                  {actLanguage === "DEU"
                    ? "Ihr Warenkorb"
                    : actLanguage === "RUS"
                    ? "Ваша корзина"
                    : actLanguage === "ENG"
                    ? "Your cart"
                    : "Your cart"}
                </Typography>
              </Fade>
            </div>
          </Slide>
          <Slide in={props.open} timeout={800} direction="up">
            <div>
              <Fade in={props.open} timeout={1600}>
                <IconButton onClick={props.onClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </Fade>
            </div>
          </Slide>
        </div>

        <CartOverview onClose={props.onClose} open={props.open} />
      </Drawer>
    </>
  )
}
