import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { CurrencyContext, LanguageContext } from "../layout"
const window = require("global/window")

const couponMargin =
  window.innerWidth <= 599 ? "6.7% 6% 0% 6%" : "5% 4.3% 0% 4.3%"

const useStyles = makeStyles(theme => ({
  textField: {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#c4c4c4",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  couponMsg: {
    margin: couponMargin,
    marginTop: 0,

    fontSize: 13,
    color: theme.palette.primary.main,
  },
}))

export default function () {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const { actCurrency } = useContext(CurrencyContext)

  const { changeTtlPriceFormattedWithCoupon, couponUsed } = useContext(
    CartContext
  )

  const [couponValue, setCouponValue] = useState("")
  const [couponMsg, setCouponMsg] = useState(null)

  useEffect(() => {
    if (couponValue === "" || couponValue === "undefined") {
      setCouponMsg(null)
    }
  }, [couponValue])

  function handleCoupon() {
    if (couponValue !== false && couponValue !== "10%OFF") {
      setCouponMsg(
        actLanguage === "DEU"
          ? "Code ist ungültig"
          : actLanguage === "RUS"
          ? "Код недействителен"
          : actLanguage === "ENG"
          ? "Code is invalid"
          : "Code is invalid"
      )
    } else if (couponUsed === true) {
      setCouponMsg(
        actLanguage === "DEU"
          ? "Rabatt wurde bere/*.js verwendet"
          : actLanguage === "RUS"
          ? "Скидка уже использовалась"
          : actLanguage === "ENG"
          ? "Discount was already used"
          : "Discount was already used"
      )
    } else if (couponUsed === false && couponValue === "10%OFF") {
      changeTtlPriceFormattedWithCoupon(10)
      // alert("10%OFF")
      setCouponMsg(
        actLanguage === "DEU"
          ? "Rabatt erfolgreich angewendet :)"
          : actLanguage === "RUS"
          ? "Скидка успешно применена :)"
          : actLanguage === "ENG"
          ? "Discount applied successfully :)"
          : "Discount applied successfully :)"
      )
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          margin: couponMargin,
        }}
      >
        <TextField
          className={classes.textField}
          inputProps={{
            style: {
              padding: "2.55%",
              width: "330px",
            },
          }}
          placeholder={
            actLanguage === "DEU"
              ? "Geschenkkarte oder Rabattcode"
              : actLanguage === "RUS"
              ? "Подарочная карта или код скидки"
              : actLanguage === "ENG"
              ? "Gift card or discount code"
              : "Gift card or discount code"
          }
          variant="outlined"
          onChange={e => setCouponValue(e.target.value)}
          value={couponValue}
        />
        <Button
          size="small"
          variant="contained"
          style={{ marginLeft: "5%", textTransform: "none", fontSize: 14 }}
          onClick={handleCoupon}
          disabled={!couponValue}
        >
          {actLanguage === "DEU"
            ? "Anwenden"
            : actLanguage === "RUS"
            ? "Применить"
            : actLanguage === "ENG"
            ? "Apply"
            : "Apply"}
        </Button>
      </div>
      <span className={classes.couponMsg}>{couponMsg}</span>

      <Divider variant="middle" light={true} />
    </div>
  )
}
