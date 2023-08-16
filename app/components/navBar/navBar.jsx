"use client";

import { gsap } from "gsap";
import NormalButton from "../buttons/normalButton";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect } from "react";

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
    <nav>
      <div className="nav  flex items-center w-full p-6 ">
        <div className="flex  w-screen justify-between">
          <div className=" text-white text-2xl mr-10 ">
            <Image
              src="/logo.png"
              alt="Logo"
              className="mr-10"
              height="40"
              width="160"
              data-testid="logo"
            />
          </div>
          <div className="flex ">
            <Link href="/login">
              {/* <p className=" text-blue-600">LOGIN</p> */}
              <NormalButton text="LOGIN" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
