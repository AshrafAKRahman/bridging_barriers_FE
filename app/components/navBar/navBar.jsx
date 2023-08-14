"use client";

import { gsap } from "gsap";
import NormalButton from "../buttons/normalButton";
import Image from "next/image";
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
    // revealAnim();
  }, []);

  return (
    <div className="nav fixed flex items-center justify-between w-full p-6 bg-white invisible">
      <nav className="">
        <div className=" text-white text-2xl ">
          <Image
            src="/logo.png"
            alt="Logo"
            className="mr-2"
            height={12}
            width={140}
            data-testid="logo"
          />
        </div>

        <div className=" mr-0 ">
          <Link href="/login">
            {/* <p className=" text-blue-600">LOGIN</p> */}
            <NormalButton text="LOGIN" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
