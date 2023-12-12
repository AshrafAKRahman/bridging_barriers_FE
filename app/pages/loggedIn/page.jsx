"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { CgProfile } from "react-icons/cg";
import Header from "../../components/header/header";

const LogedIn = () => {
  const [savedEvents, setSavedEvents] = useState([]);

  const handleDeleteEvent = (eventId) => {
    const updatedSavedEvents = savedEvents.filter(
      (savedEvent) => savedEvent.id !== eventId
    );
    setSavedEvents(updatedSavedEvents);
    localStorage.setItem("savedEvents", JSON.stringify(updatedSavedEvents));
  };

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageAvailable) {
      const storedEvents =
        JSON.parse(localStorage.getItem("savedEvents")) || [];
      setSavedEvents(storedEvents);
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-500 pb-10">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center">
        <div className="flex w-full h-full flex-col items-center justify-center md:mt-10 md:justify-center md:items-center md:w-1/2 md:h-full">
          <div className="bg bg-gray-300 absolute w-5/6 h-2/6 mt-20  flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-md rounded-2xl md:h-2/3 md:w-1/4 md:mt-0">
            <div className="w-full h-1/2 flex justify-center items-center">
              <CgProfile size={104} />
            </div>
            <div className="w-full h-1/2 flex justify-center px-10">
              <Header
                titleClassName="text-xl text-gray-700  text-center md:text-4xl"
                title="Thank you for creating your profile. We are currently bridging the barrier to your dashboard "
              />
            </div>
          </div>
        </div>

        <div className="h-1/2 w-full flex justify-center items-center pb-10 md:pb-0 md:mt-10 md:mr-10 md:w-1/2 md:h-full">
          <div className="bg bg-gray-300 absolute w-5/6 h-2/3 flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-md rounded-2xl md:h-3/4 md:w-3/6 md:mt-10 md:mr-16">
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
                {savedEvents.map((savedEvent) => (
                  <div key={savedEvent.id}>
                    <p>{savedEvent.name.text}</p>
                    <img
                      src={savedEvent.logo.original.url}
                      alt={savedEvent.name.text}
                      className="mb-2 rounded-md w-36 h-24"
                    />
                    <button onClick={() => handleDeleteEvent(savedEvent.id)}>
                      Delete
                    </button>
                  </div>
                ))}
                {savedEvents.length === 0 && <p>No saved events</p>}
                {savedEvents.id}
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LogedIn;
