import React from "react";
import Header from "../header/header";
import InputFeild from "../inputFeild/inputFeild";
import { useFormContext } from "@/app/context/FormContext";
import Link from "next/link";
import NormalButton from "../buttons/normalButton";

const EducationInput = ({ index }) => {
  const { formData, handleChange } = useFormContext();
  const { education } = formData;

  const handleQualificationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    handleChange({ target: { name: "education", value: newEducation } });
  };

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
              value={education.qualification}
              onChange={(e) =>
                handleQualificationChange(
                  index,
                  "qualification",
                  e.target.value
                )
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
              value={education.subject}
              onChange={(e) =>
                handleQualificationChange(index, "subject", e.target.value)
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
              value={education.status}
              onChange={(e) =>
                handleQualificationChange(index, "status", e.target.value)
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
              value={education.schoolName}
              onChange={(e) =>
                handleQualificationChange(index, "schoolName", e.target.value)
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
