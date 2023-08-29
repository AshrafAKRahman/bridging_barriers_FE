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
        education: [{
            qualification: "",
            subject: "",
            status: "",
            schoolName: ""

        }],
        sector: []



    })

    const handleChange = (e) => {
        // console.log(e.target.value, e.target.name)
          if(e.target.name === "sector") {
            setFormData((prevData) => ({
              ...prevData,
              [e.target.name] : e.target.value
              
            }))
            console.log('this function is running')
          } else {
            setFormData((prevData) => ({
              ...prevData,
              [e.target.name]: e.target.value,
            }));

          }
          

        
        
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
