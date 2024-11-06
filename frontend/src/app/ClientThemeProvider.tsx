"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#393057",
      light: "#EFDDFF",
    },
    secondary: {
      main: "#EFDDFF",
    },
    error: {
      main: "#FF3B30",
    },
    background: {
      default: "#23272a",
      paper: "#2C2F31",
    },
    text: { primary: "#FFFFFF" },
  },
  typography: {
    fontFamily:
      "Baskerville, Baskerville Old Face, Garamond, Times New Roman, serif",
    fontSize: 15,
  },
});

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ajoute le reset CSS de MUI */}
      {children}
    </ThemeProvider>
  );
}
