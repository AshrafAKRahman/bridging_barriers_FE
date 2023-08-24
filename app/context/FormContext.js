import { createContext, useState, useEffect, useContext } from "react"


const FormContext = createContext({})

export const FormProvider = ({children}) => {
    const [formData, setFormData] = useState ({
        firstName: "",
        surName: "",
        gender: "",
        otherGender: "",
        dob: "",
        phone: "",
        email: "",
        password: "",

    })

    const handleChange = (e) => {
        // console.log(e.target.value)
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
        handleChange
    }}>
    {children}
    </FormContext.Provider>
    
  )
}

export const useFormContext = () => {
    return useContext(FormContext)
}
