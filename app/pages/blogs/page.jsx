import Header from "@/app/components/header/header";
import Navbar from "@/app/components/navbar/navbar";
import React from "react";
import { Vina_Sans } from "next/font/google";

const vina = Vina_Sans({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const Blogs = () => {
  return (
    <div className="w-screen h-screen overflow-scroll bg-gray-200">
      <Navbar />
      <div className={vina.className}>
        <div className="w-screen h-1/5 flex text-center items-center justify-center mt-28">
          <h1 className="text-6xl text-black">
            The Bridging Barriers Blog Page
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center items-center overflow-y-scroll h-1/2 md:w-1/2 mt-20 ">
          <img
            className="w-2/3"
            src="/jobApplication.jpg"
            alt="job application"
          />
          <div className="w-2/3 h-/3  tracking-tight bg-blue-600">
            <h1 className="text-white mt-4 ">Job Application Blogs</h1>
            <p className="text-white  mt-10">
              How to create a good CV layout ● 5 CV mistakes to avoid ● How to
              update your CV without ruining it ● How to sell yourself on your
              CV without going overboard ● 3 signs that your CV is in good shape
              ● 5 things to do after a job interview ● The hardest interview
              questions to answer and how to answer them ● How to thoroughly
              prepare for an interview ● Things to avoid saying in an interview
              ● How to find the right career path ● Things to avoid saying in an
              interview
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center overflow-y-scroll h-1/2 md:w-1/2 mt-20 ">
          <img
            className="w-2/3"
            src="/professionalSkills.jpg"
            alt="professional skills photo"
          />
          <div className="w-2/3 h-/3  tracking-tight bg-blue-600">
            <h1 className="text-white mt-4 ">Professional Skills Blogs</h1>
            <p className="text-white  mt-10">
              ● 3 ways to boost your productivity ● Ways to develop a growth
              mindset ● The key to networking effectively ● How to navigate the
              first few days of your internship/graduate role ● Commercial
              awareness: what is it and how can I build my skills?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-10 md:flex-row">
        <div className="flex flex-col justify-center items-center overflow-y-scroll h-1/2 md:w-1/2 mt-20 ">
          <img className="w-2/3" src="/wellbeing.jpg" alt="wellbeingphoto" />
          <div className="w-2/3 h-/3  tracking-tight bg-blue-600">
            <h1 className="text-white mt-4 ">Wellbeing Blogs</h1>
            <p className="text-white  mt-10">
              How to handle stress in the workplace ● How to be happier at work
              ● 3 simple changes that will make you happier at work ● Signs that
              work may be affecting your mental health and what to do
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center overflow-y-scroll h-1/2 md:w-1/2 mt-20 ">
          <img className="w-2/3" src="/spotlight.jpg" alt="wellbeingphoto" />
          <div className="w-2/3 h-/3  tracking-tight bg-blue-600">
            <h1 className="text-white mt-4 ">Industry Spotlight Blogs</h1>
            <p className="text-white  mt-10">
              Interviews and deep insights on the industry by ● Jade Adewunmi ●
              Jadesola Adesola ● Jermaine Robinson ● Joseph Boateng ● Abdul
              Alimi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
