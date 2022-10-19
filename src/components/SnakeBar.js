import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

export default function SnakeBar(props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={props.open}
      autoHideDuration={1000}
      onClose={props.onClose}
      message={props.message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={props.onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  )
}

// for parent component:

// const [openSnackbar, setOpenSnackbar] = useState(false)

// const handleSnakebarShow = () => {
//   setOpenSnackbar(true)
// }
// const handleSnakebarClose = (event, reason) => {
//   if (reason === "clickaway") {
//     return
//   }
//   setOpenSnackbar(false)
// }

// <SnakeBar
// open={openSnackbar}
// onClose={handleSnakebarClose}
// message="Item added into cart"
// />
