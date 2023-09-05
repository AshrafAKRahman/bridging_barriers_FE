"use client";
import Footer from "./components/footer/footer";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { FormProvider } from "./context/FormContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <FormProvider>
            {children}
            {/* <Footer /> */}
          </FormProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
