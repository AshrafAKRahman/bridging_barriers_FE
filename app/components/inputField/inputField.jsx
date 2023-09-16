import React from "react";

const InputField = (props) => {
  const { value, type, onChange, placeholder, name } = props;
  return (
    <div>
      <input
        className="bg-gray-200 rounded-lg w-36 py-1 px-1 md:py-2 md:px-2 text-gray-700 border border-white md:w-60 "
        id="inline-firstName"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
