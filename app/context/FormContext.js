"use client";
import { createContext, useState, useEffect, useContext } from "react";
import Criteria from "../pages/criteria/page";

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
      education: e.target.value
    }))
  }
  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name)
    if (e.target.name === "education") {
      setFormData((prevData) => ({
        ...prevData,
        education: [...formData.education, e.target.value]
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

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        educationUpdate
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
