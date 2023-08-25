import { useState } from "react";

const Checkbox = ({ label, onChange = () => {}, className = "" }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <label className={`flex items-center space-x-2 w-full ${className}`}>
      <input
        type="checkbox"
        className="form-checkbox h-8 w-8 hover:bg-blue-500"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`overflow-ellipsis overflow-hidden w-full ${className} text-sm`}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
