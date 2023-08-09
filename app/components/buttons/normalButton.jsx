import React from "react";

const NormalButton = ({ text }) => {
  return (
    <button
      style={{ width: "85px", height: "47px", borderRadius: "12px" }}
      className="bg-teal-600 hover:bg-teal-900 text-white text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform shadow-xl"
    >
      {text}
    </button>
  );
};

export default NormalButton;
