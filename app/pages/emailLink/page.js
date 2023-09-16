"use client";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import LargeButton from "../../components/buttons/largeButton";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import ParticlesBg from "@/app/components/particles/Particles.js";

const EmailLink = () => {
  const router = useRouter();
  const { user, sendEmailLink } = UserAuth();
  const [email, setEmail] = useState({
    email: "",
  });

  const revealBasckdrop = () => {
    const TLBACKDROP = gsap.timeline();
    TLBACKDROP.from(".backdrop, .bg", {
      autoAlpha: 0,
      x: 50,
      duration: 1.5,
      opacity: 0,
    });
  };

  const revealAnim = () => {
    const TLFADE = gsap.timeline();
    TLFADE.from(
      " .form .container, .emailContainer, .header, .emailLabel, .emailInput, .btn, .link",
      {
        autoAlpha: 0,
        y: -100,
        duration: 1.5,
        delay: 1.5,
        stagger: 0.5,
        opacity: 0,
      }
    );
  };

  const revealImg = () => {
    const TLIMG = gsap.timeline();
    TLIMG.from(".img", {
      autoAlpha: 0,
      x: 50,
      duration: 1,
      delay: 0.75,
    });
  };

  useEffect(() => {
    revealBasckdrop();
    revealAnim();
    revealImg();
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
        window.location.href = "/pages/emailSent";
      } catch (error) {
        console.log("Error here");
      }
    }
  };
  return (
    <div className="backdrop bg-blue-500 w-screen h-screen flex flex-col items-center justify-center py-5  md:w-screen md:py-20 ipad:py-36 ipad:px-0 horizontal:h-[200%] invisible">
      <div className="absolute -z-10">
        <ParticlesBg />
      </div>
      <Form onSubmit={handleSignIn}>
        <div className="form h-full w-full flex flex-col justify-center items-center">
          <div className="bg bg-black opacity-40 absolute z-10 h-[70%] w-4/6 rounded-2xl md:w-1/3 ipad:w-4/6  invisible"></div>
          <div className="container w-4/5 h-4/5  flex flex-col justify-center items-center z-20 invisible">
            <div className="header h-1/3 pt-20 invisible ">
              <Header
                titleClassName="text-3xl text-white  text-center md:text-5xl"
                title="Create Your Profile"
              />
            </div>

            <div className="emailContainer w-full h-2/3 flex flex-col items-center pt-10 invisible ">
              <div className="emailLabel mt-8 invisible">
                <label className="text-white" htmlFor="inline-emai">
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
                  type="submit"
                  text="SEND EMAIL"
                  // onClick={handleSignIn}
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

          <div className="img h-2/3 absolute md:h-full  flex items-center justify-center ipad:w-4/5 ipad:h-2/3   invisible ">
            <img
              className="w-5/6 h-4/6 px-2 rounded-2xl md:w-full md:h-4/6"
              src="/emailImg.jpg"
              alt="form igmage"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EmailLink;
