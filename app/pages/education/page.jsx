"use client";
import React, { useEffect } from "react";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useState } from "react";
import { useFormContext } from "@/app/context/FormContext";
import InputField from "@/app/components/InputField/InputField";
import LargeButton from "@/app/components/buttons/largeButton";
import ParticlesBg from "@/app/components/particles/Particles";
import gsap from "gsap";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Education = () => {
  const { formData, handleChange } = useFormContext();
  const { education } = formData;
  const [educationData, setEducationData] = useState({
    qualification: "",
    subject: "",
    status: "",
    schoolName: "",
  });

  const [addedEducation, setAddedEducation] = useState(() => {
    const localData = window.localStorage.getItem("educationData");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "educationData",
      JSON.stringify(addedEducation)
    );
  }, [addedEducation]);

  const addQualification = (e) => {
    e.preventDefault();
    const newEducationItem = {
      id: uuidv4(),
      ...educationData,
    };
    setAddedEducation((prevAddedEducation) => [
      ...prevAddedEducation,
      newEducationItem,
    ]);

    handleChange({ target: { name: "education", value: addedEducation } });
    setEducationData({
      qualification: "",
      subject: "",
      status: "",
      schoolName: "",
    });
  };

  const removeQualification = (id) => {
    const newEducationData = addedEducation.filter((item) => item.id !== id);
    setAddedEducation(newEducationData);
    handleChange({ target: { name: "education", value: newEducationData } });
  };

  const reveal = () => {
    const FADE = gsap.timeline();
    FADE.from(".backdrop, .bg", {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      stagger: 0.5,
    });
  };

  useEffect(() => {
    reveal();
  }, []);

  console.log(educationData);

  console.log(education);
  return (
    <div className="backdrop bg-blue-500 w-screen h-screen flex flex-col items-center justify-center py-5  md:py-20 md:px-44 invisible">
      <div className="absolute -z-10">
        <ParticlesBg />
      </div>
      <Form>
        <div className="form w-full h-full flex flex-col items-center justify-center">
          <div className="bg bg-black opacity-60 absolute h-3/4 w-3/4 rounded-2xl mb-14 md:mb-6   md:h-3/5 md:w-1/3 z-10 invisible"></div>
          <div className="headerContainer w-full h-fit md:mt-24 flex-col flex justify-center items-center z-20 md:w-2/3">
            <div className="header w-5/6 h-fit text-center  flex flex-col justify-center items-center z-20">
              <Header
                title="Education details"
                titleClassName="text-3xl text-white"
              />
            </div>
          </div>

          <div className="educationContainer h-2/6 w-full mt-10 flex flex-col items-center justify-center z-30 md:mt-0 md:w-2/3 md:h-4/6 ">
            <div className="w-5/6 h-full flex flex-col justify-center items-center z-10">
              <div className="w-full h-full md:w-5/6 md:h-3/4 ">
                <div className="w-full flex justify-between mb-3 md:mb-5">
                  <div>
                    <label>
                      <Header
                        title="Qualifaction"
                        titleClassName="text-white text-lg md:text-2xl"
                      />
                    </label>
                  </div>
                  <InputField
                    name="qualification"
                    type={"text"}
                    value={educationData.qualification}
                    onChange={(e) =>
                      setEducationData({
                        ...educationData,
                        qualification: e.target.value,
                      })
                    }
                    placeholder="Enter the qualification"
                  />
                </div>
                <div className="w-full flex justify-between mb-3 md:mb-5">
                  <label>
                    <Header
                      title="Subject"
                      titleClassName="text-white text-lg md:text-2xl"
                    />
                  </label>
                  <InputField
                    name="subject"
                    type={"text"}
                    value={educationData.subject}
                    onChange={(e) =>
                      setEducationData({
                        ...educationData,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="w-full flex justify-between mb-3 md:mb-5">
                  <label>
                    <Header
                      title="Status"
                      titleClassName="text-white text-lg md:text-2xl"
                    />
                  </label>
                  <InputField
                    name="status"
                    type={"text"}
                    value={educationData.status}
                    onChange={(e) =>
                      setEducationData({
                        ...educationData,
                        status: e.target.value,
                      })
                    }
                    placeholder="Achieved/predicted"
                  />
                </div>
                <div className="w-full flex justify-between mb-3 md:mb-5">
                  <label>
                    <Header
                      title="School"
                      titleClassName="text-white text-lg md:text-2xl"
                    />
                  </label>
                  <InputField
                    name="schoolName"
                    type="text"
                    value={educationData.schoolName}
                    onChange={(e) =>
                      setEducationData({
                        ...educationData,
                        schoolName: e.target.value,
                      })
                    }
                    placeholder="School achieved grade at"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between z-10 ">
            <div className="flex items-center justify-center h-fit w-full">
              <button
                className="text-white text-lg"
                onClick={(e) => addQualification(e)}
              >
                Add another qualification
              </button>
            </div>
          </div>

          <div className="moreEducation w-5/6 h-fit flex justify-around items-center z-30 bg-yellow-400">
            {addedEducation.map((value) => (
              <div
                className="text-white z-30 w-5/6 flex justify-around bg-red-500 "
                key={value.id}
              >
                {value.qualification}
                <div
                  className="text-white text-lg"
                  onClick={(e) => removeQualification(value.id)}
                >
                  <MdDelete />
                </div>
              </div>
            ))}
          </div>

          <div className="img h-2/3 absolute  flex items-center justify-center md:h-full">
            <img
              src="/education.jpg"
              alt="certificate image"
              className="w-5/6 h-4/6 px-2 rounded-2xl md:w-full md:h-2/3"
            />
          </div>
          <div className=" h-1/3 w-full flex items-center justify-around z-20 pt-20 md:w-4/5">
            <Link className="mr-10" href="profile">
              <LargeButton
                text="Previous"
                className="md:bg-blue-500 md:hover:bg-blue-700 bg-teal-500 hover:bg-teal-800 mt-10"
              />
            </Link>
            <Link href="sector">
              <LargeButton
                text="Next"
                className="md:bg-blue-500 md:hover:bg-blue-700 bg-teal-500 hover:bg-teal-800 mt-10"
              />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Education;
