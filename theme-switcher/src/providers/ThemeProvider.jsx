import React, { createContext, useState } from "react";
import { THEME_TYPE } from "../constants";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(THEME_TYPE.LIGHT);

  const changeThemeMode = (newTheme) => {
    setThemeMode(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        changeThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
