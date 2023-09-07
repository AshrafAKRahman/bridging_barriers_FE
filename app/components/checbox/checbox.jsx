import { useState } from "react";

const Checkbox = ({ label, onChange = () => {}, className = "" }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked, event.target.value);
  };

  return (
    <label className={`flex items-center space-x-2 w-full ${className}`}>
      <input
        type="checkbox"
        className="form-checkbox rounded-full  h-6 w-6 hover:bg-blue-500"
        checked={isChecked}
        onChange={handleCheckboxChange}
        value={label}
      />
      <span
        className={`overflow-ellipsis overflow-hidden w-full ${className} text-sm md:text-lg`}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
