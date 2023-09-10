const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-blue-200 rounded-lg w-5/6 h-4/6 shadow-2xl shadow-black md:w-3/5"
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
