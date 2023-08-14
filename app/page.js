"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Header from "./components/header/header";
import SubHeader from "./components/subHeader/subheader";
import LargeButton from "./components/buttons/largeButton";
import { Asap_Condensed } from "@next/font/google";
import { Righteous } from "@next/font/google";
import { gsap } from "gsap";

const asap = Asap_Condensed({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export default function Home() {
  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".header, .largeBtn", {
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
      TLFADE.from(".lpImage", {
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
    <div>
      <div className="bg-blue-700 w-screen h-screen flex">
        <div className={asap.className}>
          <Header
            titleClassName="header tracking-widest absolute mt-36 text-white invisible"
            title={
              <div className="ml-20">
                <span className="block text-8xl">Welcome to</span>
                <span className="block mt-4">The Bridging Barriers Portal</span>
              </div>
            }
          />
        </div>

        <div className="w-1/2">
          <div className="largeBtn mt-[420px]  flex justify-center invisible ">
            <LargeButton
              className="ml-20 mr-10 shadow-2xl"
              text="Create Profile"
              href="/emailLink"
            />
            <LargeButton
              className="shadow-2xl"
              text="Login"
              href="@/pages/CreateProfileOne"
            />
          </div>
          <div className={righteous.className}>
            <div className=" ml-9 mt-24">
              <SubHeader
                titleClassName="subheader text-4xl text-blue-300 invisible"
                title="Moulding Diverse Talent For Tomorrow's Workforce"
              />
            </div>
          </div>
        </div>
        <div className="lpImage mt-40 ml-72 w-1/2 relative invisible">
          <Image
            className="absolute ml-20 mt-12 z-10"
            src="/bb_landingPage.png"
            alt="landing_img"
            objectFit="cover"
            layout="fixed"
            height={280}
            width={490}
          />
          <div className="relative">
            <Image
              className="rounded-lg shadow-2xl shadow-black right-5"
              src="/bb_landingPage_backdrop_orange.png"
              alt="landing_img"
              objectFit="cover"
              layout="fixed"
              height={260}
              width={530}
            />
            <div className=" absolute top-5 mt-0 left-10 ">
              <Image
                className="rounded-lg shadow-2xl shadow-black"
                src="/bb_landingPage_backdrop.png "
                alt="landing_img"
                objectFit="cover"
                layout="fixed"
                height={260}
                width={550}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
