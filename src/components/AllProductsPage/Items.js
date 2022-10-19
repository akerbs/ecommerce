import React, { useState, useContext, useEffect } from "react"
import { ItemsContext } from "../../context/ItemsContext"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"

import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import ItemCard from "./ItemCard"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({})

export default function () {
  const classes = useStyles()
  const { products, changeHover } = useContext(ItemsContext)
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)

  return (
    <>
      <Grid container spacing={0}>
        {products.map((item, idx) => {
          const newSku = {
            name:
              actLanguage === "ENG"
                ? item.nameEng
                : actLanguage === "DEU"
                ? item.nameDeu
                : actLanguage === "RUS"
                ? item.nameRus
                : null,
            description:
              actLanguage === "ENG"
                ? item.descriptionEng
                : actLanguage === "DEU"
                ? item.descriptionDeu
                : actLanguage === "RUS"
                ? item.descriptionRus
                : null,
            productId: item.productId,
            linkId: item.linkId,
            timeoutShow: item.timeoutShow,
            inview: item.inview,

            sku:
              actCurrency === "USD"
                ? item.skuUsd
                : actCurrency === "EUR"
                ? item.skuEur
                : actCurrency === "RUB"
                ? item.skuRub
                : null,
            price:
              actCurrency === "USD"
                ? item.priceUsd
                : actCurrency === "EUR"
                ? item.priceEur
                : actCurrency === "RUB"
                ? item.priceRub
                : null,
            currency:
              actCurrency === "USD"
                ? item.currencyUsd
                : actCurrency === "EUR"
                ? item.currencyEur
                : actCurrency === "RUB"
                ? item.currencyRub
                : null,
            currencySign:
              actCurrency === "USD"
                ? item.currencySignUsd
                : actCurrency === "EUR"
                ? item.currencySignEur
                : actCurrency === "RUB"
                ? item.currencySignRub
                : null,
            image: item.firstImg,
            firstImg: item.firstImg,
            scndImg: item.scndImg,
            hovered: item.hovered,
          }

          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ItemCard
                sku={newSku}
                key={item.productId}
                id={idx}
                onMouseOver={idx === 0 ? changeHover : null}
                onMouseOut={idx === 0 ? changeHover : null}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
