import React from "react";
import LargeButton from "../components/buttons/largeButton";
import Header from "../components/hearder/header";
import SubHeader from "../components/subHeader/subheader";
import Image from "next/image";

const Login = () => {
  return (
    <div className="relative">
      <Header
        titleClassName="text-3xl absolute left-0 right-10 top-10 transform translate-x-6 translate-y-58 text-white"
        title="Welcome to the Logged in Page"
      />
    </div>
  );
};

export default Login;
