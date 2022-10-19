import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  btn: {
    zIndex: 2,
    position: "fixed",
    bottom: "3.3%",
    left: "6%",

    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    width: 40,
    maxWidth: 40,
    minWidth: 40,
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    borderRadius: 5,

    // "&:hover, &.Mui-focusVisible": {
    //   transition: "0.3s",
    //   color: theme.palette.primary.contrastText,
    //   backgroundColor: theme.palette.primary.light,
    // },
    border: "2px solid white",
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      // backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "6.5%",
    },
  },
}))

// const handleClick = () => {
//   window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
// }

// <Scroll showBelow={250} />

const Scroll = ({ showBelow }) => {
  const classes = useStyles()

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <Button
          onClick={handleClick}
          className={classes.btn}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </Button>
      )}
    </div>
  )
}
export default Scroll
