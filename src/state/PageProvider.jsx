import React, { createContext, useContext } from 'react';
import { useToggle } from '../hooks';

const initialState = {
  isMenuOpen: false
};

export const AppContext = createContext(initialState);

export const PageProvider = ({ children }) => {

  const { isToggled, toggle } = useToggle(false);

  return (
    <AppContext.Provider value ={{
      isMenuOpen: isToggled,
      toggleMenu: toggle,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppState = () => useContext(AppContext);
