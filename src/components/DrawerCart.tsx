import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import Fade from "@material-ui/core/Fade"
import IconButton from "@material-ui/core/IconButton"
import Slide from "@material-ui/core/Slide"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { useContext } from "react"
import CartOverview from "./Cart/CartOverview"
import { LanguageContext } from "./layout"

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

interface DrowerCartProps {
  onClose: () => void
  open: boolean
}

export default function DrawerCart({open,onClose}: DrowerCartProps) {
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <CssBaseline />
      <Drawer
        transitionDuration={{ enter: 500, exit: 300 }}
        onEscapeKeyDown={onClose}
        onBackdropClick={onClose}
        variant="temporary"
        anchor="right"
        open={open}
        classes={{
          paperAnchorRight: classes.drawerPaper,
          root: classes.drawer,
        }}
      >
        <div className={classes.drawerHeader}>
          <Slide in={open} timeout={800} direction="up">
            <div>
              <Fade in={open} timeout={1600}>
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
          <Slide in={open} timeout={800} direction="up">
            <div>
              <Fade in={open} timeout={1600}>
                <IconButton onClick={onClose}>
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

        <CartOverview onClose={onClose} open={open} />
      </Drawer>
    </>
  )
}
