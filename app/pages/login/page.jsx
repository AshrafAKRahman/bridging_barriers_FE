
"use client";
import NormalButton from "../../components/buttons/normalButton";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import Image from "next/legacy/image";
import { Asap_Condensed } from "next/font/google";
import LargeButton from "../../components/buttons/largeButton";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const asap = Asap_Condensed({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});
const logIn = () => {
  const router = useRouter();
  const { signIn } = UserAuth();
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
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

      TLFADE.from(".emailContainer ", {
        autoAlpha: 0,
        x: -50,
        duration: 1.5,
        delay: 3,
      });
    };
    revealAnim();
  }, []);

  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(".header, .backdrop, .emailLabel, .emailInput, .btn, .link", {
        autoAlpha: 0,
        y: -50,
        duration: 1,
        stagger: 0.3,
      });
    };
    revealAnim();
  }, []);

  const handleChange = (e) => {
    setLogInData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(logInData)

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
      } catch (error) {
        console.log(error, "Error here");
      }
    }
  };
  return (
    <div className="backdrop h-screen w-screen  bg-blue-500 flex flex-col items-center justify-center invisible">
      <div className="h-[95%] w-full pb-14 flex flex-col justify-center items-center md:h-[90%] ">
        <Form onSubmit={handleSignIn}>
          <div className="h-full flex flex-col items-center md:h-full md:flex md:flex-col md:items-center md:justify-center ">
            <div className="emailContainer w-[80%] h-[80%] absolute flex flex-col items-center z-20 md:static md:w-1/2  md:z-20 md:flex md:justify-between ">
              <div className="header mt-24    h-fit md:w-full md:absolute">
                <div className={asap.className}>
                  <Header
                    titleClassName="text-[50px] text-white  text-center md:text-5xl"
                    title="Sign in "
                  />
                </div>
              </div>
              <div className="mt-0 w-full h-2/3 flex flex-col items-center md:absolute md:h-full">
                <div className="emailLabel mt-8 md:mt-72">
                  {/* <label className="text-white " htmlFor="inline-emai">
                    Please enter your email address
                  </label> */}
                </div>
                <div className="emailInput mt-5">
                  <input
                    className="bg-gray-200 w-full px-2 py-2 md:py-4 md:px-4 text-center text-gray-700 border border-black"
                    id="inline-email"
                    type="email"
                    name="email"
                    value={logInData.email}
                    onChange={handleChange}
                    placeholder="Email..."
                  />
                </div>
                <div className="emailInput mt-5">
                  <input
                    className="bg-gray-200 w-full px-2 py-2 md:py-4 md:px-4 text-center text-gray-700 border border-black"
                    id="inline-email"
                    type="password"
                    name="password"
                    value={logInData.password}
                    onChange={handleChange}
                    placeholder="password..."
                  />
                </div>
                
                <div className="btn mt-6">
                  <LargeButton
                    type="submit"
                    text="Login"
                    // onClick={handleSignIn}
                    className="text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl bg-blue-500"
                  />
                </div>
                <div className="mt-6">
                  <p className="link text-white text-sm  underline font-sans">
                    
                    <Link href="/">Back to home page</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="  h-full w-5/6 flex flex-col items-center justify-center md:w-2/3 md:mb-10 ">
              <div className=" bg-black opacity-40 absolute z-10 h-[70%] w-3/5 rounded-2xl md:w-1/3"></div>
              <img
                className="img w-full rounded-2xl object-cover shadow-lg md:object-cover invisible"
                src="/emailImg.jpg"
                alt="form igmage"
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default logIn;
