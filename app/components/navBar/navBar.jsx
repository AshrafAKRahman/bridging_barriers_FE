import { gsap } from "gsap";
import NormalButton from "../buttons/normalButton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".logo, .loginBtn", {
        autoAlpha: 0,
        y: -50,
        duration: 1,
      });
    };
    revealAnim();
  }, []);

  return (
    <nav className=" fixed flex items-center justify-between w-full p-6 bg-white">
      <div className="logo text-white text-2xl invisible">
        <Image
          src="/logo.png"
          alt="Logo"
          className="mr-2"
          height={12}
          width={140}
          data-testid="logo"
        />
      </div>

      <div className="loginBtn mr-0 invisible">
        <Link href="/login">
          {/* <p className=" text-blue-600">LOGIN</p> */}
          <NormalButton text="LOGIN" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
