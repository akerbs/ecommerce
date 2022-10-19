import React, { useContext } from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { LanguageContext } from "../layout"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  tabItem: {
    textTransform: "none",
    fontWeight: "bold",
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

export default function (props) {
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className={classes.tabItem}
            label={
              actLanguage === "DEU"
                ? "Produkt-  beschreibung"
                : actLanguage === "RUS"
                ? "Описание товара"
                : actLanguage === "ENG"
                ? "Product description"
                : null
            }
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tabItem}
            label={
              actLanguage === "DEU"
                ? "Spezifikationen"
                : actLanguage === "RUS"
                ? "Характеристики"
                : actLanguage === "ENG"
                ? "Specifications"
                : null
            }
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tabItem}
            label={
              actLanguage === "DEU"
                ? "Versand & Rückgabe"
                : actLanguage === "RUS"
                ? "Доставка и возврат"
                : actLanguage === "ENG"
                ? " Shipping & Returns"
                : null
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* {props.data.description} */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          praesentium quaerat neque eos, veniam optio. Corporis placeat vero eum
          cum.
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
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
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Have a question about shipping and need more information? Please visit
          our Shipping FAQ page.
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
