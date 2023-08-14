const Form = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-blue-900 rounded-lg p-8 mt-10 sm:mx-5 md:mx-20 lg:ml-20 lg:mr-20 shadow-2xl"
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
