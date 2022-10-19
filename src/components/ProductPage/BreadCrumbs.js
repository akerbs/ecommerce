import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { LanguageContext } from "../layout"

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "0.875rem",
  },
  ol: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      // flexWrap: "nowrap",
    },
  },
  links: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}))

// function handleClick(event) {
//   event.preventDefault()
//   console.info("You clicked a breadcrumb.")
// }

export default function (props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      // className={classes.root}
      classes={{
        root: classes.root,
        ol: classes.ol,
      }}
      separator=" > "
    >
      <Link
        color="inherit"
        to="/"
        // onClick={handleClick}
        className={classes.links}
      >
        {actLanguage === "DEU"
          ? "Home"
          : actLanguage === "RUS"
          ? "Главная"
          : actLanguage === "ENG"
          ? "Home"
          : null}
      </Link>
      <Link
        color="inherit"
        to="/all-products"
        // onClick={handleClick}
        className={classes.links}
      >
        {actLanguage === "DEU"
          ? "Alle Produkten"
          : actLanguage === "RUS"
          ? "Все товары"
          : actLanguage === "ENG"
          ? "All products"
          : null}
      </Link>
      <Typography color="textSecondary" variant="body2">
        {actLanguage === "DEU"
          ? props.item.nameDeu
          : actLanguage === "RUS"
          ? props.item.nameRus
          : actLanguage === "ENG"
          ? props.item.nameEng
          : null}
      </Typography>
    </Breadcrumbs>
  )
}
