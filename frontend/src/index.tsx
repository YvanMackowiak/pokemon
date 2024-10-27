import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Header } from "./components/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#393057", // Couleur principale
      light: "#EFDDFF",
    },
    secondary: {
      main: "#EFDDFF", // Couleur secondaire
    },
    error: {
      main: "#FF3B30", // Couleur d'erreur
    },
    background: {
      default: "#23272a", // Couleur de fond par défaut
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

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
