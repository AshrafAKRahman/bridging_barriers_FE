"use client";
import Footer from "./components/footer/footer";
import { AuthContextProvider } from "./context/AuthContext";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
