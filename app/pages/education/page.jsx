"use client";
import React, { useEffect } from "react";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Link from "next/link";
import { useState } from "react";
import { useFormContext } from "../../context/FormContext";
import InputField from "../../components/inputField/inputField";
import LargeButton from "../../components/buttons/largeButton";
import ParticlesBg from "../../components/particles/Particles";
import gsap from "gsap";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const Education = () => {
  const { formData, handleChange, educationUpdate } = useFormContext();
  const { education } = formData;
  const [educationData, setEducationData] = useState({
    subject: "",
    qualification: "",
    status: "",
    schoolName: "",
  });

  const [addedEducation, setAddedEducation] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = window.localStorage.getItem("educationData");
      setAddedEducation(localData ? JSON.parse(localData) : []);
    }
  }, []);

  const [editEducation, setEditEducation] = useState(null);
  const [editedEducationData, setEditedEducationData] = useState({
    subject: "",
    qualification: "",
    status: "",
    schoolName: "",
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

    handleChange({ target: { name: "education", value: newEducationItem } });
    setEducationData({
      subject: "",
      qualification: "",
      status: "",
      schoolName: "",
    });
  };

  const removeQualification = (id) => {
    console.log(id);
    const newEducationData = education.filter((item) => item.id !== id);
    console.log(newEducationData);
    educationUpdate({ target: { name: "education", value: newEducationData } });
  };

  const educationEdit = (id) => {
    console.log(id);
    setEditEducation(id);

    // Find the education item with the given ID
    const itemToEdit = education.find((item) => item.id === id);

    // Initialize editedEducationData with the data of the item
    if (itemToEdit) {
      setEditedEducationData({
        id: itemToEdit.id,
        subject: itemToEdit.subject,
        qualification: itemToEdit.qualification,
        status: itemToEdit.status,
        schoolName: itemToEdit.schoolName,
      });
    }
  };

  const updateEducation = (e) => {
    e.preventDefault();
    console.log(editedEducationData);
    const updatedEducation = education.map((item) =>
      item.id === editedEducationData.id ? editedEducationData : item
    );
    handleChange({ target: { name: "education", value: updatedEducation } });

    setEditedEducationData({
      id: null,
      subject: "",
      qualification: "",
      status: "",
      schoolName: "",
    });
    setEditEducation(null);

    console.log("update called");
  };

  const cancelEdit = () => {
    setEditedEducationData({
      id: null,
      subject: "",
      qualification: "",
      status: "",
      schoolName: "",
    });
    setEditEducation(null);
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
          <div className="bg bg-black opacity-60 absolute h-4/5 w-3/4 rounded-2xl mb-14 md:mb-0  md:h-4/6 md:w-1/3 z-10 invisible"></div>
          <div className="headerContainer w-5/6 h-1/3 flex-col flex justify-center items-center z-20 md:mt-10  md:w-1/3 ">
            <div className="header w-5/6 h-fit text-center  flex flex-col justify-center items-center z-20">
              <Header
                title="Education details"
                titleClassName="text-3xl text-white"
              />
            </div>
          </div>

          <div className="educationContainer h-1/3 w-5/6 flex flex-col items-center justify-center z-30 mt-10 md:w-3/6 md:h-4/6 ">
            <div className="w-full flex justify-between mb-3 md:mb-5">
              <div>
                <label>
                  <Header
                    title="Subject"
                    titleClassName="text-white text-lg md:text-2xl"
                  />
                </label>
              </div>
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
                placeholder="Enter Subject"
              />
            </div>
            <div className="w-full flex justify-between mb-3 md:mb-5 ">
              <label>
                <Header
                  title="Qualification"
                  titleClassName="text-white text-lg md:text-2xl"
                />
              </label>
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
                placeholder="Enter qualification"
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
                  title="School / Uni"
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
                placeholder="School / Uni achieved grade at"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between z-10">
            <button
              className="text-white text-lg"
              onClick={(e) => addQualification(e)}
            >
              Add Qualification
            </button>
          </div>

          <div className="moreEducation w-5/6 h-1/3 z-30 grid gap-2 grid-cols-2 grid-rows-2 md:w-3/6 bg-red-800">
            {education &&
              education.map((value) => (
                <div
                  className="addedQualification text-white z-30 w-full p-4 flex justify-between overflow-hidden bg-gray-900"
                  key={value.id}
                >
                  {value.qualification}
                  <div
                    className="text-white text-lg"
                    onClick={(e) => removeQualification(value.id)}
                    key={value.id}
                  >
                    <MdDelete />
                    <div onClick={(e) => educationEdit(value.id)}>
                      <AiFillEdit />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {editEducation !== null && (
            <div className="bg-white p-4 rounded shadow z-30 absolute md:w-2/6">
              <h2 className="text-xl font-semibold mb-2">Edit Education</h2>
              <form>
                <div className="w-full h-full">
                  <div className="mb-6 mt-4 flex justify-between items-center">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      className="bg-gray-200 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-gray-700 border border-white ml-2 "
                      type="text"
                      id="subject"
                      name="subject"
                      value={editedEducationData.subject}
                      onChange={(e) =>
                        setEditedEducationData({
                          ...editedEducationData,
                          subject: e.target.value,
                        })
                      }
                      placeholder="Enter Subject"
                    />
                  </div>
                  <div className="mb-6 mt-4 flex justify-between items-center">
                    <label htmlFor="qualification">Qualification:</label>
                    <input
                      className="bg-gray-200 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-gray-700 border border-white ml-2 "
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={editedEducationData.qualification}
                      onChange={(e) =>
                        setEditedEducationData({
                          ...editedEducationData,
                          qualification: e.target.value,
                        })
                      }
                      placeholder="Enter qualification"
                    />
                  </div>
                  <div className="mb-6 mt-4 flex justify-between items-center">
                    <label htmlFor="status">Status:</label>
                    <input
                      className="bg-gray-200 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-gray-700 border border-white ml-2 "
                      type="text"
                      id="status"
                      name="status"
                      value={editedEducationData.status}
                      onChange={(e) =>
                        setEditedEducationData({
                          ...editedEducationData,
                          status: e.target.value,
                        })
                      }
                      placeholder="Expected / Predicted grade"
                    />
                  </div>
                  <div className="mb-6 mt-4 flex justify-between items-center">
                    <label htmlFor="schoolName">School / Uni:</label>
                    <input
                      className="bg-gray-200 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-gray-700 border border-white ml-2 "
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={editedEducationData.schoolName}
                      onChange={(e) =>
                        setEditedEducationData({
                          ...editedEducationData,
                          schoolName: e.target.value,
                        })
                      }
                      placeholder="School / Uni achieved grade at"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={(e) => updateEducation(e)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-3 py-1 rounded "
                    onClick={() => cancelEdit()}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="img h-2/3 absolute  flex items-center justify-center md:h-full">
            <img
              src="/education.jpg"
              alt="certificate image"
              className="w-5/6 h-4/6 px-2 rounded-2xl md:w-full md:h-2/3"
            />
          </div>
          <div className=" h-1/5 w-full flex items-cener justify-center z-20 md:w-4/5 md:h-fit  ">
            <Link className="mr-10" href="profile">
              <LargeButton
                text="PREVIOUS"
                className="md:bg-blue-500 md:hover:bg-blue-700 bg-teal-500 hover:bg-teal-800 "
              />
            </Link>
            <Link href="sector">
              <LargeButton
                text="NEXT"
                className="md:bg-blue-500 md:hover:bg-blue-700 bg-teal-500 hover:bg-teal-800 "
              />
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Education;
