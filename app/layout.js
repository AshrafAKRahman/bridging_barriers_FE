"use client";

// layout.js

import Head from "next/head";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { ParallaxProvider } from "react-scroll-parallax";
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
      <ParallaxProvider scrollAxis="vertical">
        <AuthContextProvider>
          <FormProvider>{children}</FormProvider>
        </AuthContextProvider>
      </ParallaxProvider>
    </>
  );
}

// import { AuthContextProvider } from "./context/AuthContext";
// import "./globals.css";
// import { FormProvider } from "./context/FormContext";
// import { ParallaxProvider } from "react-scroll-parallax";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <ParallaxProvider scrollAxis="vertical">
//         <body>
//           <AuthContextProvider>
//             <FormProvider>
//               {children}
//               {/* <Footer /> */}
//             </FormProvider>
//           </AuthContextProvider>
//         </body>
//       </ParallaxProvider>
//     </html>
//   );
// }
