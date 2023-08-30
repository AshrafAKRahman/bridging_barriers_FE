"use client";
import Form from "@/app/components/form/form";
import Header from "@/app/components/header/header";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const EmailSent = () => {
  useEffect(() => {
    const revealAnimation = () => {
      const TLFADE = gsap.timeline();
      TLFADE.from(".logo", {
        autoAlpha: 0,
        y: -50,
        duration: 1,
      });
      TLFADE.from(".emailSent, .title", {
        autoAlpha: 0,
        x: 100,
        ease: "elastic.out(4, 2.5)",
        duration: 8,
      });
    };
    revealAnimation();
  }, []);

  return (
    <div className="h-screen w-screen bg-blue-500 flex flex-col justify-center items-center ">
      <div className="w-5/6 h-5/6 flex justify-center items-center">
        <Form>
          <div className="w-full h-full flex flex-col justify-evenly items-center">
            <div className="h-1/3 w-full flex justify-center items-center">
              <img
                className="logo h-20 w-72 invisible md:h-full md:w-[800px] md:mt-10"
                src="/logo.png"
                alt="Logo"
              />
            </div>
            <div className="h-1/3 w-full flex justify-center items-center md:mt-10">
              <img
                src="/emailSent.png"
                alt="email Sent"
                className="emailSent h-28  md:h-56 md:w-64 ml-14 mb-10 invisible"
              />
            </div>
            <div className="title flex  text-center leading-6 text-blue-950 h-1/3 w-5/6 invisible">
              <Header
                title="Please check your email and spam for the confirmation link to complete your profile"
                titleClassName="text-2xl  "
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EmailSent;
