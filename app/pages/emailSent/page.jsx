"use client";
import Form from "@/app/components/form/form";
import Header from "@/app/components/header/header";
import ParticlesBg from "@/app/components/particles/Particles";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const EmailSent = () => {
  const revealAnimation = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from([".img, .backdrop, .emailSent", ".logo", ".title"], {
      autoAlpha: 0,
      y: -50,
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
    <div className="backdrop bg-blue-500 w-screen h-screen flex flex-col items-center justify-center py-5  md:w-screen md:py-20 md:px-44 invisible ">
      <div className="absolute -z-10">
        <ParticlesBg />
      </div>
      <Form>
        <div className="w-full h-full flex flex-col justify-evenly items-center ">
          <div className="bg bg-black opacity-60 absolute h-4/6 w-3/4 rounded-2xl mb-5 md:mb-0 md:h-[72%] md:w-1/3 z-10"></div>
          <div className="h-1/2 w-full flex justify-center   place-items-end mb-5 z-20 mt-10 md:mt-0 md:w-96 md:h-1/2 ">
            <img
              className="logo h-14 w-30 invisible md:h-24 md:w-30 z-20"
              src="/logo.png"
              alt="Logo"
            />
          </div>
          <div className="title flex h-1/2 text-center leading-6 text-white  w-5/6 invisible z-20 md:w-4/6 ">
            <Header
              title="Please check your email and spam for the confirmation link to complete your profile"
              titleClassName="text-2xl md:text-4xl  "
            />
          </div>
          <div className="img h-2/3 absolute md:h-full md:w-2/5 flex items-center justify-center invisible">
            <img
              src="/emailSent.jpg"
              alt="email Sent"
              className="w-5/6 h-4/6 px-2 rounded-2xl md:w-full md:h-2/3"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EmailSent;
