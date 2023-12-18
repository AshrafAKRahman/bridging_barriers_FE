"use client";

import Footer from "./components/footer/footer";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { FormProvider } from "./context/FormContext";
import { EventProvider } from "./context/EventContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <FormProvider>
            <EventProvider>
              {children}
              {/* <Footer /> */}
            </EventProvider>
          </FormProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
