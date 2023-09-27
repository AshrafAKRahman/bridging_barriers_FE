"use client";
import React, { useEffect, useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useFormContext } from "../../context/FormContext";
import LargeButton from "../../components/buttons/largeButton";
import { gsap } from "gsap";
import SubHeader from "../../components/subHeader/subHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InputField from "../../components/inputField/inputField";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const { formData, setFormData, handleChange } = useFormContext();
  const { user, newUser } = UserAuth();
  const [loading, setLoading] = useState();
  const [genderInput, setGenderInput] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const moreFirstRender = useRef(true);
  const rightArrowFirstRender = useRef(true);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const emailForSignIn = localStorage.getItem("emailForSignIn");
      const passwordForSignIn = localStorage.getItem("passwordForSignIn");
      if (emailForSignIn) {
        setFormData((prevData) => ({
          ...prevData,
          email: emailForSignIn,
          password: passwordForSignIn,
        }));
      }
    }
    setLoading(false);
  }, []);

  const toggleInput = (e) => {
    setShowInput((prevShowInput) => !prevShowInput);
  };
  const toggleSecondInput = (e) => {
    setShowSecondInput((prevShowSecondInput) => !prevShowSecondInput);
  };

  const handleGenderOther = (e) => {
    const selectedGender = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));

    if (selectedGender === "Other") {
      setGenderInput(true);
    } else {
      setGenderInput(false);
    }
  };

  const notify = (e) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.surName === "" ||
      formData.dob === "" ||
      formData.gender === "" ||
      formData.phone === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.location === ""
    ) {
      toast("Please complete all the fields");
    } else {
      window.location.href = "/pages/education";
    }
  };

  const handleGenderOtherChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      otherGender: e.target.value,
    }));
  };
  const reveal = () => {
    const FADE = gsap.timeline();
    FADE.from(".bg, .headerContainer,  .header, .subheader", {
      autoAlpha: 0,
      x: -99,
      duration: 0.5,
      stagger: 0.5,
    });

    const TLIMAGE = gsap.timeline();
    TLIMAGE.from(".img", {
      autoAlpha: 0,
      x: 99,
      duration: 1.5,
    });
  };

  const revealContainer = () => {
    const TLINPUTCONTAINER = gsap.timeline();
    TLINPUTCONTAINER.from(".dropDownContainer,.btn", {
      autoAlpha: 0,
      y: 100,
      duration: 0.5,
      delay: 2.5,
      stagger: 0.5,
    });
  };

  useEffect(() => {
    reveal();
    revealContainer();
  }, []);

  const revealFirstInput = () => {
    const TLFIRSTINPUT = gsap.timeline();
    TLFIRSTINPUT.from(".firstInput", {
      autoAlpha: 0,
      x: 100,
      duration: 1,
      delay: 0.25,
      stagger: 2,
    });
  };

  const more = () => {
    const TLMORE = gsap.timeline();
    const delay = moreFirstRender.current ? 4.5 : 1.3;

    TLMORE.from(".more", {
      autoAlpha: 0,
      x: -100,
      duration: 1.5,
      delay: delay,
    });
    if (moreFirstRender.current) {
      moreFirstRender.current = false;
    }
  };
  const rightArrow = () => {
    const TLRIGHTARROW = gsap.timeline();
    const delay = rightArrowFirstRender.current ? 4.5 : 2.5;

    TLRIGHTARROW.from(".rightArrow", {
      autoAlpha: 0,
      x: -50,
      duration: 1.37,
      repeat: -1,
      delay: delay,
      ease: "elastic.out(0.9, 0.4)",
    });
    if (rightArrowFirstRender.current) {
      rightArrowFirstRender.current = false;
    }
  };

  const revealsecondInput = () => {
    const TLSECONDINPUT = gsap.timeline();
    TLSECONDINPUT.from(" .secondInput", {
      autoAlpha: 0,
      x: 50,
      duration: 1,
    });
  };

  const previous = () => {
    const TLPREVIOUS = gsap.timeline();
    TLPREVIOUS.from(".previous", {
      autoAlpha: 0,
      x: 75,
      duration: 1.5,
      delay: 1,
    });
  };

  const leftArrow = () => {
    const TLLEFTARROW = gsap.timeline();

    TLLEFTARROW.from(".leftArrow", {
      autoAlpha: 0,
      x: 50,
      duration: 1.37,
      repeat: -1,
      delay: 2,
      ease: "elastic.out(0.9, 0.4)",
    });
  };

  useEffect(() => {
    more();
    leftArrow();
    rightArrow();
    revealFirstInput();
    revealsecondInput();
    previous();
  }, [showSecondInput]);

  console.log(formData);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="backdrop  w-screen h-screen flex flex-col items-center justify-center py-5  md:w-screen md:py-12 ipad:py-36 ipad:px-0 horizontal:py-5">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen absolute"
      />
      <Form>
        <div className="form w-full h-full flex flex-col items-center justify-center">
          <div className="bg bg-black opacity-50 absolute z-10 h-[70%] w-11/12 rounded-2xl md:w-2/3 ipad:w-4/6 horizontal:h-3/4 invisible"></div>
          <div className="headerContainer w-full h-1/3 mt-36 flex-col flex  justify-center place-items-end items-center z-20 md:w-2/3 horizontal:mt-28 invisible ">
            <div
              className="header w-5/6 h-fit  text-center   flex flex-col justify-center items-center z-20
            "
            >
              <Header
                titleClassName="text-3xl text-white"
                title="Personal Details"
              />
            </div>
            <div className="subheader w-5/6 md:h-fit  text-center flex flex-col items-center justify-center mt-5 z-20 md:mb-5 ">
              <SubHeader
                titleClassName="text-lg text-white"
                title="Please complete all required feilds"
              />
            </div>
          </div>

          <div className="dropDownContainer w-5/6 h-fit flex flex-col justify-center items-center z-30 md:w-4/6 md:h-fit ipad:w-3/4 invisible ">
            <div
              className={`firstInput w-full h-full flex flex-col   ${
                showInput ? "block" : "hidden"
              }`}
            >
              <div className="fname w-full h-fit flex justify-between mb-5  ">
                <div className=" text-white md:ml-16 ">
                  <label>
                    <Header
                      title="First name"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    name="firstName"
                    type={"text"}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              <div className="sname w-full h-fit mb-5 flex justify-between ">
                <div className="text-white md:ml-16 ">
                  <label>
                    <Header
                      title="Surname"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    name="surName"
                    type={"text"}
                    value={formData.surName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="dob w-full h-fit mb-5 flex justify-between ">
                <div className="text-white md:ml-16 ">
                  <label>
                    <Header
                      title="Date of birth"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    name="dob"
                    type={"date"}
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="gender w-full h-fit flex justify-between ">
                <div className="text-white md:ml-16 ">
                  <label>
                    <Header
                      title="Gender"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div>
                  <select
                    className="bg-gray-200 rounded-lg w-36 py-1 px-1 md:py-2 md:px-2 md:mr-10 md:w-60   text-gray-700 border border-black"
                    name="gender"
                    value={formData.gender}
                    onChange={handleGenderOther}
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Other">Other</option>
                  </select>
                  {genderInput && (
                    <div className="text-white mt-4 ">
                      <label>
                        <Header title="Please specify" />
                      </label>
                      <InputField
                        type="text"
                        name="otherGender"
                        value={formData.otherGender}
                        onChange={handleGenderOtherChange}
                        placeholder="Specify your gender"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`secondInput w-full h-full flex flex-col  ${
                showSecondInput ? "block" : "hidden"
              }`}
            >
              <div className="phone w-full h-fit flex justify-between mb-5 ">
                <div className="text-white md:ml-12">
                  <label>
                    <Header
                      title="Phone number"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Please enter a UK number"
                  />
                </div>
              </div>
              <div className="email w-full h-fit flex justify-between mb-5 ">
                <div className="text-white md:ml-12">
                  <label>
                    <Header
                      title="Email"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please enter your Email"
                  />
                </div>
              </div>
              <div className="password w-full h-fit flex justify-between mb-5">
                <div className="text-white md:ml-12">
                  <label>
                    <Header
                      title="Password"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="min 8 charecters"
                  />
                </div>
              </div>
              <div className="location w-full h-fit flex justify-between mb-5 ">
                <div className="text-white md:ml-12">
                  <label>
                    <Header
                      title="Location"
                      titleClassName="text-lg md:text-2xl "
                    />
                  </label>
                </div>
                <div>
                  <select
                    className="bg-gray-200 rounded-lg w-36 py-1 px-1 md:py-2 md:px-2 md:mr-10 md:w-60   text-gray-700 border border-black"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="">Select your location</option>
                    <option value="nLondon">North London</option>
                    <option value="nwLondon">NW London</option>
                    <option value="wLondon">West London</option>
                    <option value="swLondon">SW London</option>
                    <option value="sLondon">South London</option>
                    <option value="seLondon">SE London</option>
                    <option value="eLondon">East London</option>
                    <option value="midlands">Midlands</option>
                    <option value="southEngland">South England</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="moreBtn z-30 h-fit w-full flex items-center justify-center md:w-1/4 horizontal:mb-5">
              <div className="w-full h-fit flex items center justify-center ">
                <button
                  className="text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleInput();
                    toggleSecondInput();
                  }}
                >
                  {showSecondInput ? (
                    <div className="w-full flex items-center justify-between ">
                      <FaArrowLeft className="leftArrow text-xl mr-5 w-[350%] md:text-xl invisible" />
                      <div className="previous w-1/2 h-full text-2xl flex-col items-center justify-center mr-8 md:text-2xl invisible">
                        Previous
                      </div>
                    </div>
                  ) : (
                    <div className=" w-full flex items-center justify-between mt-10 ">
                      <div className="more w-1/2 text-2xl md:text-2xl invisible ">
                        More
                      </div>
                      <div>
                        <FaArrowRight className="rightArrow text-xl w-[350%] md:text-xl mt-2 invisible" />
                      </div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          <img
            className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:w-11/12 md:h-4/5 invisible"
            src="/profileImg.jpg"
            alt="form igmage"
          />

          <div className="btn flex justify-center place-items-center w-full h-1/4 z-30 mt-16 md:mt-5 horizontal:mb-10 invisible">
            <Link href="education">
              <LargeButton
                onClick={(e) => notify(e)}
                text="NEXT"
                className="bg-blue-500 hover:bg-blue-700 "
              />
            </Link>
          </div>
        </div>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Profile;
