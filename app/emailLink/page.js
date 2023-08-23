"use client";
import NormalButton from "../components/buttons/normalButton";
import Header from "../components/header/header";
import Form from "../components/form/form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Image from "next/legacy/image";
import { Asap_Condensed } from "next/font/google";
import LargeButton from "../components/buttons/largeButton";
import { gsap } from "gsap";

const asap = Asap_Condensed({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const EmailLink = () => {
  const { user, sendEmailLink } = UserAuth();
  const [email, setEmail] = useState({
    email: "",
  });

  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".img", {
        autoAlpha: 0,
        x: 50,
        duration: 1,
      });
    };
    revealAnim();
  }, []);

  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".emailContainer", {
        autoAlpha: 0,
        x: -50,
        duration: 1.5,
      });
    };
    revealAnim();
  }, []);

  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".header, emailLabel, emailInput, btn, link", {
        autoAlpha: 0,
        y: -50,
        duration: 1,
      });
    };
    revealAnim();
  }, []);

  const handleChange = (e) => {
    setEmail((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userEmail = email.email.trim();
    const isValidEmail = (email) => {
      return email.includes("@");
    };
    if (userEmail === "") {
      console.log("email fieldis empty");
      alert("Please enter your rmail address");
      return;
    } else if (!isValidEmail(userEmail)) {
      console.log("email is invalid");
      alert("Please enter a vaild email address");
      return;
    } else {
      try {
        await sendEmailLink(userEmail);
        console.log("all is working");
        alert("Email sent, please verify your email address");
      } catch (error) {
        console.log("Error");
      }
    }
  };
  return (
    <div className="h-screen w-screen  bg-blue-500 flex flex-col items-center justify-center">
      <div className="h-[90%] w-full pb-14 px-1 flex flex-col justify-center items-center ">
        <Form onSubmit={handleSignIn}>
          <div className="md:flex md:justify-between md:w-full ">
            <div className="emailContainer w-[80%] h-[80%] z-10 absolute flex flex-col items-center md:w-2/5  md:z-10 md:flex md:flex-col md:justify-between    ">
              <div className="header mt-24    h-fit md:text-2xl md:w-full md:absolute">
                <div className={asap.className}>
                  <Header
                    titleClassName="text-[50px] text-blue-900 text-center md:text-[30px]"
                    title="Create Your Profile"
                  />
                </div>
              </div>
              <div className=" mt-0 w-full h-2/3 flex flex-col items-center md:absolute md:h-full">
                <div className="emailLabel mt-8 md:mt-72 ">
                  <label className="text-blue-900" htmlFor="inline-emai">
                    Please enter your email address
                  </label>
                </div>
                <div className="emailInput mt-5">
                  <input
                    className="bg-gray-200 rounded w-full px-2 py-2 md:py-4 md:px-4 text-center text-gray-700 border border-black"
                    id="inline-email"
                    type="email"
                    name="email"
                    value={email.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="btn mt-6">
                  <LargeButton
                    type="submit"
                    text="Send email"
                    onClick={handleSignIn}
                    className="text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl"
                  />
                </div>
                <div className="mt-6">
                  <p className="link text-blue-500 underline font-sans">
                    Already have an account?{" "}
                    <Link href="/login">Login here</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[50%] w-full mt-10 flex-col justify-center items-center md:mt-0 md:h-full md:translate-x-full md:w-1/2 flex">
              <Image
                className="img rounded-2xl sm:hidden"
                src="/emailImg.jpg"
                alt="form igmage"
                height="600"
                width="800"
                style={{
                  objejectFit: "cover",
                }}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EmailLink;

//   const [dateOfBirth, setDateOfBirth] = useState("");

{
  /* <div className="md:flex md:items-center mt-10">
  <div className="md:w-1/6">
    <label className="text-white" htmlFor="inline-dob">
      Date of birth
    </label>
  </div>
  <div className="">
    <input
      className="bg-gray-200 rounded w-full py-4 px-4 text-gray-400 border border-black"
      id="inline-dob"
      type="date"
      value={dateOfBirth}
      onChange={(e) => setDateOfBirth(e.target.value)}
    />
  </div>
</div> */
}
