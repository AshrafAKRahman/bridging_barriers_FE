import React from "react";
import Image from "next/image";
import Header from "./components/header/header";
import SubHeader from "./components/subHeader/subheader";
import LargeButton from "./components/buttons/largeButton";

export default function Home() {
  return (
    <main className="bg-blue-700 w-screen h-screen">
      <div className="">
        <Header
          titleClassName=" text-lg absolute left-0 right-10 mt-36 transform translate-x-6 translate-y-58 text-white"
          title="Welcome to the Bridging Barriers Portal"
        />
        <div className="mx-auto">
          <hr className="mt-56 w-1/2 border-none bg-gradient-to-r from-blue-600 to-gray-100 h-2" />
        </div>

        <SubHeader
          titleClassName="text-2xl mt-10 text-white text-center md:ml-10 flex"
          title="Developing lasting relationships"
        />
        <div className="flex justify-end mt-20">
          <div className="md:ml-20 md:w-1/2 flex flex-col mr-20 md:items-start justify-start">
            <LargeButton
              className="mb-16 shadow-2xl"
              text="Create Profile"
              href="/CreateProfileOne"
            />
            <LargeButton
              className="shadow-2xl"
              text="Login"
              href="@/pages/CreateProfileOne"
            />
          </div>
          <div className="w-full md:w-1/2 hidden md:block">
            <div className="imageContainer">
              <Image
                className="rounded-25 shadow-2xl"
                src="/Mentor.jpg"
                alt="Mentor Image"
                objectFit="cover"
                layout="fixed"
                height={300}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
