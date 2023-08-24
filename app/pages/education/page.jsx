"use client"
import React from 'react'
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useState } from "react";
import NormalButton from "../../components/buttons/normalButton";

const Education = () => {
  const [secondarySchool, setSecondarySchool] = useState("");
  const [sixthForm, setySixthForm] = useState("");
  const [ucas, setUcas] = useState("");
  const [gcse, setGcse] = useState("");
  const [qualifications, setQualifications] = useState([
    { qualification: "", subject: "", status: "" },
  ]);

  const handleQualificationChange = (index, field, value) => {
    const newQualifications = [...qualifications];
    newQualifications[index][field] = value;
    setQualifications(newQualifications);
  };

  const addQualification = (e) => {
    e.preventDefault();
    if (qualifications.length < 5) {
      setQualifications([
        ...qualifications,
        { qualification: "", subject: "", status: "", schoolname: "" },
      ]);
    } else {
      alert("You can add up to 5 qualifications only");
    }
  };
  const removeQualification = (e) => {
    e.preventDefault();
    let qualificationsCopy = [...qualifications];
    if (qualificationsCopy.length > 1) {
      qualificationsCopy.pop();
      setQualifications(qualificationsCopy);
    }
  };

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
        {qualifications.map((qualification, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div className="w-1/3 pr-2 mr-14">
              <label className="text-white" htmlFor={`qualification-${index}`}>
                Qualification
              </label>
              <input
                className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                type="text"
                placeholder="Enter the qualification"
                value={qualification.qualification}
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
                value={qualification.subject}
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
                value={qualification.status}
                onChange={(e) =>
                  handleQualificationChange(index, "status", e.target.value)
                }
              />
            </div>

            <div className="w-1/3 pl-2">
              <label className="text-white" htmlFor={`schoolname-${index}`}>
                School name
              </label>
              <input
                className="bg-gray-200 rounded py-4 px-4 text-gray-700 border border-white w-full"
                type="text"
                placeholder="School achieved grade at"
                value={qualification.schoolname}
                onChange={(e) =>
                  handleQualificationChange(index, "schoolname", e.target.value)
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

