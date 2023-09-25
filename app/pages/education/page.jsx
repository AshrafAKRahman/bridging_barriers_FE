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
import SubHeader from "@/app/components/subHeader/subHeader";

const Education = () => {
  const { formData, handleChange, educationUpdate } = useFormContext();
  const { education } = formData;
  const [educationData, setEducationData] = useState({
    qualification: "",
    subject: "",
    status: "",
    date: "",
    schoolName: "",
  });

  const [editEducation, setEditEducation] = useState(null);
  const [editedEducationData, setEditedEducationData] = useState({
    qualification: "",
    subject: "",
    status: "",
    date: "",
    schoolName: "",
  });

  const addQualification = (e) => {
    e.preventDefault();
    const newEducationItem = {
      id: uuidv4(),
      ...educationData,
    };

    handleChange({ target: { name: "education", value: newEducationItem } });
    setEducationData({
      qualification: "",
      subject: "",
      status: "",
      date: "",
      schoolName: "",
    });
  };

  const removeQualification = (id) => {
    console.log(id);
    const newEducationData = education.filter((item) => item.id !== id);
    console.log(newEducationData);
    educationUpdate({ target: { name: "education", value: newEducationData } });
  };

  const cancelEdit = () => {
    setEditEducation(null);
    setEditedEducationData({
      qualification: "",
      subject: "",
      status: "",
      date: "",
      schoolName: "",
    });
  };

  const educationEdit = (id) => {
    console.log(id);
    setEditEducation(id);

    const itemToEdit = education.find((item) => item.id === id);

    if (itemToEdit) {
      setEditedEducationData({
        id: itemToEdit.id,
        qualification: itemToEdit.qualification,
        subject: itemToEdit.subject,
        status: itemToEdit.status,
        date: itemToEdit.date,
        schoolName: itemToEdit.schoolName,
      });
    }
  };
  console.log(editedEducationData);

  const updateEducation = (e) => {
    e.preventDefault();
    const newEdcuation = education.map((data) => {
      if (data.id === editedEducationData.id) {
        return {
          ...data,
          qualification: editedEducationData.qualification,
          subject: editedEducationData.subject,
          status: editedEducationData.status,
          date: editedEducationData.date,
          schoolName: editedEducationData.schoolName,
        };
      }
      return data;
    });
    educationUpdate({ target: { name: "education", value: newEdcuation } });
    setEditEducation(null);
    setEditedEducationData({
      qualification: "",
      subject: "",
      status: "",
      date: "",
      schoolName: "",
    });
  };

  const reveal = () => {
    const FADE = gsap.timeline();
    FADE.from(".backdrop, .bg", {
      autoAlpha: 0,
      x: 99,
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
    <div className="backdrop  w-screen h-screen flex flex-col items-center justify-center py-10 md:py-20  ipad:py-36 ipad:px-0 horizontal:h-[200%] invisible">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen horizontal:h-[200%] absolute"
      />
      <Form>
        <div className="form w-11/12 h-[70%] flex flex-col items-center justify-center md:w-9/12 bg-green-600 ">
          <div className="bg bg-black opacity-50 absolute z-10 h-[70%] w-11/12 rounded-2xl md:w-9/12 ipad:w-4/6 invisible"></div>

          <div className="headerContainer w-full h-1/3 flex-col flex justify-center items-center text-center z-20 md:w-full md:h-1/3 bg-red-400 ">
            <div className="header w-5/6 h-fit z-20">
              <Header
                title="Education details"
                titleClassName="text-3xl text-white"
              />
            </div>
            <div className="mt-5 w-5/6 ">
              <SubHeader
                title="Please Enter 4 of your most recent qualifications"
                titleClassName="text-lg text-white"
              />
            </div>
          </div>

          <div className="educationContainer h-1/3 w-11/12 flex flex-col items-center justify-center z-30 mt-10 md:w-5/6 md:h-4/6 bg-yellow-500 ">
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
            <div className="dob w-full h-fit mb-5 flex justify-between ">
              <div className="text-white md:ml-16 ">
                <label>
                  <Header
                    title="Date Expected / Achieved"
                    titleClassName="text-lg md:text-2xl"
                  />
                </label>
              </div>
              <div className="md:mr-10">
                <InputField
                  name="date"
                  type={"date"}
                  value={educationData.date}
                  onChange={(e) =>
                    setEducationData({
                      ...educationData,
                      date: e.target.value,
                    })
                  }
                />
              </div>
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

          <div className="moreEducation w-5/6 h-1/6 z-30 grid gap-2 grid-cols-2 grid-rows-2 md:w-3/6 bg-cyan-400">
            {education &&
              education.map((value) => (
                <div
                  className="text-white z-30 w-full p-4 flex justify-between overflow-hidden bg-white bg-opacity-20 backdrop-blur-md rounded-md drop-shadow-lg"
                  key={value.id}
                >
                  {value.qualification}
                  <div className="text-white text-lg" key={value.id}>
                    <MdDelete onClick={(e) => removeQualification(value.id)} />
                    <div>
                      <AiFillEdit onClick={(e) => educationEdit(value.id)} />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <img
            src="/education.jpg"
            alt="certificate image"
            className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:w-11/12 md:h-4/5 hidden"
          />

          <div
            className=" h-1/5 w-full flex items-cener justify-center z-20 static md:w-4/5 md:h-full
           bg-pink-600 "
          >
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
              <div className="dob w-full h-fit mb-5 flex justify-between ">
                <div className="text-white md:ml-16 ">
                  <label>
                    <Header
                      title="Date Expected / Achieved"
                      titleClassName="text-lg md:text-2xl"
                    />
                  </label>
                </div>
                <div className="md:mr-10">
                  <InputField
                    name="date"
                    type={"date"}
                    value={editedEducationData.date}
                    onChange={(e) =>
                      setEditedEducationData({
                        ...editedEducationData,
                        date: e.target.value,
                      })
                    }
                  />
                </div>
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
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Education;
