import React from "react";

const InputFeild = (props) => {
  const { value, type, onChange, placeholder, name } = props;
  return (
    <div>
      <input
        className="bg-gray-200 rounded-3xl   w-36 py-1.5 px-1.5 md:py-4 md:px-4 text-gray-700 border border-white md:w-80"
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

export default InputFeild;
