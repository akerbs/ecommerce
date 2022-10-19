import React, { useContext } from "react"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import StarIcon from "@material-ui/icons/Star"
import { LanguageContext } from "../layout"

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
  const { actLanguage } = useContext(LanguageContext)

  return (
    <div className={classes.root}>
      <Rating
        value={props.ratingValue}
        defaultValue={0}
        size="small"
        precision={0.5}
        readOnly
        emptyIcon={
          <StarBorderIcon
            fontSize="inherit"
            style={{ color: "black", cursor: "pointer" }}
          />
        }
        icon={
          <StarIcon
            fontSize="inherit"
            style={{ color: "black", cursor: "pointer" }}
          />
        }
      />
      <span>
        {props.item.reviews.length > 0 ? props.item.reviews.length : null}{" "}
        {actLanguage === "DEU"
          ? props.item.reviews.length === 1
            ? "Bewertung"
            : "Bewertungen"
          : actLanguage === "ENG"
          ? props.item.reviews.length === 1
            ? "Review"
            : "Reviews"
          : actLanguage === "RUS"
          ? props.item.reviews.length === 1 || props.item.reviews.length === 21
            ? "Отзыв"
            : props.item.reviews.length > 1 && props.item.reviews.length < 5
            ? "Отзывa"
            : props.item.reviews.length >= 5 && props.item.reviews.length <= 20
            ? "Отзывов"
            : null
          : null}
      </span>
    </div>
  )
}
