import React from "react";

const InputField = (props) => {
  const { value, type, onChange, placeholder, name } = props;
  const uniqueId = `input-${name}`; // Generate a unique id based on the name prop
  return (
    <div>
      <input
        className="bg-gray-200 rounded-lg w-36 py-1 px-1 md:py-2 md:px-2 text-gray-700 border border-white md:w-60 horizontal:h-8"
        id={uniqueId} // Use the uniqueId variable as the id attribute
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
