import React from "react"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import StarIcon from "@material-ui/icons/Star"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
    paddingRight: 15,
  },
}))

export default function RatingEl(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Rating
        value={props.ratingValue}
        defaultValue={0}
        size={props.starsSize}
        precision={0.5}
        readOnly
        emptyIcon={
          <StarBorderIcon
            fontSize="inherit"
            style={{ color: props.starsColor, cursor: "pointer" }}
          />
        }
        icon={
          <StarIcon
            fontSize="inherit"
            style={{ color: props.starsColor, cursor: "pointer" }}
          />
        }
      />
    </div>
  )
}
