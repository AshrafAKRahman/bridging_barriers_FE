import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "900",
  preload: true,
});

const SubHeader = ({ title, titleClassName }) => {
  return (
    <div className={raleway.className}>
      <header className="text-center">
        <h2 className={`${titleClassName} font-bold`}>{title}</h2>
      </header>
    </div>
  );
};

export default SubHeader;
