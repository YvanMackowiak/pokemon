"use client";

import { Header } from "@/components/Header";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Provider } from "react-redux";
import "../reset.css";
import { store } from "../store/store";
import ClientThemeProvider from "./ClientThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="fr" suppressHydrationWarning>
        <body>
          <ClientThemeProvider>
            <Toolbar />
            <Header />
            <main>{children}</main>
          </ClientThemeProvider>
        </body>
      </html>
    </Provider>
  );
}
