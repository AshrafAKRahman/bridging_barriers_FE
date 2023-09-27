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
import { ToastContainer, toast } from "react-toastify";

const Education = () => {
  const { formData, handleChange, educationUpdate } = useFormContext();
  const { education } = formData;
  const [educationData, setEducationData] = useState({
    subject: "",
    qualification: "",
    status: "",
    date: "",
    schoolName: "",
  });

  const [editEducation, setEditEducation] = useState(null);
  const [editedEducationData, setEditedEducationData] = useState({
    subject: "",
    qualification: "",
    status: "",
    date: "",
    schoolName: "",
  });

  const notify = (e) => {
    e.preventDefault();
    const currentQualifications = formData.education || [];
    if (currentQualifications.length === 0) {
      toast("Please add at least 1 qualification");
    } else {
      window.location.href = "/pages/sector";
    }
  };

  const addQualification = (e) => {
    e.preventDefault();
    if (
      !educationData.subject ||
      !educationData.qualification ||
      !educationData.status ||
      !educationData.date ||
      !educationData.schoolName
    ) {
      toast("Please complete all input fields");
      return;
    }
    const currentQualifications = formData.education || [];
    if (currentQualifications.length < 4) {
      const newEducationItem = {
        id: uuidv4(),
        ...educationData,
      };
      handleChange({
        target: {
          name: "education",
          value: newEducationItem,
        },
      });
      setEducationData({
        subject: "",
        qualification: "",
        status: "",
        date: "",
        schoolName: "",
      });
    } else {
      toast("You have reached the maximum limit of 4 qualifications.");
    }
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
      subject: "",
      qualification: "",
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
        subject: itemToEdit.subject,
        qualification: itemToEdit.qualification,
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
          subject: editedEducationData.subject,
          qualification: editedEducationData.qualification,
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
      subject: "",
      qualification: "",
      status: "",
      date: "",
      schoolName: "",
    });
  };

  const reveal = () => {
    const FADE = gsap.timeline();
    FADE.from(".bg, .headerContainer, .header, .subheader", {
      autoAlpha: 0,
      x: -99,
      duration: 1,
      stagger: 0.5,
    });
    const TLIMAGE = gsap.timeline();
    TLIMAGE.from(".img", {
      autoAlpha: 0,
      x: 99,
      duration: 1.5,
    });
  };

  const revealContainer = () => {
    const TLCONTAINER = gsap.timeline();
    TLCONTAINER.from(".educationContainer, .btn, .addQuali ", {
      autoAlpha: 0,
      y: 100,
      duration: 0.5,
      delay: 2.5,
      stagger: 0.5,
    });
  };

  useEffect(() => {
    reveal();
    revealContainer();
  }, []);

  console.log(educationData);

  console.log(education);
  return (
    <div className="backdrop w-screen h-screen flex flex-col items-center justify-center py-10 md:py-12 ipad:py-36 ipad:px-0 horizontal:h-[200%] ">
      <img
        src="/loginBg.jpg"
        alt="login bg image"
        className="object-cover h-screen w-screen horizontal:h-[200%] absolute"
      />
      <Form>
        <div className="bg bg-black opacity-60 absolute z-10 h-[70%] w-11/12 rounded-2xl md:w-9/12 md:h-4/5 ipad:w-5/6 invisible"></div>
        <div className="form w-11/12 h-[70%] flex flex-col items-center md:w-9/12">
          <div className="headerContainer w-full h-fit flex-col flex justify-center items-center text-center z-20 mt-5 mb-5 md:w-full md:h-fit md:-mt-5 ipad:mt-5 invisible">
            <div className="header w-5/6 h-fit z-20 invisible">
              <Header
                title="Education details"
                titleClassName="text-3xl text-white"
              />
            </div>
            <div className="subheader mt-5 w-5/6 md:mt-0 invisible">
              <SubHeader
                title="Please Enter 4 of your most recent qualifications"
                titleClassName="text-lg text-white"
              />
            </div>
          </div>

          <div className="educationContainer h-fit w-full flex flex-col items-center  z-30 px-3 md:px-10 md:w-full md:h-2/3 ipad:mt-2 invisible">
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
                  title="Date"
                  titleClassName="text-white text-lg md:text-2xl"
                />
              </label>

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

          <div className="addQuali flex flex-col justify-between z-10 cursor-pointer mb-5 invisible">
            <button
              className="text-white text-lg"
              onClick={(e) => {
                addQualification(e);
              }}
            >
              Add Qualification
            </button>
          </div>

          <div className="moreEducation w-5/6 h-1/6 z-30 grid gap-2 grid-cols-2 grid-rows-2 md:w-5/6">
            {education &&
              education.map((value) => (
                <div
                  className="addedQuali text-white z-30 w-full p-2 flex justify-between overflow-hidden bg-white bg-opacity-20 backdrop-blur-md rounded-md drop-shadow-lg"
                  key={value.id}
                >
                  {value.subject}
                  <div className="text-white text-sm" key={value.id}>
                    <MdDelete onClick={(e) => removeQualification(value.id)} />
                    <AiFillEdit onClick={(e) => educationEdit(value.id)} />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="btn absolute translate-y-2/3 mt-20 h-1/3 w-full flex place-items-end justify-between px-5 md:px-24 md:w-full md:h-1/3 md:mt-36 invisible">
          <Link className="" href="profile">
            <LargeButton
              text="PREVIOUS"
              className="bg-blue-500 hover:bg-blue-700"
            />
          </Link>
          <Link href="sector">
            <LargeButton
              onClick={(e) => notify(e)}
              text="NEXT"
              className="bg-blue-500 hover:bg-blue-700"
            />
          </Link>
        </div>
        <img
          src="/education.jpg"
          alt="certificate image"
          className="img absolute object-cover w-5/6 h-3/6 px-2 rounded-2xl md:w-11/12 md:h-5/6 -z-10 invisible"
        />
        <ToastContainer />
      </Form>
      {editEducation !== null && (
        <div className="bg-white p-4 px-8 bg-opacity-10 backdrop-blur-md rounded-md drop-shadow-lg  z-30 absolute md:w-2/6">
          <h2 className="text-xl font-semibold mb-2 text-gray-200">
            Edit Education
          </h2>
          <form>
            <div className="w-full h-full">
              <div className="mb-6 mt-4 flex justify-between items-center">
                <label className="text-gray-200">Subject:</label>
                <input
                  className="bg-gray-600 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-white border border-white ml-2 "
                  name="subject"
                  type="text"
                  id="subject"
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
                <label className="text-gray-200">Qualification:</label>
                <input
                  className="bg-gray-600 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-white border border-white ml-2 "
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
                <label className="text-gray-200">Status:</label>
                <input
                  className="bg-gray-600 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-white border border-white ml-2 "
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
                <label className="text-gray-200">Date:</label>
                <input
                  className="bg-gray-600 rounded-lg w-56 py-1 px-1 md:py-2 md:px-2 text-gray-300 border border-white ml-2 "
                  name="date"
                  type={"date"}
                  id="date"
                  value={editedEducationData.date}
                  onChange={(e) =>
                    setEditedEducationData({
                      ...editedEducationData,
                      date: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6 mt-4 flex justify-between items-center">
                <label className="text-gray-200">School / Uni:</label>
                <input
                  className="bg-gray-600 rounded-lg w-56 py-1 px-1 text-white md:py-2 md:px-2 border border-white ml-2 "
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

            <div className="flex justify-around">
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
