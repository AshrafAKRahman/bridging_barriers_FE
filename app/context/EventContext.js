"use client";
import React, { createContext, useState, useContext } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [savedEvents, setSavedEvents] = useState([]);

  const saveEvent = (event) => {
    setSavedEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, event];
      console.log("Saved Event:", event);
      return updatedEvents;
    });
  };

  return (
    <EventContext.Provider value={{ savedEvents, saveEvent }}>
      {children}
    </EventContext.Provider>
  );
};

const useEventContext = () => {
  return useContext(EventContext);
};

export { EventProvider, useEventContext };
