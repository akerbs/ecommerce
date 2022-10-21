import IconButton from "@material-ui/core/IconButton"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import React from "react"

interface SnakeBarProps {
  onClose: () => void
  open: boolean
  message: string
}

export default function SnakeBar({message,onClose,open}: SnakeBarProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={1000}
      onClose={onClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
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
