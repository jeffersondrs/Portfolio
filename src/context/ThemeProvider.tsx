"use client"

import { createContext } from "react";
import { useState } from "react";

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme: toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
