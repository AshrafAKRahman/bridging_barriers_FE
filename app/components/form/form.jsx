const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white w-5/6 h-2/6  md:w-1/2 bg-opacity-10 backdrop-blur-md rounded-md drop-shadow-lg flex flex-col items-center justify-center"
      style={{
        height: "80vh",
        flex: 1,
        borderRadius: "20px",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      {children}
    </form>
  );
};

export default Form;
