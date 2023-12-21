"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CgProfile } from "react-icons/cg";
import Header from "../../components/header/header";
import { PickerOverlay } from "filestack-react";
import { useEventContext } from "../../context/EventContext";
import { useBlogContext } from "../../context/BlogContext";

const LogedIn = () => {
  const { savedEvents, handleDeleteEvent } = useEventContext();
  const { savedBlogs, deleteBlog } = useBlogContext();
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
          <div className="ml-5 md:ml-10">
            <div className="w-2/3">
              <Header
                titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                title="Name :"
              />
              <Header
                titleClassName="text-lg text-gray-700 mt-5 md:mt-8 md:text-3xl"
                title="Location :"
              />
              <Header
                titleClassName="text-lg text-gray-700 mt-5 md:mt-8  md:text-3xl"
                title="Sectors :"
              />
            </div>
          </div>
        </div>

        <div className="h-full w-full flex-col pb-10 px-5 md:mt-10 md:w-2/3 md:h-5/6">
          <div className="flex justify-center">
            <div className="w-fit h-fit pt-5 md:pt-16"></div>
          </div>
          <div className="h-full w-full flex flex-col items-center justify-evenly mb-5 ">
            <div className="w-full h-2/3 bg-white flex items-center justify-evenly border-solid border-2 border-sky-500 rounded-lg my-2">
              <ul>
                {savedBlogs.map((blog, index) => (
                  <div key={index}>
                    {blog.title}
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                  </div>
                ))}
              </ul>
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

            <div className="w-full h-2/3 bg-white flex items-center justify-evenly border-solid border-2 border-sky-500 rounded-lg my-2">
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogedIn;
