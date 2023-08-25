"use client";

import { gsap } from "gsap";
import NormalButton from "../buttons/normalButton";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect } from "react";
import LargeButton from "../buttons/largeButton";

const Navbar = () => {
  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".nav", {
        autoAlpha: 0,
        y: -50,
        duration: 1,
      });
    };
    revealAnim();
  }, []);

  return (
    <nav className="w-screen">
      <div className="nav fixed flex items-center w-full h-28 bg-white p-8 border-solid border-b-4 border-blue-500 invisible ">
        <div className="w-screen flex items-center justify-center md:flex md:justify-between md:items-cente">
          <div className="">
            <Image
              src="/logo.png"
              alt="Logo"
              className=""
              height="60"
              width="220"
              data-testid="logo"
            />
          </div>
          <div className=" mt-0 hidden md:flex">
            <Link href="/pages/login">
              {/* <p className=" text-blue-600">LOGIN</p> */}
              <LargeButton text="LOGIN" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
