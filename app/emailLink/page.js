"use client";
import NormalButton from "../components/buttons/normalButton";
import Header from "../components/header/header";
import Form from "../components/form/form";
import { useState } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import { Asap_Condensed } from "@next/font/google";

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
      alert("Please enter your rmail address");
      return;
    } else if (!isValidEmail(userEmail)) {
      alert("Please enter a vaild email address");
      return;
    } else {
      try {
        await sendEmailLink(userEmail);
        alert("Email sent, please verify your email address");
      } catch (error) {
        console.log("Error");
      }
    }
  };
  return (
    <Form>
      <div className={asap.className}>
        <Header
          titleClassName="text-xl tracking-widest absolute left:40 md:left-20 top-40 transform translate-x-6 translate-y-58 text-white"
          title="Create Your Profile"
        />
      </div>
      <div className=" absolute">
        <div className="flex justify-end">
          <div className="md:flex md:items-center mt-20">
            <div className="md:w-1/6">
              <label className="text-white" htmlFor="inline-email">
                Email address
              </label>
            </div>
            <div className="ml-20">
              <input
                className="bg-gray-200 rounded w-full py-4 px-4 text-gray-700 border border-black"
                id="inline-email"
                type="email"
                name="email"
                value={email.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="relative ml-96 mt-14">
            <Image
              src="/form_img.svg"
              alt="form igmage"
              height={250}
              width={580}
            />
          </div>
        </div>
        <div className="absolute">
          <div className=" relative mb-0 bg-yellow-300">
            <button
              onClick={handleSignIn}
              style={{ width: "85px", height: "47px", borderRadius: "12px" }}
              className="bg-teal-600 hover:bg-teal-900 text-white text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl"
            >
              Send email
            </button>
          </div>
          <div className="">
            <p className="text-blue-500 underline font-sans">
              Already have an account? <Link href="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </Form>
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
