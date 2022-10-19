import React, { createContext, useEffect, useState } from "react"
import catClock from "../images/products/cat_clock/cat_clock_1.jpg"
import funnyBunny2 from "../images/products/funny_bunny/funny_bunny_1.jpg"
import funnyBunny from "../images/products/funny_bunny/funny_bunny_2.jpg"
import magicHat from "../images/products/magic_hat/magic_hat_1.jpg"

const ItemsContext = createContext()

const ItemsContextProvider = props => {
  const [products, setProducts] = useState([
    {
      linkId: "funny-bunny",
      productId: "prod_HqQT1Nni7ovIFj",
      nameEng: "Funny bunny",
      nameDeu: "Lustiger Hase",
      nameRus: "Забавный кролик",
      descriptionEng: "Great funny bunny",
      descriptionDeu: "Toller lustiger Hase",
      descriptionRus: "Отличный забавный кролик",
      videoId: "-i_94tW_iSM",
      firstImg: funnyBunny,
      scndImg: funnyBunny2,
      hovered: false,
      skuUsd: "price_1HNFcEHwITO0GSJr0BcSMXko",
      priceUsd: 0,
      currencyUsd: "USD",
      currencySignUsd: "$",
      skuEur: "price_1HGjcwHwITO0GSJrJEhUG0Aq",
      priceEur: 10000, 
      currencyEur: "EUR",
      currencySignEur: "€",
      skuRub: "price_1HNFbdHwITO0GSJr0cQgGhYQ",
      priceRub: 0,
      currencyRub: "RUB",
      currencySignRub: "₽",
      reviews: [
        {
          rating: 5,
          title: "Thank you!!!",
          review: "Super Bunny! I love it!",
          name: "Jenny F.",
          email: "skjdfhsd@sdft.sdf",
          date: "29/09/2020",
          linkId: "funny-bunny",
        },
        {
          rating: 3,
          title: "Not bad",
          review: "It 's ok",
          name: "Patric K.",
          email: "sdfsd@sdf.sd",
          date: "30/09/2020",
          linkId: "funny-bunny",
        },
      ],
      quantity: 1,
    },
    {
      linkId: "cat-clock",
      productId: "prod_HqorCSiih5dZWu",
      nameEng: "Cat clock",
      nameDeu: "Katzenuhr",
      nameRus: "Кошка-часы",
      descriptionEng: "Cat clock, color: black",
      descriptionDeu: "Katzenuhr, Farbe: schwarz",
      descriptionRus: "Кошка-часы, цвет: чёрный",
      videoId: "-i_94tW_iSM",
      firstImg: catClock,
      scndImg: funnyBunny2,
      hovered: false,
      skuUsd: "price_1HNFdPHwITO0GSJrVsLO5IdU",
      priceUsd: 0,
      currencyUsd: "USD",
      currencySignUsd: "$",
      skuEur: "price_1HH7DcHwITO0GSJrZz3vg6d9",
      priceEur: 2000, 
      currencyEur: "EUR",
      currencySignEur: "€",
      skuRub: "price_1HNFdwHwITO0GSJrpygU4AcI",
      priceRub: 0,
      currencyRub: "RUB",
      currencySignRub: "₽",
      reviews: [],
      quantity: 1,
    },
    {
      linkId: "magic-hat",
      productId: "prod_HrDKbPKHBo6qPK",
      nameEng: "Magic hat",
      nameDeu: "Magischer Hut",
      nameRus: "Волшебная шляпа",
      descriptionEng: "Magic hat, color: gray",
      descriptionDeu: "Magischer Hut, Farbe: grau",
      descriptionRus: "Волшебная шляпа, цвет: серый",
      videoId: "-i_94tW_iSM",
      firstImg: magicHat,
      scndImg: funnyBunny2,
      hovered: false,
      skuUsd: "price_1HMt2gHwITO0GSJrR1YuszFV",
      priceUsd: 0,
      currencyUsd: "USD",
      currencySignUsd: "$",
      skuEur: "price_1HHUu9HwITO0GSJrsoWoL51O",
      priceEur: 4000, 
      currencyEur: "EUR",
      currencySignEur: "€",
      skuRub: "price_1HNFZ7HwITO0GSJrieVKbbte",
      priceRub: 0,
      currencyRub: "RUB",
      currencySignRub: "₽",
      reviews: [],
      quantity: 1,
    },
  ])

  const [eurUsdRate, setEurUsdRate] = useState(0)
  const [eurRubRate, setEurRubRate] = useState(0)

  const handlePricesUpdate = id => {
    const nextState = products.map(item =>
      item.id === id
        ? {
            ...item,
            priceUsd: Number((item.priceEur * 0.9724).toFixed(2)),
            priceRub: Number((item.priceEur * 60.65).toFixed(2)),
          }
        : item
    )
    setProducts(nextState)
  }

  useEffect(() => {
    handlePricesUpdate()
  }, [eurRubRate, eurUsdRate])

  function GetExchangeRates() {
    try {
      let response = fetch("https://api.exchangeratesapi.io/latest?base=EUR")
        .then(res => {
          return res.json()
        })
        .then(data => {
          console.log("DA-DA", data)
          setEurRubRate(data?.rates?.RUB?.toFixed(2))
          setEurUsdRate(data?.rates?.USD?.toFixed(2))
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetExchangeRates()
  }, [])

  const changeHover = (val, bool) => {
    setProducts(prevstate =>
      prevstate.map((item, idx) =>
        idx === val ? { ...item, hovered: bool } : { ...item }
      )
    )
  }

  return (
    <ItemsContext.Provider
      value={{
        products,
        changeHover,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  )
}

export { ItemsContextProvider, ItemsContext }
