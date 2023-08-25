"use client"
import React from 'react'
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useState } from "react";
import NormalButton from "../../components/buttons/normalButton";
import { useFormContext } from '@/app/context/FormContext';

const Education = () => {
  const {formData, handleChange} = useFormContext()
  const {education} = formData
  const [secondarySchool, setSecondarySchool] = useState("");
  const [sixthForm, setySixthForm] = useState("");
  const [ucas, setUcas] = useState("");
  const [gcse, setGcse] = useState("");
  

  const handleQualificationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    handleChange({target:{name: "education", value: newEducation}})
    
  };

  const addQualification = (e) => {
    e.preventDefault();
    if (education.length < 5) {
      const newEducation = [
        ...education,
        { qualification: "", subject: "", status: "", schoolName: "" }
      ]
      handleChange({target: {name: "education", value: newEducation}})
    } else {
      alert("You can add up to 5 qualifications only");
    }
  };
  const removeQualification = (e) => {
    e.preventDefault();
    if (education.length > 1) {
      const newEducation = education.slice(0, education.length-1);
      handleChange({target: {name:"education", value: newEducation}})
    }
  };
  console.log(education, formData)
  return (
    <Form>
      <div className="mb-10">
        <Header
          titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
          title="Education details"
        />
      </div>
      <div className="flex mt-20"></div>
      <div className="md:w-1/2 pl-8 mt-0 ">
        {education.map((education, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div className="w-1/3 pr-2 mr-14">
              <label className="text-white" htmlFor={`qualification-${index}`}>
                Qualification
              </label>
              <input
                className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                type="text"
                placeholder="Enter the qualification"
                value={education.qualification}
                onChange={(e) =>
                  handleQualificationChange(
                    index,
                    "qualification",
                    e.target.value
                  )
                }
              />
            </div>
            <div className="w-1/3 px-2 mr-14">
              <label className="text-white" htmlFor={`subject-${index}`}>
                Subject
              </label>
              <input
                className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                type="text"
                placeholder="Enter the subject"
                value={education.subject}
                onChange={(e) =>
                  handleQualificationChange(index, "subject", e.target.value)
                }
              />
            </div>
            <div className="w-1/3 pl-2 mr-14">
              <label className="text-white" htmlFor={`status-${index}`}>
                Status
              </label>
              <input
                className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                type="text"
                placeholder="Achieved/predicted"
                value={education.status}
                onChange={(e) =>
                  handleQualificationChange(index, "status", e.target.value)
                }
              />
            </div>

            <div className="w-1/3 pl-2">
              <label className="text-white" htmlFor={`schoolName-${index}`}>
                School name
              </label>
              <input
                className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                type="text"
                placeholder="School achieved grade at"
                value={education.schoolName}
                onChange={(e) =>
                  handleQualificationChange(index, "schoolName", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <div className="mt-10 flex items-center">
          <button
            className="text-blue-500 underline mr-4"
            onClick={(e) => addQualification(e)}
          >
            Add another qualification
          </button>
          <button
            className="text-red-500 underline"
            onClick={(e) => removeQualification(e)}
          >
            Remove qualification
          </button>
        </div>
      </div>
      <div className="mt-72">
        <Link className="mr-10" href="profile">
          <NormalButton text="Previous" />
        </Link>
        <Link href="sector">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Education;

