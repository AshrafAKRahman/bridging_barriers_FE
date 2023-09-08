"use client";
import Form from "@/app/components/form/form";
import Header from "@/app/components/header/header";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const EmailSent = () => {
  const revealAnimation = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from([".emailSent", ".logo", ".title"], {
      autoAlpha: 0,
      y: -50,
      duration: 1,
      stagger: {
        each: 1.5,
        from: "start",
      },
    });
  };
  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <div className="h-screen w-screen bg-blue-500 flex flex-col justify-center items-center ">
      <div className="w-5/6 h-5/6 flex justify-center items-center">
        <Form>
          <div className="w-full h-full flex flex-col justify-evenly items-center ">
            <div className="bg bg-black opacity-60 absolute h-4/6 w-3/4 rounded-2xl mb-5 md:mb-0 md:h-[72%] md:w-1/3 z-10"></div>
            <div className="h-1/2 w-full flex justify-center place-items-end mb-5 z-20 md:w-96 md:h-1/2 ">
              <img
                className="logo h-14 w-30 invisible md:h-24 md:w-30 z-20"
                src="/logo.png"
                alt="Logo"
              />
            </div>
            <div className="title flex h-1/2 text-center leading-6 text-white  w-5/6 md:px-10 invisible z-20 md:w-2/5">
              <Header
                title="Please check your email and spam for the confirmation link to complete your profile"
                titleClassName="text-2xl md:text-4xl  "
              />
            </div>
            <div className="h-4/6 w-4/6 absolute flex justify-center items-center md:mt-10 ">
              <img
                src="/emailSent.jpg"
                alt="email Sent"
                className="emailSent h-64 w-96 md:w-[75%] md:h-[100%] invisible"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EmailSent;
