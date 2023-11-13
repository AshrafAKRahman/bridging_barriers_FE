"use client";

import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { gsap } from "gsap";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LargeButton from "../buttons/largeButton";
import NormalButton from "../buttons/normalButton";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Logged out successfully");
      window.location.href = "/";
    } catch (error) {
      console.log("error");
    }
  };
  const navlinks = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "BLOGS",
      link: "/pages/blog",
    },
    {
      title: "EVENTS",
      link: "/pages/events",
    },
    {
      title: "CAREERS",
      link: "/pages/careers",
    },
  ];

  const revealAnim = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".nav-link", {
      autoAlpha: 0,
      y: -50,
      stagger: 0.5,
    });
  };

  const animateHamburgerMenu = () => {
    gsap.from(".title, .btn", {
      autoAlpha: 0,
      y: -50,
    });
  };

  const animateMobileLinks = () => {
    if (open) {
      gsap.from(".hamMenu", {
        autoAlpha: 0,
        y: -50,
        stagger: 0.4,
      });
    }
  };

  useEffect(() => {
    revealAnim();
  }, []);

  useEffect(() => {
    animateHamburgerMenu();
    animateMobileLinks();
  }, [open]);

  return (
    <div className="fixed w-screen flex items-center justify-center h-20 border-b-2 border-solid border-blue-500  bg-white z-10">
      <div className="w-48 h-fit hidden md:visible">
        <img src="/logo.png" alt="Logo" className="" />
      </div>
      <div className="flex items-center justify-center ">
        {/* Navlinks */}
        {user ? (
          <div className="hidden w-screen h-20 md:flex md:items-center md:justify-between pl-10 pr-10">
            <div className="w-48 h-fit md:visible">
              <img src="/logo.png" alt="Logo" className="" />
            </div>
            <div className="ml-10 flex items-baseline justify-between">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="nav-link text-blue-500 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
              <NormalButton
                type="submit"
                text="LOG OUT"
                onClick={handleSignOut}
              />
            </div>
          </div>
        ) : (
          // Render the logo if user is not logged in
          <div className="w-48 h-fit">
            <img src="/logo.png" alt="Logo" className="" />
          </div>
        )}
      </div>
      {/* Hamburger menu */}
      {user ? (
        <div className=" md:hidden">
          {/* <div className="w-36  h-fit ">
            <img src="/logo.png" alt="Logo" className="mr-5" />
          </div> */}
          <div>
            <button type="button" onClick={handleMenu} className="btn ">
              {open === true ? (
                <FaTimes style={{ color: "#0091FB", fontSize: "2em" }} />
              ) : (
                <FaBars style={{ color: "#0091FB", fontSize: "2em" }} />
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-48 h-fit hidden md:visible">
          <img src="/logo.png" alt="Logo" className="" />
        </div>
      )}
      {/* mobile view */}
      {open ? (
        <div className="bg w-3/6 h-[350%] mt-96  flex flex-col items-center bg-teal-300 bg-opacity-20 backdrop-blur-md rounded-md drop-shadow-lg absolute  md:hidden">
          <div className="w-fit">
            {user
              ? // Render navigation links if user is logged in
                navlinks.map((link, index) => (
                  <a
                    key={index}
                    className="hamMenu text-gray-700 hover:bg-blue-700 hover:text-white block px-3 pt-6 rounded-md text-base font-medium"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                ))
              : null}
          </div>
          <NormalButton type="submit" text="LOG OUT" onClick={handleSignOut} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
