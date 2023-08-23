import Link from "next/link";

const LargeButton = ({ text, className }) => {
  return (
    <button
      type="submit"
      className={`w-32  sm:w-36  h-12 text-xs sm:text-sm md:w-44 md:h-12 md:text-sm lg:w-56   lg:h-16 lg:text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold transform hover:scale-110 transition-transform rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default LargeButton;
