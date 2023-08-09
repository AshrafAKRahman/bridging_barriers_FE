const SubHeader = ({ title, titleClassName }) => {
  return (
    <header className="text-center">
      <h2 className={`${titleClassName} font-bold`}>{title}</h2>
    </header>
  );
};

export default SubHeader;
