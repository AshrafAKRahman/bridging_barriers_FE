const Header = ({ title, titleClassName }) => {
  return (
    <header className="">
      <h1
        className={`${titleClassName} md:text-5xlxl lg:text-4xl xl:text-5xl font-bold`}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
