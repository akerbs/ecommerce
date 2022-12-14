import { useEffect, useState } from "react"
const window = require("global/window")

export default function useResponsiveFontSize() {
  const getFontSize = () => (window.innerWidth < 450 ? "16px" : "18px")
  const [fontSize, setFontSize] = useState(getFontSize)

  useEffect(() => {
    const onResize = () => {
      setFontSize(getFontSize())
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  })

  return fontSize
}
