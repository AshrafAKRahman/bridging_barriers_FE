"use client";
import { createContext, useState, useEffect, useContext } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    gender: "",
    otherGender: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    location: "",
    education: [],
    sectorOne: "",
    sectorTwo: "",
    sectorThree: "",
    otherSector: "",
    criteria: [],
    ethnicity: [],
    selfDescribeText: "",
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const emailForSignIn = localStorage.getItem("emailForSignIn");
      if (emailForSignIn) {
        setFormData((prevData) => ({ ...prevData, email: emailForSignIn }));
      }
    }
    setLoading(false);
  }, []);

  const educationUpdate = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      education: e.target.value,
    }));
  };
  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name)
    if (e.target.name === "education") {
      setFormData((prevData) => ({
        ...prevData,
        education: [...formData.education, e.target.value],
      }));
    } else if (e.target.name === "email" || e.target.name === "password") {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: [e.target.value],
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5432/api/userdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("The form has been submitted");
      } else {
        console.error("failed to submit the form");
      }
    } catch (error) {
      console.error("an error has occured", error);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        educationUpdate,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
