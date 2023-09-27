import Link from "next/link";

const LargeButton = ({ text, className, onClick }) => {
  return (
    <button
      type="submit"
      className={`w-32  h-12 text-xs text-white font-bold transform hover:scale-110 transition-transform rounded md:w-44 md:h-10 md:text-sm lg:w-52  lg:h-14 lg:text-2xl ipad:w-64 ipad:h-18 ipad:text-xl   ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LargeButton;
