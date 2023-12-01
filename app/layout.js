"use client";
import Head from "next/head";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <AuthContextProvider>
        <FormProvider>{children}</FormProvider>
      </AuthContextProvider>
    </>
  );
}
