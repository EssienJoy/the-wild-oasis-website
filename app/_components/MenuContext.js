"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext();


function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <MenuContext.Provider value={{ showMenu, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { MenuProvider, useMenu };
