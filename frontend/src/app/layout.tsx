"use client";

import { Header } from "@/components/Header";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../reset.css";
import { persistor, store } from "../store/store";
import ClientThemeProvider from "./ClientThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ClientThemeProvider>
              <Toolbar />
              <Header />
              <main>{children}</main>
            </ClientThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
