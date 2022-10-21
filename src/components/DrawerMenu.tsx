import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import Fade from "@material-ui/core/Fade"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Slide from "@material-ui/core/Slide"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { Link } from "gatsby"
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
    justifyContent: "flex-end",
  },

  drawerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    // width: "100vw",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}))

interface DrawerMenuProps {
  onClose: () => void
  open: boolean
}

export default function DrawerMenu({open, onClose}: DrawerMenuProps) {
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
        anchor="left"
        open={open}
        classes={{
          paperAnchorLeft: classes.drawerPaper,
          root: classes.drawer,
        }}
      >
        <div className={classes.drawerHeader}>
          <Slide in={open} timeout={800} direction="up">
            <div>
              <Fade in={open} timeout={1600}>
                <IconButton onClick={onClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </Fade>
            </div>
          </Slide>
        </div>
        <Slide in={open} timeout={1000} direction="up">
          <div>
            <Fade in={open} timeout={2000}>
              <List>
                <Link
                  to="/"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={onClose}
                >
                  {/* <Slide in={open} timeout={1020} direction="up">
              <div>
                <Fade in={open} timeout={2020}> */}
                  <ListItem button key={"HOME"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          HOME
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>
                <Link
                  to="/all-products"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={onClose}
                >
                  {/* <Slide in={open} timeout={1040} direction="up">
              <div>
                <Fade in={open} timeout={2040}> */}
                  <ListItem button key={"ALL PRODUCTS"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          ALL PRODUCTS
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>
                <Link
                  to="#"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={onClose}
                >
                  {/* <Slide in={open} timeout={1060} direction="up">
              <div>
                <Fade in={open} timeout={2060}> */}
                  <ListItem button key={"ABOUT US"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          ABOUT US
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>

                <Link
                  to="#"
                  className={classes.drawerLink}
                  // activeClassName={classes.active}
                  onClick={onClose}
                >
                  {/* <Slide in={open} timeout={1080} direction="up">
              <div>
                <Fade in={open} timeout={2080}> */}
                  <ListItem button key={"CONTACT US"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          CONTACT US
                        </Typography>
                      }
                    />
                  </ListItem>
                  {/* </Fade>
              </div>
            </Slide> */}
                </Link>
              </List>
            </Fade>
          </div>
        </Slide>
      </Drawer>
    </>
  )
}
