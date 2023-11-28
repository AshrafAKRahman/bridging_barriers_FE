const Events = () => {
  return <div>Enter</div>;
};

export default Events;

// "use client";

// import { useEffect, useState } from "react";

// const Events = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("../api/events");
//         const data = await response.json();
//         setEvents(data);
//         console.log("Your events:", data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {events.map((event) => (
//         <div key={event.id}>{event.name}</div>
//       ))}
//     </div>
//   );
// };

// export default Events;
