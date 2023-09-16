import React, { createContext, useState, useMemo } from "react";

export const initialState = { theme: "", data: [] };

export const themes = {
  light: {
    isLight: true,
  },
  dark: {
    isLight: false,
    color: "white",
    navBackground: "#1e293b",
    mainBackground: "#0f172a",
    cardBackground: "#1e293b",
    shadowOff: "0px 0px 0px 0px #0f172a",
    colorGray: "#8897ac",
    borderColor: "#323c4b",
  },
};

export const ThemeContext = createContext(themes.light);

export const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const providerValue = useMemo(() => {
    const handleChangeTheme = () => {
      if (theme === themes.dark) setTheme(themes.light);
      if (theme === themes.light) setTheme(themes.dark);
    };

    return { theme, handleChangeTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
