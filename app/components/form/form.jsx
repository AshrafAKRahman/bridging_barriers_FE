const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white w-5/6 h-2/6  md:w-1/2 bg-opacity-10 backdrop-blur-md rounded-3xl  drop-shadow-lg flex flex-col items-center justify-center flex-1 ipad:w-11/12 horizontal:w-5/6 horizontal:h-5/6"
    >
      {children}
    </form>
  );
};

export default Form;
