"use client"
import React from "react";
import Header from "../header/header";
import InputFeild from "../inputFeild/inputFeild";
import { useFormContext } from "@/app/context/FormContext";
import Link from "next/link";
import NormalButton from "../buttons/normalButton";
import { useState } from "react";

const EducationInput = ({ index, handleChange }) => {
  const { formData} = useFormContext();
  const { education } = formData;
  const [educationData, setEducationData] = useState({
    qualification: "",
    subject:"",
    status: "",
    schoolName: "",
  })

  const handleQualificationChange = (e) => {
    setEducationData({...setEducationData, [e.target.name] : e.target.value})
    
  };

  console.log(educationData)

  return (
    <div className="w-5/6 h-2/3 absolute flex flex-col items-center justify-around">
      {education.map((education, index) => (
        <div
          key={index}
          className=" h-2/3 w-5/6 md:w-1/3 flex flex-col justify-evenly"
        >
          <div className="w-full flex justify-between ">
            <div>
              <label>
                <Header
                  title="Qualifaction"
                  titleClassName="text-white text-lg md:text-3xl"
                  htmlFor={`qualification-${index}`}
                />
              </label>
            </div>
            <InputFeild
              name="qualifactaion"
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
                htmlFor={`subject-${index}`}
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
                htmlFor={`status-${index}`}
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
                htmlFor={`schoolName-${index}`}
              />
            </label>
            <InputFeild
              name="schoolname"
              type="text"
              value={educationData.schoolName}
              onChange={(e) =>
                handleQualificationChange(e)
              }
              placeholder="School achieved grade at"
            />
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default EducationInput;
