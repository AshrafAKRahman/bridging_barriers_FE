"use client";
import Form from "@/app/components/form/form";
import Header from "@/app/components/header/header";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const EmailSent = () => {
  const revealAnimation = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from([".img, .bg, .emailSent", ".logo", ".title"], {
      autoAlpha: 0,
      x: 150,
      duration: 1,
      stagger: {
        each: 0.75,
        from: "start",
      },
    });
  };

  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-5  md:w-screen md:py-20 ipad:py-36 ipad:px-0 horizontal:py-5">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen absolute horizontal:w-[150%]"
      />
      <Form>
        <div className="w-full h-full flex flex-col justify-evenly items-center horizontal:w-full horizontal:h-3/4">
          <div className="bg bg-black opacity-50 absolute z-10 h-[70%] w-5/6 rounded-2xl md:w-2/3 ipad:w-4/6 horizontal:h-4/6 invisible"></div>
          <div className="h-1/2 w-full flex justify-center place-items-end mb-5 z-20 mt-10 md:mt-0 md:w-96 md:h-1/2 horizontal:">
            <img
              className="logo h-14 w-30 invisible md:h-24 md:w-30 z-20"
              src="/logo.png"
              alt="Logo"
            />
          </div>
          <div className="title flex h-1/2 text-center leading-6 text-white  w-4/6 invisible z-20 md:w-3/6 md:mt-6 horizontal:w-1/3 horizontal:mb-16">
            <Header
              title="Please check your email and spam for the confirmation link to complete your profile"
              titleClassName="text-lg md:text-3xl horizontal:text-lg "
            />
          </div>

          <img
            src="/emailSent.jpg"
            alt="email Sent"
            className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:w-5/6 md:h-3/4 invisible"
          />
        </div>
      </Form>
    </div>
  );
};

export default EmailSent;
