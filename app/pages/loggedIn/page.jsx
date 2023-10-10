import React from "react";
import LargeButton from "../../components/buttons/largeButton";
import Header from "../../components/header/header";
import Image from "next/legacy/image";
import Navbar from "@/app/components/navbar/navbar";

const LogedIn = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <Header
          titleClassName="text-3xl text-black"
          title="Welcome to the Logged in Page"
        />
      </div>
    </div>
  );
};

export default LogedIn;
