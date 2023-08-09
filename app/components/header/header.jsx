const Header = ({ title, titleClassName }) => {
  return (
    <header className="py-5 text-center overflow-auto">
      <h1
        className={`${titleClassName} text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
