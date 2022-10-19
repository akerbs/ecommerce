import React, { useState, createContext } from "react"

const DrawerMenuContext = createContext()

const DrawerMenuContextProvider = props => {
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false)

  const handleDrawerMenuOpen = () => {
    setOpenDrawerMenu(true)
    document.body.style.position = "fixed"
  }
  const handleDrawerMenuClose = () => {
    setOpenDrawerMenu(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <DrawerMenuContext.Provider
      value={{
        openDrawerMenu,
        handleDrawerMenuOpen,
        handleDrawerMenuClose,
      }}
    >
      {props.children}
    </DrawerMenuContext.Provider>
  )
}

export { DrawerMenuContextProvider, DrawerMenuContext }
