import React, { useContext, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import SEO from "../../components/seo"
import ProductPageTemplate from "../../templates/ProductPageTemplate"
import { ItemsContext } from "../../context/ItemsContext"

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { products } = useContext(ItemsContext)

  const Obj = products.filter(x => {
    return x.productId === "prod_HqQT1Nni7ovIFj"
  })

  const item = Obj[0]

  console.log("OUE", item)

  return (
    <>
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <ProductPageTemplate item={item} />
    </>
  )
}
