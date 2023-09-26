"use client";
import Form from "@/app/components/form/form";
import { UserAuth } from "../../context/AuthContext";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Header from "@/app/components/header/header";
import LargeButton from "@/app/components/buttons/largeButton";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailReset = () => {
  const { resetPassword } = UserAuth();
  const [email, setEmail] = useState({
    email: "",
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setEmail((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const userEmail = email.email.trim();
    const isValidEmail = userEmail.includes("@");
    if (userEmail === "") {
      console.log("email field is empty");
      toast("Please enter your email address");
      return;
    } else if (!isValidEmail) {
      console.log("Email is invalid");
      toast("Please enter a valid email");
      return;
    }
    try {
      await resetPassword(email.email);
      console.log("function called");
      setEmailSent(true);
    } catch (error) {
      const erorrCode = error.Code;
      const erorrMessage = error.message;
      console.log(erorrCode, erorrMessage);
      setEmailSent(false);
    }
  };

  const reveal = () => {
    const TLBACKDROP = gsap.timeline();
    TLBACKDROP.from(".bg, .headerContainer, .header, .subheader", {
      autoAlpha: 0,
      x: -100,
      duration: 1.5,
      opacity: 0.5,
    });
    const TLIMG = gsap.timeline();
    TLIMG.from(".img", {
      autoAlpha: 0,
      x: 100,
      duration: 1,
    });
  };

  const revealAnim = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(".emailContainer,  .emailLabel, .emailInput, .btn, .link", {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      delay: 1.5,
      stagger: 0.5,
      opacity: 0,
    });
  };
  const revealImgTwo = () => {
    const TLIMGTWO = gsap.timeline();
    TLIMGTWO.from(".img2", {
      autoAlpha: 0,
      x: -100,
      duration: 0.75,
    });
  };

  const revealAnimTwo = () => {
    const TLRESET = gsap.timeline();
    TLRESET.from(".bg2, .header2", {
      autoAlpha: 0,
      x: 100,
      duration: 0.75,
      stagger: 0.5,
      delay: 0.75,
    });
  };
  useEffect(() => {
    if (emailSent) {
      revealAnimTwo();
      revealImgTwo();
    }
  });
  useEffect(() => {
    reveal();
    revealAnim();
  }, []);

  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-10 md:py-12 ipad:py-36 ipad:px-0 horizontal:h-[200%]">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen horizontal:h-[200%] absolute"
      />
      {emailSent ? (
        <div className="w-full h-full text-center flex flex-col items-center justify-center">
          <div className="bg2 bg-white bg-opacity-40 backdrop-blur-md z-10 absolute h-5/6 w-11/12 rounded-2xl mb-5 md:mb-0 md:w-1/3 md:h-1/2 ipad:w-3/5 ipad:h-4/6 invisible"></div>
          <div className="header2 w-4/6 h-fit text-center md:w-1/4 z-20 invisible">
            <Header
              title={
                <>
                  If your email is registered with us, you will receive an email
                  with a link to reset your password.
                </>
              }
              titleClassName="text-3xl text-gray-700 "
            />
          </div>
          <img
            className="img2 absolute w-5/6 h-2/6 object-cover px-2 rounded-2xl md:w-3/6 md:h-4/6 invisible"
            src="/passwordReset.jpg"
            alt="form igmage"
          />
        </div>
      ) : (
        <Form onSubmit={handleResetPassword}>
          <div className="form h-full w-full flex flex-col justify-center items-center">
            <div className="bg bg-black opacity-60 absolute h-5/6 w-11/12 rounded-2xl mb-5 md:mb-0 md:w-9/12 md:h-4/5  z-10 ipad:w-3/5 ipad:h-4/6"></div>
            <div className="container w-4/5 h-4/5  flex flex-col justify-center items-center z-20  ">
              <div className="header h-1/3 pt-20   ">
                <Header
                  titleClassName="text-3xl text-white  text-center md:text-5xl"
                  title="Reset Your Password"
                />
              </div>
              <div className="emailContainer w-full h-2/3 flex flex-col items-center pt-10 invisible">
                <div className="emailLabel invisible">
                  <label className="text-white text-2xl " htmlFor="inline-emai">
                    Please enter your email address
                  </label>
                </div>
                <div className="emailInput mt-5 invisible">
                  <input
                    className="bg-gray-200 w-full px-2 py-2 md:py-4 md:px-4 text-center text-gray-700 border border-black"
                    id="inline-email"
                    type="email"
                    name="email"
                    value={email.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="btn mt-6 invisible">
                  <LargeButton
                    // onClick={handleEmailSent}
                    type="button"
                    text="SEND EMAIL"
                    className="text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl bg-blue-500"
                  />
                </div>
                <div className="link mt-6 invisible">
                  <p className="link text-white text-sm  underline font-sans">
                    Already have an account?{" "}
                    <Link href="login">Login here</Link>
                  </p>
                </div>
              </div>
            </div>

            <img
              className="img absolute w-5/6 h-2/6 object-cover px-2 rounded-2xl md:w-11/12 md:h-5/6 invisible"
              src="/passwordReset.jpg"
              alt="form igmage"
            />
            <ToastContainer />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EmailReset;
