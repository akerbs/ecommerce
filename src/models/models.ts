export interface IProduct {
  linkId: string
  productId: string               
  nameEng: string
  nameDeu: string
  nameRus: string
  descriptionEng: string
  descriptionDeu: string
  descriptionRus: string         
  videoId: string
  firstImg: string              
  scndImg: string
  hovered: false,
  skuUsd: string
  priceUsd: number,
  currencyUsd: string
  currencySignUsd: string
  skuEur: string
  priceEur: number,            
  currencyEur: string           
  currencySignEur: string
  skuRub: string
  priceRub: number,
  currencyRub: string
  currencySignRub: string
  quantity: number,
  reviews: [
    {
      rating: number,
      title: string
      review: string
      name: string
      email: string
      date: string
      linkId: string
    },
  ],
}
