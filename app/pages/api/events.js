// pages/api/events.js

export default async function handler(req, res) {
  console.log("Request received at /api/events");
  const apiKey = process.env.API_KEY;
  const url = `https://www.eventbriteapi.com/v3/users/me/?token=${apiKey}`;

  // Enable CORS for all origins
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Handle the data as needed
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// pages/api/events.js

// export default async function handler(req, res) {
//   const apiKey = "PRNOOP6IZNQ75LZEVZWL";
//   const url = `https://www.eventbriteapi.com/v3/users/me/?token=${apiKey}`;
//   // Enable CORS for all origins
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     // Handle the data as needed
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

//   try {
//     // Your existing code to fetch events
//     const sdk = eventbrite({
//       token: "",
//     });

//     const events = await sdk.request("/users/me/events");
//     console.log("Your events:", events);

//     // Send the events in the response
//     res.status(200).json(events);
//   } catch (errInfo) {
//     console.error(errInfo.response["error_description"]);
//     const parsedError = errInfo.parsedError;

//     if (parsedError && parsedError.argumentErrors) {
//       console.log("Argument Errors:", parsedError.argumentErrors);
//     }

//     console.log("Error:", parsedError ? parsedError.error : "Unknown error");
//     console.log(
//       "Description:",
//       parsedError ? parsedError.description : "No description"
//     );

//     // Handle errors and send an appropriate response
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
