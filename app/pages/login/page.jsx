"use client";
import NormalButton from "../../components/buttons/normalButton";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import Image from "next/legacy/image";
import LargeButton from "../../components/buttons/largeButton";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const logIn = () => {
  const router = useRouter();
  const { signIn } = UserAuth();
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const revealForm = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".logo, .emailLabel, .emailInput, .btn, .link", {
      autoAlpha: 0,
      x: -50,
      duration: 0.5,
      stagger: 0.3,
      delay: 0.5,
    });
  };
  const revealbg = () => {
    const TLFADE = gsap.timeline();

    TLFADE.from(".bg, .form", {
      autoAlpha: 0,
      x: -150,
      duration: 0.5,
    });
  };

  useEffect(() => {
    revealForm();
    revealbg();
  }, []);

  const handleChange = (e) => {
    setLogInData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(logInData);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const userEmail = logInData.email.trim();
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
        await signIn(logInData.email, logInData.password);
        router.push("/pages/loggedIn");
      } catch (error) {
        console.log(error, "Error here");
      }
    }
  };
  return (
    <div className="h-screen w-screen md:h-screen md:w-screen flex flex-col items-center justify-center horizontal:h-[200%]">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen absolute"
      />
      <form
        onSubmit={handleSignIn}
        className="form w-4/6 h-4/6 flex flex-col items-center justify-center md:w-1/3 md:h-4/5 z-10 ipad:w-5/6 invisible"
      >
        <div className="bg bg-teal-600 bg-opacity-20 backdrop-blur-md rounded-md drop-shadow-lg absolute w-full h-full horizontal:h-[110%] invisible"></div>

        <div className="logo h-1/6 mt-5 flex items-center justify-center md:h-1/4 md:mt-10 ipad:w-4/5 ipad:h-1/5 z-10 invisible">
          <img
            className="w-11/12 h-4/6 px-2 rounded-2xl md:w-full md:h-2/3 ipad:h-3/4"
            src="/logo.png"
            alt="logo"
          />
        </div>

        <div className="w-5/6 h-2/3 flex flex-col items-center text-center z-10 ">
          <div className="emailLabel mt-8 md:mt-14 invisible">
            <label className="text-white ipad:text-4xl" htmlFor="inline-emai">
              Enter your email and password
            </label>
          </div>
          <div className="emailInput mt-5 ipad:mt-16 ipad:w-full invisible">
            <input
              className="bg-gray-200 w-full px-2 py-2 text-center text-gray-700 border border-black md:py-4 md:px-4  ipad:w-3/4 "
              id="email"
              type="email"
              name="email"
              value={logInData.email}
              onChange={handleChange}
              placeholder="Email..."
            />
          </div>
          <div className="emailInput mt-5 ipad:w-full invisible">
            <input
              className="bg-gray-200 w-full px-2 py-2 text-center text-gray-700 border border-black md:py-4 md:px-4  ipad:w-3/4 "
              id="password"
              type="password"
              name="password"
              value={logInData.password}
              onChange={handleChange}
              placeholder="password..."
            />
          </div>

          <div className="btn mt-6 ipad:mt-10 invisible">
            <LargeButton
              type="submit"
              text="LOGIN"
              onClick={handleSignIn}
              className="text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl bg-blue-500"
            />
          </div>
          <div className="link mt-4 ipad:mt-10 invisible">
            <p className="text-white text-sm underline ipad:text-xl font-sans">
              <Link href="/">Back to home page</Link>
            </p>
          </div>
          <div className="mt-2 ipad:mt-6 ">
            <p className="link text-white text-sm  underline ipad:text-xl  font-sans invisible">
              <Link href="emailReset">Forgot password</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default logIn;
