import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    height: "30px",
    paddingTop: "5px",
    paddingBottom: "5px",
    minWidth: "80px",
    display: "inline",
    borderRadius: "8px",
  },
  btnLeft: {
    height: "20px",
    width: "20px",
    maxWidth: "20px",
    minWidth: "20px",
    borderRadius: "8px 0 0 8px",
  },
  btnRight: {
    height: "20px",
    width: "20px",
    maxWidth: "20px",
    minWidth: "20px",
    borderRadius: "0 8px 8px 0 ",
  },
}))

export default function (props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        className={classes.btnLeft}
        onClick={() => props.decrementItem(props.cartItem)}
        disabled={props.quantity <= 1 ? true : false}
      >
        <Typography
          variant="caption"
          color="textSecondary"
          style={{ marginBottom: 4 }}
        >
          -
        </Typography>
      </Button>

      <span style={{ minWidth: "60px" }}>
        <Typography variant="caption" style={{}}>
          {props.quantity}{" "}
        </Typography>
      </span>

      <Button
        className={classes.btnRight}
        onClick={() => props.incrementItem(props.cartItem)}
        disabled={props.quantity >= 99 ? true : false}
      >
        <Typography
          variant="caption"
          color="textSecondary"
          style={{ marginBottom: 4 }}
        >
          +
        </Typography>
      </Button>
    </div>
  )
}
