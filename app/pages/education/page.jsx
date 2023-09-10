"use client";
import React from "react";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useState } from "react";
import NormalButton from "../../components/buttons/normalButton";
import { useFormContext } from "@/app/context/FormContext";
import InputFeild from "@/app/components/inputFeild/inputFeild";
import EducationInput from "@/app/components/educationInput/educationInput";
import ParticlesBg from "@/app/components/particles/Particles";

const Education = () => {
  const { formData, handleChange } = useFormContext();
  const { education } = formData;
  const [educationData, setEducationData] = useState({
    qualification: "",
    subject:"",
    status: "",
    schoolName: "",
  })
  const handleQualificationChange = (e) => {
    const newEducationData = {...educationData}
    newEducationData[e.target.name] = e.target.value
    setEducationData({...educationData, [e.target.name] : e.target.value})
    
  };

  console.log(educationData)


  // const handleQualificationChange = (e) => {
  //   setEducationData({...setEducationData, [e.target.name] : e.target.value})
  //   console.log(educationData)
  // };
  const addQualification = (e) => {
      e.preventDefault()
    
      handleChange({ target: { name: "education", value: educationData } });
      setEducationData({ 
      qualification: "",
      subject:"",
      status: "",
      schoolName: "",})
    
  };
  const removeQualification = (e) => {
    e.preventDefault();
    if (education.length > 1) {
      const newEducation = education.slice(0, education.length - 1);
      handleChange({ target: { name: "education", value: newEducation } });
    }
  };
  console.log(education);
  return (
   
    <div className="h-screen w-screen bg-blue-500 flex items-center justify-center p-5 md:px-36 ">

      <div className="absolute -z-10">
        <ParticlesBg />
      </div>

      <Form>
        <div className="h-full w-full flex flex-col items-center justify-center py-10">
          <div className="w-full h-fit flex flex-col justify-center items-center z-10  md:h-5/6">
            <Header
              title="Education details"
              titleClassName="text-3xl md:text-6xl text-white"
            />
            <div className="bg-cyan-600 w-full h-full">
            <div
          
          className=" h-2/3 w-5/6 md:w-1/3 flex flex-col justify-evenly"
        >
          <div className="w-full flex justify-between ">
            <div>
              <label>
                <Header
                  title="Qualifaction"
                  titleClassName="text-white text-lg md:text-3xl"
                  // htmlFor={`qualification-${index}`}
                />
              </label>
            </div>
            <InputFeild
              name="qualification"
              type={"text"}
              value={educationData.qualification}
              onChange={(e) =>
                handleQualificationChange(e)
              }
              placeholder="Enter the qualification"
            />
          </div>
          <div className="w-full flex justify-between ">
            <label>
              <Header
                title="Subject"
                titleClassName="text-white text-lg md:text-3xl"
                // htmlFor={`subject-${index}`}
              />
            </label>
            <InputFeild
              name="subject"
              type={"text"}
              value={educationData.subject}
              onChange={(e) =>
                handleQualificationChange(e)
              }
              placeholder="Enter the subject"
            />
          </div>
          <div className="w-full flex justify-between">
            <label>
              <Header
                title="Status"
                titleClassName="text-white text-lg md:text-3xl"
                // htmlFor={`status-${index}`}
              />
            </label>
            <InputFeild
              name="status"
              type={"text"}
              value={educationData.status}
              onChange={(e) =>
                handleQualificationChange(e)
              }
              placeholder="Achieved/predicted"
            />
          </div>
          <div className="w-full flex justify-between">
            <label>
              <Header
                title="School"
                titleClassName="text-white text-lg md:text-3xl"
                // htmlFor={`schoolName-${index}`}
              />
            </label>
            <InputFeild
              name="schoolName"
              type="text"
              value={educationData.schoolName}
              onChange={(e) =>
                handleQualificationChange(e)
              }
              placeholder="School achieved grade at"
            />
          </div>
        </div>
            </div>
          </div>
          <div className="flex items-center  justify-center h-2/3 md:h-full md:mb-16 ">
            <img
              src="/educationDetails.jpg"
              alt="certificate image"
              className="w-full px-2 h-5/6 rounded-2xl md:w-[840px] md:h-[480px]"
            />
          </div>
          <div className=" flex flex-col justify-between z-10 ">
            <div className="flex items-center justify-center h-fit w-full">
              <button
                className="text-blue-500 underline mr-4 bg-blue-400 rounded-lg h-10"
                onClick={(e) => addQualification(e)}
              >
                Add another qualification
              </button>
              <button
                className="text-white text-sm bg-red-400 rounded-lg h-10 w-24 "
                onClick={(e) => removeQualification(e)}
              >
                Remove qualification
              </button>
            </div>
            <div className=" h-1/3 w-full flex items-center justify-center">
              <Link className="mr-10" href="profile">
                <NormalButton text="Previous" />
              </Link>
              <Link href="sector">
                <NormalButton text="Next" />
              </Link>
            </div>
          </div>
          <div className="bg-black opacity-40 absolute h-[60%] w-4/5 rounded-2xl md:h-[72%] md:w-[40%] md:mb-10"></div>
        </div>
        {education.map((value)=>(<div>{value.qualification}</div>))}
      </Form>
      
    </div>
   
  );
};

export default Education;

