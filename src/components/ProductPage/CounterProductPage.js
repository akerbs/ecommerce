import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    // height: "30px",
    // paddingTop: "5px",
    // paddingBottom: "7px",
    // minWidth: "90px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  btnLeft: {
    // height: "30px",
    // width: "30px",
    // maxWidth: "30px",
    // minWidth: "30px",
    borderRadius: "8px 0 0 8px",
  },
  btnRight: {
    // height: "30px",
    // width: "30px",
    // maxWidth: "30px",
    // minWidth: "30px",
    borderRadius: "0 8px 8px 0 ",
  },
}))

export default function (props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        className={classes.btnLeft}
        onClick={() => props.decrementItem(props.sku)}
        disabled={props.quantity <= 1 ? true : false}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginBottom: 4 }}
        >
          -
        </Typography>
      </Button>

      <span style={{ marginTop: "1%" }}>{props.quantity}</span>

      <Button
        className={classes.btnRight}
        onClick={() => props.incrementItem(props.sku)}
        disabled={props.quantity >= 99 ? true : false}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginBottom: 4 }}
        >
          +
        </Typography>
      </Button>
    </div>
  )
}
