"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CgProfile } from "react-icons/cg";
import Header from "../../components/header/header";
import { PickerOverlay } from "filestack-react";
import { useEventContext } from "../../context/EventContext";
import { useBlogContext } from "../../context/BlogContext";
import NormalButton from "../../components/buttons/normalButton";

const LogedIn = () => {
  const { savedEvents, handleDeleteEvent } = useEventContext();
  const { savedBlogs, deleteBlog } = useBlogContext();
  const [showPicker, setShowPicker] = useState(false);
  const [uploadedFileHandle, setUploadedFileHandle] = useState("");
  const [userList, setUserList] = useState([]);
  console.log("Saved Events:", savedEvents);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5432/api/userdata");
        if (response.ok) {
          const data = await response.json();
          setUserList(data.payload);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

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

  const truncateTitle = (title, wordsLimit) => {
    const words = title.split(" ");
    if (words.length > wordsLimit) {
      return words.slice(0, wordsLimit).join(" ") + "...";
    }
    return title;
  };
  console.log(userList);
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
          <div className="ml-5 md:ml-10 bg-yellow-400">
            <div className="w-2/3">
              {userList.length > 0 &&
                userList[0].first_name &&
                userList[0].sur_name && (
                  <div className="flex  justify-between ">
                    <Header
                      titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                      title="Name :"
                    />
                    <Header
                      titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                      title={`${userList[0].first_name} ${userList[0].sur_name}`}
                    />
                  </div>
                )}
              <div className="w-2/3">
                {userList.length > 0 && userList[0].location && (
                  <div className="flex justify-between">
                    <Header
                      titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                      title="Location :"
                    />
                    <Header
                      titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                      title={`${userList[0].location}`}
                    />
                  </div>
                )}
              </div>

              <div className="w-2/3">
                {userList.length > 0 && userList[0].sector_one && (
                  <div className="flex justify-between">
                    <Header
                      titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                      title="Sectors :"
                    />
                    <Header
                      titleClassName="text-lg text-gray-700 mt-5 md:mt-10 md:text-3xl"
                      title={`${userList[0].sector_one}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Saved Blogs Section */}

        <div className="h-full w-full flex-col pb-10 px-5 md:mt-28 md:w-2/3 md:h-5/6">
          <div className="h-full w-full flex flex-col items-center justify-evenly mb-5 ">
            <div className="w-full h-2/3 bg-white flex items-center justify-evenly border-solid border-2 border-sky-500 rounded-lg my-2 mb-5">
              {savedBlogs.length === 0 ? (
                <Header
                  title="Your saved blogs will appear here"
                  titleClassName="text-lg text-gray-700 mt-5 mb-5 md:mt-8  md:text-3xl"
                />
              ) : (
                savedBlogs
                  .slice(0, window.innerWidth >= 768 ? 4 : 3)
                  .map((blog, index) => (
                    <div
                      className="w-20 md:w-36 text-center mb-5 mt-5"
                      key={index}
                    >
                      <div className="text-xs md:text-sm mb-5 flex-col justify-center items-center">
                        <strong>{truncateTitle(blog.title, 6)}</strong>
                        <img
                          src={blog.content.imageSrc}
                          alt="blog image"
                          className="mb-2 rounded-md w-20 h-16 md:w-36 md:h-24"
                        />
                      </div>
                      <div className="flex justify-center">
                        <NormalButton
                          text="Delete"
                          onClick={() => deleteBlog(blog.id)}
                        />
                      </div>
                    </div>
                  ))
              )}
            </div>

            {/* Saved Events Section */}

            <div className="w-full h-2/3 bg-white flex items-center justify-evenly border-solid border-2 border-sky-500 rounded-lg my-2">
              {savedEvents.length === 0 ? (
                <Header
                  title="Your saved events will appear here"
                  titleClassName="text-lg text-gray-700 mt-5 mb-5 md:mt-8  md:text-3xl"
                />
              ) : (
                savedEvents.map((event) => (
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
                ))
              )}
            </div>

            {/* Saved Careers Sectiom */}

            <div className="w-full h-2/3 bg-white flex items-center justify-evenly border-solid border-2 border-sky-500 rounded-lg my-2">
              <div className="flex items-center justify-center w-3/4 h-5/6">
                <Header
                  title="Your saved Jobs will appear here"
                  titleClassName="text-lg text-gray-700 mt-5 mb-5 md:mt-8  md:text-3xl"
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
