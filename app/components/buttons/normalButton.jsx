import React from "react";

const NormalButton = ({ text, onClick }) => {
  return (
    <button
      className="w-20 h-6 text-xs text-center shadow-md shadow-black text-white bg-blue-500 hover:bg-blue-900 md:text-sm font-bold transform hover:scale-110 transition-transform md:w-24 md:h-8"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NormalButton;
