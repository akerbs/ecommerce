import React, { useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Header from "../../components/header"
import Footer from "../../components/footer"

const useStyles = makeStyles(theme => ({
  main: {
    // minHeight: " 80vh",
    marginTop: "10vh",
  },
}))

export default function PrivacyPolicy() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className={classes.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero
        culpa molestias quas rerum laboriosam ea placeat, tempora veniam totam
        magnam ipsa minus sit perspiciatis aperiam expedita nihil quia a
        aspernatur nostrum officiis. Id pariatur ratione nulla temporibus
        expedita molestiae possimus labore! Quidem commodi at assumenda
        voluptatum consequatur veniam temporibus similique quo repellendus
        provident officiis nam non obcaecati magnam inventore incidunt atque
        libero vitae, nostrum reiciendis quia ducimus. Consequuntur perferendis
        deserunt vitae. Vitae ullam similique vero et minima illum
        necessitatibus quidem neque ea illo molestiae molestias repudiandae,
        laudantium officia nostrum facilis assumenda velit. Sit laboriosam
        doloremque dolores culpa modi. Deleniti?
      </Container>
      <Footer />
    </>
  )
}
