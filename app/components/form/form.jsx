const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white w-5/6 h-full  md:w-1/2 bg-opacity-10 backdrop-blur-md rounded-3xl  drop-shadow-lg flex flex-col items-center justify-center  md:h-full ipad:w-11/12 horizontal:w-5/6 horizontal:h-full"
    >
      {children}
    </form>
  );
};

export default Form;
