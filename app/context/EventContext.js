"use client";
import React, { createContext, useEffect, useState, useContext } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const isLocalStorageViable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageViable) {
      const storedEvents = JSON.parse(localStorage.getItem("savedEvents"));
      setSavedEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    const isLocalStorageViable =
      typeof window !== "undefined" && window.localStorage;

    if (isLocalStorageViable) {
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }
  }, [savedEvents]);

  const saveEvent = (event) => {
    setSavedEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, event];
      console.log("Saved Event:", event);
      return updatedEvents;
    });
  };
  const handleDeleteEvent = (eventId) => {
    const updatedSavedEvents = savedEvents.filter(
      (event) => event.id !== eventId
    );

    setSavedEvents(updatedSavedEvents);
    localStorage.setItem("savedEvents", JSON.stringify(updatedSavedEvents));
  };

  return (
    <EventContext.Provider
      value={{ savedEvents, saveEvent, handleDeleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

const useEventContext = () => {
  return useContext(EventContext);
};

export { EventProvider, useEventContext };
