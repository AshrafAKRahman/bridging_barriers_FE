"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useFormContext } from "../../context/FormContext";
import InputFeild from "@/app/components/inputFeild/inputFeild";
import LargeButton from "@/app/components/buttons/largeButton";
import { gsap } from "gsap";

const Profile = () => {
  const { user, newUser } = UserAuth();
  const { formData, setFormData, handleChange } = useFormContext();

  const [loading, setLoading] = useState();
  const [genderInput, setGenderInput] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const reveal = () => {
      const FADE = gsap.timeline();

      FADE.from(".backdrop", {
        autoAlpha: 0,
        y: -100,
        duration: 1,
      });
    };
    reveal();
  }, []);

  useEffect(() => {
    const reveal = () => {
      const FADE = gsap.timeline();

      FADE.from(".fname, .sname, .dob, .gender", {
        autoAlpha: 0,
        x: -50,
        stagger: 0.25,
        delay: 1,
      });
    };
    reveal();
  }, []);

  useEffect(() => {
    const reveal = () => {
      const FADE = gsap.timeline();

      FADE.from(".phone, .email, .password, .location", {
        autoAlpha: 0,
        x: 50,
        stagger: 0.25,
        delay: 1.85,
      });
    };
    reveal();
  }, []);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const emailForSignIn = localStorage.getItem("emailForSignIn");
      if (emailForSignIn) {
        setFormData((prevData) => ({
          ...prevData,
          email: emailForSignIn,
        }));
      }
    }
    setLoading(false);
  }, []);

  const handleScreenClick = () => {
    setShowContent(true);
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

  const handleGenderOtherChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      otherGender: e.target.value,
    }));
  };

  console.log(formData);
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="backdrop h-screen md:w-screen bg-blue-500 flex flex-col items-center justify-center invisible">
      <div className=" h-full pt-10 pb-32 w-full flex flex-col items-center md:h-full md:pb-20">
        <Form>
          <div className="  h-full w-full md:flex md:justify-between ">
            <div className="w-full h-full flex justify-center items-center">
              <div className="bg-black opacity-40 absolute h-[70%] w-4/5 rounded-2xl md:h-[70%] md:w-[70%] md:mb-10 z-10"></div>
              <div className="w-[80%] h-4/6 absolute md:w-[60%] md:h-5/6">
                <img
                  className=" rounded-2xl object-cover h-full w-full "
                  src="/profileImg.jpg"
                  alt="form igmage"
                />
              </div>

              <div className="h-full w-full md:flex md:justify-between md:items-center md:mb-10 z-20 px-8">
                <div className=" h-1/2 w-full flex flex-col items-center justify-evenly md:w-1/2 md:h-5/6">
                  <div className="fname w-5/6 flex justify-between invisible">
                    <div className=" text-white md:ml-16">
                      <label>
                        <Header
                          title="First name"
                          titleClassName="text-lg md:text-3xl sm:text-sm "
                        />
                      </label>
                    </div>
                    <div className="md:mr-10">
                      <InputFeild
                        name="firstName"
                        type={"text"}
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div className="sname w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-16 ">
                      <label>
                        <Header
                          title="Surname"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div className="md:mr-10">
                      <InputFeild
                        name="surName"
                        type={"text"}
                        value={formData.surName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="dob w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-16 ">
                      <label>
                        <Header
                          title="Date of birth"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div className="md:mr-10">
                      <InputFeild
                        name="dob"
                        type={"date"}
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="gender w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-16 ">
                      <label>
                        <Header
                          title="Gender"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div>
                      <select
                        className="bg-gray-200 rounded-3xl  py-2 px-2 w-36 md:mr-10  md:py-4 md:px-4 md:w-60   text-gray-700 border border-black"
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
                          <InputFeild
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
                <div className="h-1/2 w-full flex flex-col items-center justify-evenly md:w-1/2 md:h-5/6 md:mr-8">
                  <div className="phone w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-12">
                      <label>
                        <Header
                          title="Phone number"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div className="md:mr-10">
                      <InputFeild
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Please enter a UK number"
                      />
                    </div>
                  </div>
                  <div className="email w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-12">
                      <label>
                        <Header
                          title="Email"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div className="md:mr-10">
                      <InputFeild
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Please enter your Email"
                      />
                    </div>
                  </div>
                  <div className="password w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-12">
                      <label>
                        <Header
                          title="Password"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div className="md:mr-10">
                      <InputFeild
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="min 8 charecters"
                      />
                    </div>
                  </div>
                  <div className="location w-5/6 flex justify-between invisible">
                    <div className="text-white md:ml-16">
                      <label>
                        <Header
                          title="Location"
                          titleClassName="text-lg md:text-3xl"
                        />
                      </label>
                    </div>
                    <div>
                      <select
                        className="bg-gray-200 rounded-3xl  py-2 px-2 w-36 md:mr-10  md:py-4 md:px-4 md:w-60   text-gray-700 border border-black"
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
              </div>
              <div className="absolute translate-y-72 z-30 translate-x-0 md:mt-24 md:flex md:items-center md:h-fit md:translate-x-0 md:translate-y-64">
                <Link href="education">
                  <LargeButton
                    text="Next"
                    className="md:bg-blue-500 md:hover:bg-blue-700 bg-teal-500 hover:bg-teal-800  "
                  />
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
