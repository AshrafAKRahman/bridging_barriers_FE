import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Careers = () => {
  return (
    <div className="w-screen h-screen bg-green-500">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        <Header
          title="We are curently worknig on this section - Coming Soon"
          titleClassName="text-lg text-white md:text-3xl "
        />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
