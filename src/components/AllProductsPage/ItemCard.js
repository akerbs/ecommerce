// @ts-nocheck
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import React, { useEffect, useState } from "react"
import theme from "../theme"

import Box from "@material-ui/core/Box"
import Slide from "@material-ui/core/Slide"
import { Link } from "gatsby"
import inView from "in-view"

const useStyles = makeStyles({
  root: {},
  card: {
    margin: "10px 10px",
    transition: "0.3s linear",
    "&:hover": {
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

//  interface ItemCardProps {
//   category: string            
//   description: string
//   id: number
//   image: string
//   price: number
//   rating: {rate: number, count: number}
//   title: string
// }

export function ItemCard(props) {
  // console.log(`ITEMS ${props.id} PROPS SKU:`, props.sku);
  const classes = useStyles()
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
        key={props.id}
        id={props.id}
        onMouseOver={
          props.onMouseOver !== null
            ? () => props.onMouseOver(props?.id, true)
            : null
        }
        onMouseOut={
          props.onMouseOver !== null
            ? () => props.onMouseOut(props?.id, false)
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
              <Box fontSize="1rem" fontWeight="fontWeightBold">
                {props.sku.name}
              </Box>
              <br />
              <Box fontSize="0.8rem" fontWeight="fontWeightBold">
                {props.sku.currencySign} {(props.sku.price / 100).toFixed(2)}
              </Box>
            </Box>
          </div>
        </Slide>
      </Card>
    </div>
  )
}
