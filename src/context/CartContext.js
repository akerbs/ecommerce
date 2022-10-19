import React, { useState, createContext, useEffect, useContext } from "react"
import { CurrencyContext } from "../components/layout"

const CartContext = createContext()

const CartContextProvider = props => {
  const [cart, setCart] = useState([])
  const { actCurrency } = useContext(CurrencyContext)

  function addToCart(el, quantity) {
    if (cart.find(x => x.productId === el.productId)) {
      let hardCopy = [...cart]
      for (let i in hardCopy) {
        if (hardCopy[i].productId === el.productId) {
          hardCopy[i].quantity = hardCopy[i].quantity + quantity
          break
        }
      }
      setCart(hardCopy)
    } else {
      setCart([...cart, { ...el, quantity: quantity }])
    }
  }

  function incrCartItem(el) {
    let hardCopy = [...cart]
    for (let i in hardCopy) {
      if (hardCopy[i].productId === el.productId) {
        hardCopy[i].quantity = hardCopy[i].quantity + 1
        break
      }
    }
    setCart(hardCopy)
  }

  function decrCartItem(el) {
    let hardCopy = [...cart]
    for (let i in hardCopy) {
      if (hardCopy[i].productId === el.productId) {
        hardCopy[i].quantity = hardCopy[i].quantity - 1
        break
      }
    }
    setCart(hardCopy)
  }

  function removeFromCart(el) {
    let hardCopy = [...cart]
    hardCopy = hardCopy.filter(cartItem => cartItem.productId !== el.productId)
    setCart(hardCopy)
  }

  function clearCart() {
    // let hardCopy = [...cart]
    // hardCopy = hardCopy.splice(0, hardCopy.length)
    // setCart(hardCopy)
    setCart([])
  }

  let currentCurrency =
    actCurrency === "EUR"
      ? "eur"
      : actCurrency === "RUB"
      ? "rub"
      : actCurrency === "USD"
      ? "usd"
      : null

  let currentCurrencySign =
    actCurrency === "EUR"
      ? "€"
      : actCurrency === "RUB"
      ? "₽"
      : actCurrency === "USD"
      ? "$"
      : null

  const [ttlPrice, setTtlPrice] = useState(0)
  const [ttlPriceFormatted, setTtlPriceFormatted] = useState(0)
  const [couponUsed, setCouponUsed] = useState(false)

  function changeTtlPriceFormattedWithCoupon(discountPercent) {
    if (couponUsed === false) {
      const newTtlPrice =
        ttlPriceFormatted - (discountPercent / 100) * ttlPriceFormatted

      setTtlPriceFormatted(newTtlPrice.toFixed(2))
      setCouponUsed(true)
    } else {
      alert("discount was already used")
    }
  }

  useEffect(() => {
    console.log("ttlPriceFormatted was changed", ttlPriceFormatted)
  }, [ttlPriceFormatted])

  function updateTtlPrice() {
    const newArr = cart.map(el =>
      actCurrency === "EUR"
        ? el.priceEur * el.quantity
        : actCurrency === "RUB"
        ? el.priceRub * el.quantity
        : actCurrency === "USD"
        ? el.priceUsd * el.quantity
        : null
    )
    let ttlPr = newArr.reduce((a, b) => a + b, 0)
    setTtlPrice(ttlPr)
  }

  useEffect(() => {
    console.log("CART CONTAINS:", cart)
    updateTtlPrice()
    console.log("->TTL PRICE!: ->", ttlPrice)
  }, [cart, actCurrency])

  function updateTtlPriceFormatted() {
    let priceF = ttlPrice.toString()
    let beforeDot = priceF.slice(0, -2)
    let afterDot = priceF.slice(-2)
    let corrPrice = `${beforeDot}.${afterDot}`
    let ttlPrForm = Number(corrPrice)
    let ttlPrFormCorr = ttlPrForm.toFixed(2)
    setTtlPriceFormatted(ttlPrFormCorr)
  }

  useEffect(() => {
    updateTtlPriceFormatted()
    console.log("TTL PRICE OF ITEMS IN CART (formatted):", ttlPriceFormatted)
  }, [ttlPrice])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        incrCartItem,
        decrCartItem,
        ttlPrice,
        ttlPriceFormatted,
        currentCurrency,
        currentCurrencySign,
        changeTtlPriceFormattedWithCoupon,
        couponUsed,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContextProvider, CartContext }
