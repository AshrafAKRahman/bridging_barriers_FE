"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CgProfile } from "react-icons/cg";
import Header from "../../components/header/header";
import { PickerOverlay } from "filestack-react";
import { useEventContext } from "../../context/EventContext";

const LogedIn = () => {
  const { savedEvents, handleDeleteEvent } = useEventContext();
  const [showPicker, setShowPicker] = useState(false);
  const [uploadedFileHandle, setUploadedFileHandle] = useState("");
  console.log("Saved Events:", savedEvents);

  useEffect(() => {
    const isLocalStorageViable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageViable) {
      const handle = localStorage.getItem("uploadedFileHandle");
      setUploadedFileHandle(handle);
    }
  }, []);

  const saveImageHandleToLocal = (handle) => {
    localStorage.setItem("uploadedFileHandle", handle);
  };

  return (
    <div className="w-screen h-screen bg-blue-500 pb-10">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-between md:flex-row">
        <div className="h-full mt-32 mx-5 flex-col rounded-2xl md:h-3/4 md:w-1/3 bg-gray-100">
          <div className="flex justify-center">
            {uploadedFileHandle ? (
              <div className="h-1/4 w-1/4 mt-10 md:h-1/3 md:w-1/3">
                <button className="" onClick={() => setShowPicker(true)}>
                  <img
                    src={`https://cdn.filestackcontent.com/${uploadedFileHandle}`}
                    alt="profile picture"
                    className="rounded-full"
                  />
                </button>
              </div>
            ) : (
              <button onClick={() => setShowPicker(true)}>
                <CgProfile size={104} />
              </button>
            )}
            {showPicker && (
              <PickerOverlay
                apikey="AqutFwBhtQITdnIELHj2gz"
                pickerOptions={{
                  accept: ["image/*"],
                  fromSources: ["local_file_system"],
                  onClose: () => setShowPicker(false),
                  onUploadDone: (res) => {
                    const handle = res.filesUploaded[0].handle;
                    setUploadedFileHandle(handle);
                    saveImageHandleToLocal(handle);
                    setShowPicker(false);
                  },
                }}
              />
            )}
          </div>
          <div className="ml-10">
            <div className="w-2/3">
              <strong>
                <p className="mt-10 text-lg text-blue-800 md:text-3xl">
                  Name :{" "}
                </p>
                <p className="mt-5 text-lg text-blue-800 md:text-3xl md:mt-8">
                  Location :{" "}
                </p>
                <p className="mt-5 text-lg text-blue-800 md:text-3xl md:mt-8">
                  Sectors :{" "}
                </p>
              </strong>
            </div>
          </div>
        </div>

        <div className="h-5/6 w-full flex-col justify-center items-center mt-10 pb-10 md:pb-0 md:pt-0 md:mt-10 md:w-1/2 md:h-full overflow-scroll bg-yellow-400">
          {/* <div className="bg bg-gray-300 absolute w-5/6 h-2/3 flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-md rounded-2xl md:h-3/4 md:w-3/6 "> */}
          <div className="w-fit h-fit flex justify-center pt-5 md:pt-16">
            <Header
              titleClassName="text-2xl text-gray-700  text-center md:text-4xl"
              title="Your Saved Items"
            />
          </div>
          <div className="h-full w-full flex flex-col items-center justify-evenly mb-5 ">
            <div className="w-full h-2/3 bg-white flex items-center justify-center border-solid border-2 border-sky-500 rounded-lg my-2 md:w-5/6 md:h-1/4 ">
              <img
                src="/blog.png"
                alt="blog image"
                className="w-1/6 h-5/6 pl-4"
              />
              <div className="w-3/4 h-5/6 md:px-10">
                <Header
                  titleClassName="text-sm text-gray-700  text-center md:text-2xl"
                  title="Your Saved Bolgs"
                />
              </div>
            </div>

            <div className="w-full h-2/3 bg-white flex items-center justify-evenly border-solid border-2 border-sky-500 rounded-lg my-2">
              {savedEvents.map((event) => (
                <div key={event.id}>
                  <strong>
                    <p className="mb-5 text-center">{event.name.text}</p>
                  </strong>
                  <img
                    src={event.logo.original.url}
                    alt={event.name.text}
                    className="mb-2 rounded-md w-20 h-16 md:w-36 md:h-24"
                  />
                  <div className="text-center ">
                    <button onClick={() => handleDeleteEvent(event.id)}>
                      <strong>Delete</strong>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-5/6 h-1/4 bg-white flex items-center justify-center border-solid border-2 border-sky-500 rounded-lg my-5">
              <img
                src="/jobs.png"
                alt="jobs image"
                className="w-1/6 h-5/6 pl-4"
              />
              <div className="w-3/4 h-5/6 px-10 ">
                <Header
                  titleClassName="text-sm text-gray-700  text-center md:text-2xl"
                  title="Your Saved Jobs"
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogedIn;
