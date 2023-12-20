import React from "react";

const NormalButton = ({ text, onClick }) => {
  return (
    <button
      style={{ width: "85px", height: "47px" }}
      className="shadow-md shadow-black text-white bg-blue-500 hover:bg-blue-900 text-center text-sm font-bold py-3 transform hover:scale-110 transition-transform "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NormalButton;
