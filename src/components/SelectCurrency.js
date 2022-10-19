import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { CurrencyContext } from "../components/layout"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 80,

    margin: 0,
  },
  select: {
    "& .MuiSelect-icon": {
      // color: theme.palette.primary.dark,
      width: "1em",
      padding: 0,
    },
  },
  // icon: {
  //   padding: 0,
  // },
}))

export default function SelectCurrency() {
  const classes = useStyles()

  const { actCurrency, handleCurrencyChange } = useContext(CurrencyContext)

  return (
    <>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          className={classes.select}
          // classes={{
          //   icon: classes.icon,
          // }}
          disableUnderline={true}
          // autoWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={actCurrency}
          onChange={e => {
            handleCurrencyChange(e)
          }}
          // onChange={handleCurrencyChange}
          style={{ color: "white", maxWidth: "3.5rem" }}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"RUB"}>RUB</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
