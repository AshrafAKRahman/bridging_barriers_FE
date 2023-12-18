"use client";
import React, { createContext, useState, useContext } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [savedEvents, setSavedEvents] = useState([]);

  const saveEvent = (event) => {
    setSavedEvents((prevSavedEvents) => [...prevSavedEvents, event]);
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
