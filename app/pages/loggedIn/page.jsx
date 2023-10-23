import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

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
