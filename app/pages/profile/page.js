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
  const {formData, setFormData, handleChange } = useFormContext()

  const [loading, setLoading] = useState();
  const [genderInput, setGenderInput] = useState(false);
 
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

  const handleGenderOther = (e) => {
    const selectedGender = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedGender,
    }));

    if (selectedGender === "other") {
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

  console.log(formData)
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-screen w-screen bg-blue-500 flex flex-col items-center justify-center ">
      <div className="h-[80%] w-full flex flex-col items-center  bg-black">
        <Form >
          <div className="bg-yellow-300 md:flex justify-center items-center ">
            <div className="flex flex-col items-center">
              <div className="bg-red-800 w-fit">
                <Header
                  titleClassName="text-3xl text-white"
                  title="Enter your details"
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="inline-firstName">
                  First name
                </label>
                <input
                  className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                  id="inline-firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-10">
                <label className="text-white" htmlFor="inline-surName">
                  Last name
                </label>
                <input
                  className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                  id="inline-surName"
                  type="text"
                  name="surName"
                  value={formData.surName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>

              <div className="">
                <label className="text-green-800" htmlFor="inline-dob">
                  Date of birth
                </label>

                <input
                  className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                  id="inline-dob"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label className="text-white" htmlFor="dropdown-gender">
                  Gender
                </label>
                <select
                  className="bg-gray-200 rounded py-2 px-2 md:py-4 md:px-4 text-gray-700 border border-black w-full"
                  id="dropdown-gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleGenderOther}
                >
                  <option value="">Select your gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Non-Binary</option>
                  <option value="">Other</option>
                </select>
                {genderInput && (
                  <div className="mt-4">
                    <label
                      className="text-green-800"
                      htmlFor="input-other-gender"
                    >
                      Please specify
                    </label>
                    <input
                      className="bg-gray-200 rounded py-2 px-4 text-gray-700 border border-black w-full"
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
            <div>
              <div className="">
                <label className="text-green-800" htmlFor="inline-phone">
                  Phone number
                </label>
                <div className="">
                  <input
                    className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                    id="inline-phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="">
                <label className="text-green-800" htmlFor="inline-email">
                  Email
                </label>
                <div className="">
                  <input
                    className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                    id="inline-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please enter your Email"
                  />
                </div>
              </div>
              <div className="">
                <label className="text-green-800 inline-password">
                  Password
                </label>
                <div className="">
                  <input
                    className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
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
                <Link href="education">
                  <NormalButton text="Next" />
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
