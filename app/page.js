"use client";
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import Header from "./components/header/header";
import SubHeader from "./components/subHeader/subHeader";
import LargeButton from "./components/buttons/largeButton";
import { Raleway } from "next/font/google";
import { gsap } from "gsap";
import Navbar from "./components/navBar/navBar";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "900",
  preload: true,
});

const ralewaySub = Raleway({
  subsets: ["latin"],
  weight: "300",
  preload: true,
});

export default function Home() {
  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".backdrop, .header, .largeBtn, .bg ", {
        autoAlpha: 0,
        y: -50,
        duration: 1,
        delay: 0.75,
        stagger: 1,
      });
    };
    revealAnim();
  }, []);

  useEffect(() => {
    const revealImg = () => {
      const TLFADE = gsap.timeline();
      TLFADE.from(".video", {
        autoAlpha: 0,
        x: +50,
        duration: 1,
        delay: 0.75,
      });
    };
    revealImg();
  }, []);

  useEffect(() => {
    const revealSubheader = () => {
      const TLFADE = gsap.timeline();
      TLFADE.from(".subheader", {
        autoAlpha: 0,
        y: +50,
        duration: 1,
        delay: 2.5,
      });
    };
    revealSubheader();
  }, []);

  return (

    <div className="backdrop w-screen h-full absolute bg-blue-400 z-20 horizontal:h-[200%]  horizontal:w-full invisible">
      <Navbar />

      <div className="w-full h-[100%] flex items-center flex-col md:flex md:items-center md:flex-col md:h-[90%%] md:w-[100%]  ">
        <div className="bg bg-black h-4/6 w-5/6 mt-36  md:w-4/6 md:h-3/5 md:bg-black opacity-40 md:mt-48 rounded-3xl"></div>
        <div className=" mt-36 absolute rounded-3xl w-5/6 h-2/3 text-center flex flex-col items-center justify-center md:flex-col md:w-4/6 md:h-[75%] md:flex md:columns-1 md:absolute ">
          <div className={raleway.className}>
            <div className=" h-full w-full text-white mt-6 md:mt-10 md:z-10 text-3xl md:text-6xl ">
              <Header
                titleClassName="header invisible"
                title={
                  <div>
                    <div className="mb-6">
                      <p>Welcome To</p>
                    </div>
                    <div>
                      <p>The Bridging Barriers Portal</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          <div className={ralewaySub.className}>
            <div className="w-full h-full text-xl mt-10  flex-col-reverse md:text-3xl md:mt-16 ">
              <SubHeader
                titleClassName="subheader text-white invisible"
                title="Moulding Diverse Talent For Tomorrow's Workforce"
              />
            </div>
          </div>

          <div className="largeBtn mt-10  flex justify-around w-full  invisible md:flex md:justify-around md:w-full md:mb-16 lg:mt-32 ">
            <Link href="/pages/emailLink">
              <LargeButton
                className="bg-green-500 hover:bg-blue-700"
                text="CREATE PROFILE "
              />
            </Link>
            <Link href="/pages/login">
              <LargeButton
                className="bg-green-500 hover:bg-blue-700"
                text="LOGIN"
              />
            </Link>
          </div>
        </div>
        <div
          className=" lpImage absolute flex items-center -z-10 w-full h-full
         md:flex md:items-center md:w-full md:h-full md:-z-10 md:overflow-hidden"
        >
          <video
            className="absolute video h-full w-full object-cover invisible"
            src="/bb_landingPage.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>

  );
}
