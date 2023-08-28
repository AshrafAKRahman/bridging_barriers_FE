"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import { useFormContext } from "../../context/FormContext";

const Profile = () => {
  const { user, newUser } = UserAuth();
  const { formData, setFormData, handleChange } = useFormContext();

  const [loading, setLoading] = useState();
  const [genderInput, setGenderInput] = useState(false);
  const [showContent, setShowContent] = useState(false);

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
    <div className="md:h-screen md:w-screen bg-blue-500 flex flex-col items-center justify-center">
      <div className="h-screen pt-10 pb-20 w-full flex flex-col items-center md:h-full">
        <div className="w-fit">
          <Header
            titleClassName="text-sm  text-white pb-5 md:pb-10"
            title="Thanks for confirming your email address, let's get to know you."
          />
        </div>
        <Form>
          <div className="h-full w-full md:flex md:justify-between ">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-[80%] h-4/6 absolute md:w-1/2 md:h-4/6">
                <div className="bg-black opacity-40 absolute h-full w-full rounded-2xl"></div>
                <img
                  className="img rounded-2xl object-cover h-full w-full "
                  src="/profileImg.jpg"
                  alt="form igmage"
                />
              </div>

              <div className="h-full w-full md:flex md:justify-between z-10">
                <div className=" h-1/2 w-full flex flex-col items-center justify-evenly md:w-1/2 md:h-full">
                  <div className="w-5/6 flex justify-between">
                    <div className="">
                      <label
                        className="text-blue-950 "
                        htmlFor="inline-firstName"
                      >
                        First name
                      </label>
                    </div>
                    <div className="">
                      <input
                        className="bg-gray-200 rounded-3xl   w-36 py-1.5 px-1.5 md:py-4 md:px-4 text-gray-700 border border-white md:w-80"
                        id="inline-firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  <div className="w-5/6 flex justify-between">
                    <div>
                      <label className="text-blue-950" htmlFor="inline-surName">
                        Last name
                      </label>
                    </div>
                    <div>
                      <input
                        className="bg-gray-200 rounded py-1.5 px-1.5 w-36 md:py-4 md:px-4 text-gray-700 border border-white md:w-80"
                        id="inline-surName"
                        type="text"
                        name="surName"
                        value={formData.surName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="w-5/6 flex justify-between">
                    <div>
                      <label className="text-blue-950 " htmlFor="inline-dob">
                        Date of birth
                      </label>
                    </div>
                    <div>
                      <input
                        className="bg-gray-200 rounded py-1.5 px-1.5 w-36 md:py-4 md:px-4 text-gray-700 border border-white md:w-80"
                        id="inline-dob"
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-5/6 flex justify-between">
                    <div>
                      <label
                        className="text-blue-950"
                        htmlFor="dropdown-gender"
                      >
                        Gender
                      </label>
                    </div>
                    <div>
                      <select
                        className="bg-gray-200 rounded py-2 px-2 w-36 md:py-4 md:px-4 text-gray-700 border border-black"
                        id="dropdown-gender"
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
                        <div className="mt-4">
                          <label
                            className="text-blue-950"
                            htmlFor="input-other-gender"
                          >
                            Please specify
                          </label>
                          <input
                            className="bg-gray-200 rounded py-1.5 px-1.5 md:py-4 md:px-4 text-gray-700 border border-black md:w-80"
                            id="input-other-gender"
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
                <div className="w-full h-1/2 flex flex-col items-center justify-evenly  md:w-1/2 md:h-full">
                  <div className="w-5/6 flex justify-between ">
                    <div>
                      <label className="text-white" htmlFor="inline-phone">
                        Phone number
                      </label>
                    </div>
                    <div className="">
                      <input
                        className="bg-gray-200 w-36 rounded py-1.5 px-1.5 md:py-4 md:px-4 text-gray-700 border border-gray-300 md:w-80"
                        id="inline-phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-5/6 flex justify-between  ">
                    <div>
                      <label className="text-white" htmlFor="inline-email">
                        Email
                      </label>
                    </div>
                    <div className="">
                      <input
                        className="bg-gray-200 rounded py-1.5 px-1.5 w-36 md:py-4 md:px-4 text-gray-700 border border-white md:w-80"
                        id="inline-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Please enter your Email"
                      />
                    </div>
                  </div>
                  <div className="w-5/6 flex justify-between">
                    <div>
                      <label className="text-white inline-password">
                        Password
                      </label>
                    </div>
                    <div className="">
                      <input
                        className="bg-gray-200 rounded py-1.5 px-1.5 w-36 md:py-4 md:px-4 text-gray-700 border border-white md:w-80  "
                        id="inline-password"
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="min 8 charecters"
                      />
                    </div>
                  </div>
                  <div className="">
                    <Link href="location">
                      <NormalButton text="Next" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
