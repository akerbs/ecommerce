import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import withWidth from "@material-ui/core/withWidth"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { CurrencyContext, LanguageContext } from "../components/layout"
import Accordion from "../components/ProductPage/Accordion"
import BreadCrumbs from "../components/ProductPage/BreadCrumbs"
import { AddToCartBtn, BuyNowBtn } from "../components/ProductPage/Buttons"
import Counter from "../components/ProductPage/CounterProductPage"
import Tabs from "../components/ProductPage/Tabs"
import VideoYT from "../components/ProductPage/VideoYT"
import RatingElBlack from "../components/Reviews/RatingElBlack"
import Reviews from "../components/Reviews/Reviews"
import Scroll from "../components/ScrollToTopBtn"
import { MainSwiper } from "../components/Swipers"
import { CartContext } from "../context/CartContext"
import { DrawerCartContext } from "../context/DrawerCartContext"
import "./clearfix.css"

const document = require("global/document")
const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {},
  contentWrapper: {
    maxWidth: "100vw",
    margin: 0,
    padding: 0,
    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      marginTop: "15%",
    },
  },
  boxLeft: {
    float: "left",
    width: "50%",
    padding: 0,
    margin: 0,
  },
  imgBoxLeft: {
    marginBottom: 0,
    paddingBottom: 0,
    display: "block",
    cursor: "pointer ",
  },
}))

const lightboxOptions = {
  settings: {},
  caption: { showCaption: false },
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
    showFullscreenButton: false,
    size: "50px",
  },
  thumbnails: { showThumbnails: false },
}

function ProductPageTemplate(props) {
  const classes = useStyles()
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)
  const { addToCart, clearCart } = useContext(CartContext)
  const { handleDrawerCartOpen } = useContext(DrawerCartContext)
  const [quantityOfItem, setQuantityOfItem] = useState(1)
  const [loading, setLoading] = useState(false)
  const [itemInView, setItemInView] = useState(null)

  function handleSetLoading() {
    setLoading(true)
  }

  function handleSetItemInView() {
    setItemInView(props.item.productId)
  }

  useEffect(() => {
    window.onpageshow = function () {
      console.log("PAGE IS LOADED")
    }
    handleSetItemInView()
    console.log("ITEM", props.item.productId, "is BROWSING")
  })

  function increment() {
    setQuantityOfItem(quantityOfItem + 1)
  }
  function decrement() {
    setQuantityOfItem(quantityOfItem - 1)
  }

  function resetCounter() {
    setQuantityOfItem(1)
  }
  // average rating calcul.:
  const newArr = props.item.reviews.map(el => Number(el.rating))
  const sum = newArr.reduce((a, b) => a + b, 0)
  const quantityOfReviews = newArr.length
  const averageRatingValue = sum / quantityOfReviews
  // console.log("->!!!!->", newArr, sum, quantity, averageRatingValue)

  function formatPrice(price) {
    if (!price) {
      return null
    } else {
      let priceF = price.toString()
      let beforeDot = priceF.slice(0, -2)
      let afterDot = priceF.slice(-2)
      let corrPrice = `${beforeDot}.${afterDot}`
      let formPrice = Number(corrPrice)
      let formPriceCorr = formPrice.toFixed(2)
      return formPriceCorr
    }
  }

  return (
    <div className={classes.root} id="root">
      <CssBaseline />
      <Header />
      <Scroll showBelow={250} />

      <Container className={classes.contentWrapper} id="wrapper">
        <Hidden smDown>
          <div id="content" className="clearfix">
            <div className={classes.boxLeft}>
              <SRLWrapper options={lightboxOptions}>
                <img src={props.item.firstImg} className={classes.imgBoxLeft} />
                <img src={props.item.scndImg} className={classes.imgBoxLeft} />
                <img src={props.item.firstImg} className={classes.imgBoxLeft} />
                <img src={props.item.scndImg} className={classes.imgBoxLeft} />
                <img src={props.item.firstImg} className={classes.imgBoxLeft} />
                <img src={props.item.scndImg} className={classes.imgBoxLeft} />
              </SRLWrapper>
            </div>

            <div className="boxRight">
              <BreadCrumbs item={props.item} />
              <br />
              <Typography variant="h4">
                <b>
                  {actLanguage === "DEU"
                    ? props.item.nameDeu
                    : actLanguage === "RUS"
                    ? props.item.nameRus
                    : actLanguage === "ENG"
                    ? props.item.nameEng
                    : null}
                </b>
              </Typography>
              <br />
              <Typography variant="h5">
                {actCurrency === "EUR"
                  ? props.item.currencySignEur
                  : actCurrency === "RUB"
                  ? props.item.currencySignRub
                  : actCurrency === "USD"
                  ? props.item.currencySignUsd
                  : null}{" "}
                {formatPrice(
                  actCurrency === "EUR"
                    ? props.item.priceEur
                    : actCurrency === "RUB"
                    ? props.item.priceRub
                    : actCurrency === "USD"
                    ? props.item.priceUsd
                    : null
                )}
              </Typography>
              <br />
              <Link
                to={`/products/${props.item.linkId}#reviews`}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <RatingElBlack
                  ratingValue={averageRatingValue}
                  item={props.item}
                />
              </Link>
              <br /> <br />
              <Counter
                incrementItem={increment}
                decrementItem={decrement}
                quantity={quantityOfItem}
                sku={props.item}
              />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                }}
              >
                <AddToCartBtn
                  addToCart={addToCart}
                  item={props.item}
                  quantityOfItem={quantityOfItem}
                  handleDrawerCartOpen={handleDrawerCartOpen}
                  resetCounter={resetCounter}
                />

                <BuyNowBtn
                  loading={loading}
                  handleSetLoading={handleSetLoading}
                  addToCart={addToCart}
                  clearCart={clearCart}
                  item={props.item}
                  quantityOfItem={quantityOfItem}
                />
              </div>
              <br />
              <br />
              <br />
              <Tabs data={props.item} />
              <br />
            </div>
          </div>
          <VideoYT itemInView={itemInView} itemInfo={props.item} />
          <br />
          <div id="reviews">
            <Reviews
              reviews={props.item.reviews}
              itemInfo={props.item}
              averageRatingValue={averageRatingValue}
            />
          </div>
          <br /> <br /> <br />
        </Hidden>
        {/* Middle up hide - but show for little viewport */}
        <Hidden mdUp>
          <MainSwiper data={props.item} />
          <div
            style={{
              margin: "0% 5%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BreadCrumbs item={props.item} />
            <br />
            <Typography variant="h4" align="center">
              <b>
                {actLanguage === "DEU"
                  ? props.item.nameDeu
                  : actLanguage === "RUS"
                  ? props.item.nameRus
                  : actLanguage === "ENG"
                  ? props.item.nameEng
                  : null}
              </b>
            </Typography>
            <br />
            <Typography variant="h5">
              {actCurrency === "EUR"
                ? props.item.currencySignEur
                : actCurrency === "RUB"
                ? props.item.currencySignRub
                : actCurrency === "USD"
                ? props.item.currencySignUsd
                : null}{" "}
              {formatPrice(
                actCurrency === "EUR"
                  ? props.item.priceEur
                  : actCurrency === "RUB"
                  ? props.item.priceRub
                  : actCurrency === "USD"
                  ? props.item.priceUsd
                  : null
              )}
            </Typography>
            <br />
            <Link
              to={`/products/${props.item.linkId}#reviews`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
            >
              <RatingElBlack
                ratingValue={averageRatingValue}
                item={props.item}
              />
            </Link>
            <br /> <br />
            <Counter
              incrementItem={increment}
              decrementItem={decrement}
              quantity={quantityOfItem}
              sku={props.item}
            />
            <br />
            <AddToCartBtn
              addToCart={addToCart}
              item={props.item}
              quantityOfItem={quantityOfItem}
              handleDrawerCartOpen={handleDrawerCartOpen}
              resetCounter={resetCounter}
            />
            <BuyNowBtn
              loading={loading}
              handleSetLoading={handleSetLoading}
              addToCart={addToCart}
              item={props.item}
              quantityOfItem={quantityOfItem}
              clearCart={clearCart}
            />
            <br /> <br />
            <Accordion data={props.item} />
          </div>
          <br /> <br />
          <br /> <br /> <br />
          <VideoYT itemInView={itemInView} itemInfo={props.item} />
          <br />
          <div
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              id="reviews"
              style={{
                width: "100vw",
                margin: 0,
                padding: 0,
              }}
            >
              <Reviews
                reviews={props.item.reviews}
                itemInfo={props.item}
                averageRatingValue={averageRatingValue}
              />
            </div>
          </div>
        </Hidden>
      </Container>
      <Footer />
    </div>
  )
}

ProductPageTemplate.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(ProductPageTemplate)
