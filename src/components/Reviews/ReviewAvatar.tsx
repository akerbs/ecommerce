import React from "react"
import Badge from "@material-ui/core/Badge"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core/styles"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: "5%",
    //   display: "flex",
    //   "& > *": {
    //     margin: theme.spacing(1),
    //   },
  },
}))

export default function BadgeAvatars(props) {
  const classes = useStyles()

  const firstLetter = props.name.split("")[0]
  // console.log("!!!!->!!!!!->", firstLetter)

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <CheckCircleIcon
            style={{ fontSize: "small", color: "rgb(28,194,134)" }}
          />
        }
      >
        <Avatar>{firstLetter}</Avatar>
      </Badge>
    </div>
  )
}
