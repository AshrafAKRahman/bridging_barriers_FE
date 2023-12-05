"use client";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import React, { useEffect, useState } from "react";

require("dotenv").config();
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const apiKey = "PRNOOP6IZNQ75LZEVZWL";
        // process.env.EVENTBRITE_API;

        const response = await fetch(
          `https://www.eventbriteapi.com/v3/organizations/1906592885563/events/?status=live&token=${apiKey}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("failed to fetch events");
        }
        const data = await response.json();
        console.log("Response from Eventbrite API:", data);
        setEvents(data.events || []);
      } catch (error) {
        console.log("error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="w-screen h-screen bg-blue-500 pb-10">
      <Navbar />
      <div className="flex items-center justify-center pt-36 mb-10 ">
        <Header
          titleClassName="text-xl text-white text-center md:text-4xl"
          title="Upcoming Events"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">{event.name.text}</h2>
            <img
              src={event.logo.original.url}
              alt={event.name.text}
              className="mb-2 rounded-md"
            />
            <p>{event.description.text}</p>
            <p>{event.start.utc}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
