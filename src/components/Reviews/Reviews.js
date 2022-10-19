import React, { useContext } from "react"
import Container from "@material-ui/core/Container"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import { Link, navigate } from "gatsby"
import Rating from "@material-ui/lab/Rating"
import { makeStyles } from "@material-ui/core/styles"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import RateReviewIcon from "@material-ui/icons/RateReview"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../layout"
import ReviewForm from "./ReviewForm"
import RatingEl from "./RatingEl"
import ReviewAvatar from "./ReviewAvatar"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "20%",
  },
  button: {
    margin: theme.spacing(1),
  },
  accordion: {
    backgroundColor: "rgb(255,255,255)",
    border: "none",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  accSummary: {
    border: "none",
    padding: 0,
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  accSummaryContent: {
    display: "block",

    "&$expanded": {
      margin: "12px 0",
    },
  },
  accHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  reviewItemWrapper: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  reviewItemDate: {
    fontSize: 14,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
}))

export default function (props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const [expanded, setExpanded] = React.useState(false)

  const handleAccOpen = () => {
    setExpanded(true)
  }
  const handleAccClose = () => {
    setExpanded(false)
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Accordion
        square
        expanded={expanded}
        onChange={e => handleAccOpen(e)}
        classes={{
          root: classes.accordion,
        }}
      >
        <AccordionSummary
          classes={{
            root: classes.accSummary,
            content: classes.accSummaryContent,
          }}
        >
          <div className={classes.accHeader}>
            <div style={{ display: "flex" }}>
              <RatingEl ratingValue={props.averageRatingValue} />
              <span style={{ marginTop: "1%" }}>
                {props.reviews.length > 0 ? props.reviews.length : null}{" "}
                {actLanguage === "DEU"
                  ? props.reviews.length === 1
                    ? "Bewertung"
                    : "Bewertungen"
                  : actLanguage === "ENG"
                  ? props.reviews.length === 1
                    ? "Review"
                    : "Reviews"
                  : actLanguage === "RUS"
                  ? props.reviews.length === 1 || props.reviews.length === 21
                    ? "Отзыв"
                    : props.reviews.length > 1 && props.reviews.length < 5
                    ? "Отзывa"
                    : props.reviews.length >= 5 && props.reviews.length <= 20
                    ? "Отзывов"
                    : null
                  : null}
              </span>
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<RateReviewIcon />}
              size="small"
            >
              {actLanguage === "DEU"
                ? "eine Bewertung schreiben"
                : actLanguage === "RUS"
                ? "написать отзыв"
                : actLanguage === "ENG"
                ? "write a review"
                : null}
            </Button>
          </div>
          <hr />
        </AccordionSummary>
        <AccordionDetails>
          <ReviewForm
            itemInfo={props.itemInfo}
            handleAccClose={handleAccClose}
          />
        </AccordionDetails>
      </Accordion>
      <br /> <br />
      {!props.reviews.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RatingEl
            ratingValue={5}
            starsSize="small"
            starsColor="rgb(89,157,210)"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="small"
            onClick={e => {
              handleAccOpen(e)
              setTimeout(function () {
                navigate(`/products/${props.itemInfo.linkId}#reviews`)
              }, 300)
            }}
          >
            {actLanguage === "DEU"
              ? "als Erster eine Bewertung schreiben"
              : actLanguage === "RUS"
              ? "быть первым, кто напишет отзыв"
              : actLanguage === "ENG"
              ? "to be first to write a review"
              : null}
          </Button>
        </div>
      ) : (
        <div>
          {actLanguage === "DEU"
            ? "Bewertungen"
            : actLanguage === "RUS"
            ? "Отзывы"
            : actLanguage === "ENG"
            ? "Reviews"
            : null}{" "}
          ({props.reviews.length})
          <hr />
          {props.reviews.map((rev, i) => (
            // <div key={`rev-${i}`}>{rev.review}</div>
            <ReviewItem {...rev} key={`rev-${i}`} />
          ))}
        </div>
      )}
    </Container>
  )
}

const ReviewItem = props => {
  const classes = useStyles()

  // const [price, setPrice] = useState(props.price);
  return (
    <>
      <div className={classes.reviewItemWrapper}>
        <div style={{ display: "flex" }}>
          <ReviewAvatar name={props.name} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: 12, whiteSpace: "nowrap", marginBottom: "2%" }}
            >
              <span
                style={{
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                }}
              >
                {props.name}
              </span>{" "}
              Verified Buyer
            </span>
            <RatingEl ratingValue={props.rating} starsSize="small" />

            <span style={{ fontSize: 14, fontWeight: "bold", marginTop: "2%" }}>
              {props.title}
            </span>
            <span style={{ fontSize: 14, marginBottom: "1%" }}>
              {props.review}
            </span>
          </div>
        </div>

        <div>
          <span className={classes.reviewItemDate}>{props.date}</span>
        </div>
      </div>
      <hr />
    </>
  )
}
