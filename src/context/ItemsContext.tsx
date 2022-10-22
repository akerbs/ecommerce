import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import catClock from "../images/products/cat_clock/cat_clock_1.jpg";
import funnyBunny2 from "../images/products/funny_bunny/funny_bunny_1.jpg";
import funnyBunny from "../images/products/funny_bunny/funny_bunny_2.jpg";
import magicHat from "../images/products/magic_hat/magic_hat_1.jpg";

const ItemsContext = createContext()

const ItemsContextProvider = ({children}: {children: React.ReactNode}) => {
  const [products, setProducts] = useState([
    {
      linkId: "funny-bunny",
      productId: "prod_HqQT1Nni7ovIFj",
      nameEng: "Funny bunny",
      nameDeu: "Lustiger Hase",
      nameRus: "Забавный кролик",
      descriptionEng: "Great funny bunny",
      descriptionDeu: "Toller lustiger Hase",
      descriptionRus: "Забавный кролик",
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
  const [eurUsdRate, setEurUsdRate] = useState(null)
  const [eurRubRate, setEurRubRate] = useState(null)

  useEffect(() => {
    GetExchangeRates()
  }, [])

  useEffect(() => {
    const newData = products.map(item => ({
      ...item,  key: item.itemId, priceRub: Number((item.priceEur * eurRubRate)), priceUsd: Number((item.priceEur * eurUsdRate)),
    }))
    setProducts(newData)
    console.log('NEW DATA', newData)
  }, [eurRubRate,eurUsdRate ])

  useEffect(() => {
    console.log('PRODUCTS changes', products);
    }, [products])

  async function GetExchangeRates() {
    try {
      let response = await axios.get(`https://api.exchangerate.host/latest`) 
      setEurRubRate((response?.data?.rates?.RUB)?.toFixed(2))
      setEurUsdRate((response?.data?.rates?.USD)?.toFixed(2))
      console.log("EURRUB", response?.data?.rates?.RUB?.toFixed(2))
      console.log("EURUSD", response?.data?.rates?.USD?.toFixed(2))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log('PROduCtS cHAnged', products);
  }, [products])

  const changeHover = (val, bool) => {
    // setProducts(prevstate =>
    //   prevstate.map((item, idx) =>
    //     idx === val ? { ...item, hovered: bool } : { ...item }
    //   )
    // )
  }

  return (
    <ItemsContext.Provider
      value={{
        products,
        changeHover,
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}

export { ItemsContextProvider, ItemsContext };

