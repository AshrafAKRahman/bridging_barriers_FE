"use client";

import Footer from "./components/footer/footer";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { FormProvider } from "./context/FormContext";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ParallaxProvider scrollAxis="vertical">
        <body>
          <AuthContextProvider>
            <FormProvider>
              {children}
              {/* <Footer /> */}
            </FormProvider>
          </AuthContextProvider>
        </body>
      </ParallaxProvider>
    </html>
  );
}
