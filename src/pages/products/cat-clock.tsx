import React, { useContext, useEffect } from "react"
import SEO from "../../components/seo"
import { ItemsContext } from "../../context/ItemsContext"
import ProductPageTemplate from "../../templates/ProductPageTemplate"

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { products } = useContext(ItemsContext)

  const Obj = products.filter(x => {
    return x.productId === "prod_HqorCSiih5dZWu"
  })

  const item = Obj[0]

  console.log("OUE", item)

  return (
    <>
      <SEO title="Cat clock" keywords={[`gatsby`, `application`, `react`]} />
      <ProductPageTemplate item={item} />
    </>
  )
}
