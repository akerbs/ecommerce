import React, { useMemo, useContext } from "react"
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js"
// import axios from "axios";
import useResponsiveFontSize from "../useResponsiveFontSize"
import { CartContext } from "../../context/CartContext"

const useOptions = () => {
  const fontSize = useResponsiveFontSize()
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  )

  return options
}

const SplitForm = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    incrCartItem,
    decrCartItem,
    ttlPrice,
    ttlPriceFormatted,
    currentCurrency,
  } = useContext(CartContext)

  const stripe = useStripe()
  const elements = useElements()
  const options = useOptions()

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    })

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod)
      try {
        const { id } = paymentMethod
        const response = await fetch("http://localhost:8080/stripe/charge", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
          body: JSON.stringify({
            amount: ttlPrice,
            currency: currentCurrency,
            id: id,
          }),
        })

        if (response.ok) {
          console.log("CheckoutForm.js 25 | payment successful!")
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error)
      }
    } else {
      console.log(error.message)
    }

    // const payload = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardNumberElement),
    // });
    // console.log("[PaymentMethod]", payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]")
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event)
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]")
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]")
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]")
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event)
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]")
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]")
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]")
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event)
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]")
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]")
          }}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

export default SplitForm
