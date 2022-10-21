import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { makeStyles } from "@material-ui/core/styles"
import { useContext } from "react"
import { CurrencyContext } from "./layout"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    margin: 0,
  },
  select: {
    "& .MuiSelect-icon": {
      width: "1em",
      padding: 0,
    },
  },
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
