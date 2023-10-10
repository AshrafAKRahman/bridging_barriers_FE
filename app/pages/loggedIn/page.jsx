import React from "react";
import LargeButton from "../../components/buttons/largeButton";
import Header from "../../components/header/header";
import Image from "next/legacy/image";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";

const LogedIn = () => {
  return (
    <div>
      <Navbar />
      <div className="backdrop flex flex-col items-center justify-center py-10 md:py-12 ipad:py-36 ipad:px-0 horizontal:py-5">
        <img
          src="/loginBg.jpg"
          alt="login bg image"
          className="object-cover h-screen w-screen"
        />
      </div>
      <Footer />
    </div>
  );
};

export default LogedIn;
