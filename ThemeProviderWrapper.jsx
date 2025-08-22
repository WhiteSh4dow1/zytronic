"use client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState, createContext, useContext } from "react";
import { lightTheme, darkTheme } from "./theme";

const ThemeContext = createContext();

export function useCustomTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProviderWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
