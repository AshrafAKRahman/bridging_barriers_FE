"use client";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";
import { FormProvider } from "./context/FormContext";
import { EventProvider } from "./context/EventContext";
import { BlogProvider } from "./context/BlogContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <FormProvider>
            <EventProvider>
              <BlogProvider>{children}</BlogProvider>
            </EventProvider>
          </FormProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
