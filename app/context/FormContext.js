import { createContext, useState, useEffect, useContext } from "react";
import Criteria from "../pages/criteria/page";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
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
    education: [
      {
        qualification: "",
        subject: "",
        status: "",
        schoolName: "",
      },
    ],
    sector: "",
    criteria: [],
  });

  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name)
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
