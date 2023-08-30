import { Asap_Condensed } from "next/font/google";

const asap = Asap_Condensed({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const Header = ({ title, titleClassName }) => {
  return (
    <div className={asap.className}>
      <header className="">
        <h1
          className={`${titleClassName} tracking-wide   md:text-5xlxl lg:text-4xl xl:text-5xl font-bold`}
        >
          {title}
        </h1>
      </header>
    </div>
  );
};

export default Header;
