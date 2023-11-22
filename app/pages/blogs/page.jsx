"use client";

import Navbar from "@/app/components/navbar/navbar";
import React, { useRef } from "react";
import { Vina_Sans } from "next/font/google";
import { useParallax } from "react-scroll-parallax";

const vina = Vina_Sans({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const Blogs = () => {
  const containerRef = useRef();
  const applicationBlog = useParallax({
    speed: 5,
    targetElement: containerRef.current,
  });

  return (
    <div className="w-screen h-screen overflow-scroll bg-blue-400">
      <Navbar />
      <div className={vina.className}>
        <div className="w-screen h-1/5 flex text-center items-center justify-center mt-28">
          <h1 className="text-6xl text-white">
            The Bridging Barriers Blog Page
          </h1>
        </div>
      </div>
      <div
        ref={containerRef}
        style={{
          backgroundImage: "url('/jobApplication.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "700px",
          height: "700px",
        }}
        className="h-screen"
      >
        <div className="fixed top-10 left-40" ref={applicationBlog.ref}>
          <h1 className="text-blue-800 mt-4 ">Job Application Blogs</h1>
          <p className="text-blue-800  mt-10 ">
            How to create a good CV layout ● 5 CV mistakes to avoid ● How to
            update your CV without ruining it ● How to sell yourself on your CV
            without going overboard ● 3 signs that your CV is in good shape ● 5
            things to do after a job interview ● The hardest interview questions
            to answer and how to answer them ● How to thoroughly prepare for an
            interview ● Things to avoid saying in an interview ● How to find the
            right career path ● Things to avoid saying in an interview
          </p>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default Blogs;
