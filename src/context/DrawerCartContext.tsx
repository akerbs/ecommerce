import React, { useState, createContext } from "react"

const DrawerCartContext = createContext()

const DrawerCartContextProvider = props => {
  const [openDrawerCart, setOpenDrawerCart] = useState(false)

  function handleDrawerCartOpen() {
    setOpenDrawerCart(true)
    document.body.style.position = "fixed"
  }
  function handleDrawerCartClose() {
    setOpenDrawerCart(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <DrawerCartContext.Provider
      value={{
        openDrawerCart,
        handleDrawerCartOpen,
        handleDrawerCartClose,
      }}
    >
      {props.children}
    </DrawerCartContext.Provider>
  )
}

export { DrawerCartContextProvider, DrawerCartContext }
