import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import { useEffect, useState } from "react"
import theme from "../theme"

import Box from "@material-ui/core/Box"
import Slide from "@material-ui/core/Slide"
import { Link } from "gatsby"
import inView from "in-view"
import { IProduct } from '../../models/models'

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

export function ItemCard({linkId, productId }: IProduct) {
  // console.log(`ITEMS ${props.id} PROPS SKU:`, props.sku);
  const classes = useStyles()
  const [show, setShow] = useState(false)

  function startInView() {
    setShow(true)
  }
  useEffect(() => {
    inView(`#${linkId}`).once("enter", startInView)
    inView.threshold(0.3)
  })

  return (
    <div id={linkId}>
      <Card
        className={classes.card}
        key={productId}
        id={productId}
        onMouseOver={
          props.onMouseOver !== null
            ? () => props.onMouseOver(productId, true)
            : null
        }
        onMouseOut={
          props.onMouseOver !== null
            ? () => props.onMouseOut(productId, false)
            : null
        }
        style={{ overflow: "hidden" }}
      >
        <Slide in={show} timeout={700 + productId * 200} direction="up">
          <div>
            <Link to={`/products/${linkId}`} className={classes.link}>
              <img
                style={{ width: "100%" }}
                className={
                  productId !== 0 ? classes.img : classes.imgNoHoverEffect
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
