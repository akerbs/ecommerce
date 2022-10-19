import React, { useContext, useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
import { DrawerCartContext } from "../../context/DrawerCartContext"

import Button from "@material-ui/core/Button"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  root: {},
  card: {
    // maxWidth: 300,
    // height: 300,

    margin: "10px 10px",
    // borderRadius: "5px 10px 10px 5px",
    // maskImage: "radial-gradient(white, black)",
    // borderRadius: "100%",
    transition: "0.3s linear",
    "&:hover": {
      // boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
      boxShadow: " -3px 2px 10px -1px rgba(0, 0, 0, 0.3)",
    },
  },
  btnAddToCart: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
  imgNoHoverEffect: {
    width: "100%",
    transition: "1s",
  },
  img: {
    width: "100%",
    transition: "1s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
})

export default function (props) {
  const classes = useStyles()

  const { handleDrawerCartOpen } = useContext(DrawerCartContext)

  const [show, setShow] = useState(false)

  function startInView() {
    setShow(true)
  }
  useEffect(() => {
    inView(`#${props.sku.linkId}`).once("enter", startInView)
    inView.threshold(0.3)
  })

  return (
    <div id={props.sku.linkId}>
      <Card
        className={classes.card}
        id={props.id}
        onMouseOver={
          props.onMouseOver !== null
            ? () => props.onMouseOver(props.id, true)
            : null
        }
        onMouseOut={
          props.onMouseOver !== null
            ? () => props.onMouseOut(props.id, false)
            : null
        }
        style={{ overflow: "hidden" }}
      >
        <Slide in={show} timeout={700 + props.id * 200} direction="up">
          <div>
            <Link to={`/products/${props.sku.linkId}`} className={classes.link}>
              <img
                style={{ width: "100%" }}
                className={
                  props.id !== 0 ? classes.img : classes.imgNoHoverEffect
                }
                src={props.sku.hovered ? props.sku.scndImg : props.sku.firstImg}
                alt={props.sku.name}
              />
            </Link>
            <Box
              textAlign="center"
              lineHeight={0.7}
              style={{ marginBottom: 30 }}
            >
              {/* <Typography component="div"> */}
              <Box fontSize="1rem" fontWeight="fontWeightBold">
                {props.sku.name}
              </Box>
              <br />
              <Box fontSize="0.8rem" fontWeight="fontWeightBold">
                {props.sku.currencySign} {(props.sku.price / 100).toFixed(2)}
              </Box>
              {/* </Typography> */}
            </Box>
          </div>
        </Slide>
      </Card>
    </div>
  )
}
