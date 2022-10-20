export interface IProduct {
  category: string            // ----
  description: string
  id: number
  image: string
  price: number
  rating: {rate: number, count: number}
  title: string
}

interface IOldProduct {
  linkId: string
  productId: string               //id: number
  nameEng: string
  nameDeu: string
  nameRus: string
  descriptionEng: string
  descriptionDeu: string
  descriptionRus: string         // description: string
  videoId: string
  firstImg: string              // image: string
  scndImg: string
  hovered: false,
  skuUsd: string
  priceUsd: 0,
  currencyUsd: string
  currencySignUsd: string
  skuEur: string
  priceEur: 10000,             //price: number
  currencyEur: string           
  currencySignEur: string
  skuRub: string
  priceRub: 0,
  currencyRub: string
  currencySignRub: string
  quantity: 1,
  reviews: [
    {
      rating: 5,
      title: string
      review: string
      name: string
      email: string
      date: string
      linkId: string
    },
  ],
}