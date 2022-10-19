import { loadStripe } from "@stripe/stripe-js"
import "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    // stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY_TEST)
    stripePromise = loadStripe(
      "pk_test_51HGUuRHwITO0GSJr0YK6FwbE17LUTst9UCvm2uH0RdjBtAnQJqgPmDn0BSunRc8FIEXRW3HatsFd1uDHkfaGJtUm00IA2780Iw"
    )
  }
  return stripePromise
}

export default getStripe
