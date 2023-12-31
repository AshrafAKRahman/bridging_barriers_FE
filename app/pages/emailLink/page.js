"use client";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import LargeButton from "../../components/buttons/largeButton";
import { gsap } from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const EmailLink = () => {
  const router = useRouter();
  const { user, sendEmailLink } = UserAuth();
  const [email, setEmail] = useState({
    email: "",
  });

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
      console.log("email field is empty");
      toast("Please enter your email address");
      return;
    } else if (!isValidEmail(userEmail)) {
      console.log("email is invalid");
      toast("Please enter a vaild email address");
      return;
    } else {
      try {
        await sendEmailLink(userEmail);
        router.push("/pages/emailSent");
      } catch (error) {
        const erorrCode = error.Code;
        const erorrMessage = error.message;
        console.log(erorrCode, erorrMessage);
      }
    }
  };
  const revealBackdrop = () => {
    const TLBACKDROP = gsap.timeline();
    TLBACKDROP.from(".bg", {
      autoAlpha: 0,
      x: 50,
      duration: 1,
      opacity: 0,
    });
  };

  const revealAnim = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(
      " .form .container, .emailContainer, .header, .emailLabel, .emailInput, .btn, .link",
      {
        autoAlpha: 0,
        x: -100,
        duration: 1,
        delay: 1,
        stagger: 0.25,
        opacity: 0,
      }
    );
  };

  const revealImg = () => {
    const TLIMG = gsap.timeline();
    TLIMG.from(".img", {
      autoAlpha: 0,
      x: 150,
      duration: 1.25,
      delay: 0.75,
      opacity: 10,
      ease: 2,
    });
  };

  useEffect(() => {
    revealBackdrop();
    revealAnim();
    revealImg();
  }, []);
  console.log(email);
  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-5 md:w-screen md:py-20 ipad:py-36 ipad:px-0 horizontal:py-5">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen absolute"
      />
      <Form onSubmit={handleSignIn}>
        <div className="form h-full w-full flex flex-col justify-center items-center">
          <div className="bg bg-black opacity-40 absolute z-10 h-[70%] w-5/6 rounded-2xl md:w-2/3 ipad:w-4/6 horizontal:h-5/6 invisible"></div>
          <div className="container w-4/5 h-4/5  flex flex-col justify-center items-center z-20 invisible">
            <div className="header h-1/3 pt-20 invisible ">
              <Header
                titleClassName="text-3xl text-white  text-center md:text-5xl"
                title="Create Your Profile"
              />
            </div>

            <div className="emailContainer w-full h-2/3 flex flex-col items-center pt-10 md:pt-0 invisible ">
              <div className="emailLabel mt-8 invisible">
                <label className="text-white" htmlFor="inline-emai">
                  Please enter your email address
                </label>
              </div>
              <div className="emailInput mt-5 invisible">
                <input
                  className="bg-gray-200 w-full px-2 py-2 md:py-4 md:px-4 text-center text-gray-700 border border-black"
                  id="email"
                  type="email"
                  name="email"
                  value={email.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="btn mt-6 invisible">
                <LargeButton
                  type="submit"
                  text="SEND EMAIL"
                  className="text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl bg-blue-500"
                />
              </div>

              <div className="link mt-6 invisible">
                <p className="link text-white text-sm  underline font-sans">
                  Already have an account? <Link href="login">Login here</Link>
                </p>
              </div>
            </div>
          </div>

          <img
            className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:h-3/4 horizontal:h-[90%] invisible"
            src="/emailImg.jpg"
            alt="form igmage"
          />
          <ToastContainer />
        </div>
      </Form>
    </div>
  );
};

export default EmailLink;
