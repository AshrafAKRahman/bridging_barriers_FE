import Link from "next/link";

const LargeButton = ({ text, className, href }) => {
  return (
    <Link href={href}>
      <button
        className={`w-64 h-12 text-lg md:w-64 md:h-12 md:text-xl lg:w-72 lg:h-16 lg:text-2xl bg-teal-600 hover:bg-teal-900 text-white font-bold transform hover:scale-110 transition-transform rounded ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LargeButton;
