import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { LanguageContext } from "../layout"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {},
  btn: {
    fontSize: 15,
    fontWeight: "bold",
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    marginBottom: "0%",
  },
  accordion: {
    backgroundColor: "#fafafa",
    border: "none",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  accSummary: {
    border: "none",
    padding: 0,
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  accSummaryContent: {
    display: "block",

    "&$expanded": {
      margin: "12px 0",
    },
  },
  accDetails: {},
}))

export default function (props) {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(" ")
  const { actLanguage } = useContext(LanguageContext)

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        classes={{
          root: classes.accordion,
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          // expandIcon={<ExpandMoreIcon />}
          classes={{
            root: classes.accSummary,
            content: classes.accSummaryContent,
          }}
        >
          <Button className={classes.btn} variant="contained" color="default">
            {actLanguage === "DEU"
              ? "Produktbeschreibung"
              : actLanguage === "RUS"
              ? "Описание товара"
              : actLanguage === "ENG"
              ? "Product description"
              : null}
          </Button>
        </AccordionSummary>
        <AccordionDetails className={classes.accDetails}>
          <Typography>{props.data.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        classes={{
          root: classes.accordion,
        }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          // expandIcon={<ExpandMoreIcon />}
          classes={{
            root: classes.accSummary,
            content: classes.accSummaryContent,
          }}
        >
          <Button className={classes.btn} variant="contained" color="default">
            {actLanguage === "DEU"
              ? "Spezifikationen"
              : actLanguage === "RUS"
              ? "Характеристики"
              : actLanguage === "ENG"
              ? "Specifications"
              : null}
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            – Print: 1-color overall screen print
            <br />
            – Size: 45×65 cm
            <br />
            – Pouch size: 13×15,5 cm
            <br />
            – Cotton & rip-stop nylon mix
            <br />
            – Reusable/eco-friendly
            <br />
            – Water-resistant
            <br />
            – Machine-washable
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        classes={{
          root: classes.accordion,
        }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          // expandIcon={<ExpandMoreIcon />}
          classes={{
            root: classes.accSummary,
            content: classes.accSummaryContent,
          }}
        >
          <Button className={classes.btn} variant="contained" color="default">
            {actLanguage === "DEU"
              ? "Versand & Rückgabe"
              : actLanguage === "RUS"
              ? "Доставка и возврат"
              : actLanguage === "ENG"
              ? " Shipping & Returns"
              : null}
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Have a question about shipping and need more information? Please
            visit our Shipping FAQ page.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
