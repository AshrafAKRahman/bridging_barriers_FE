import NormalButton from "@/app/components/normalButton/normalButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full p-6 bg-white">
      <div className="text-white text-2xl">
        <Image
          src="/logo.png"
          alt="Logo"
          className="mr-2"
          height={22}
          width={200}
        />
      </div>
      <div className="mr-0">
        <NormalButton text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
