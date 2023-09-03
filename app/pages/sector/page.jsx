"use client"

import Checkbox from "../../components/checbox/checbox";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import Image from "next/image";
import { useFormContext } from "@/app/context/FormContext";

const Sector = () => {
  const {formData, handleChange} = useFormContext()
  console.log(formData)
  const {sector} = formData
  
  const sectorImageAndTitle = [{
    image: "Accounting.jpg",
    title: "Accounting"
  },
  {
    image: "Banking_Finance.jpg",
    title: "Banking & Finance"

  },
  {
    image: "Consulting.jpg",
    title: "Consulting"

  },
  {
    image: "Marketing.jpg",
    title: "Marketing"

  },
  {
    image: "Education.jpg",
    title: "Education"

  },
  {
    image: "Engineering.jpg",
    title: "Engineering"

  },
  {
    image: "Governemnt_Public.jpg",
    title: "Government & Public Sector"

  },
  {
    image: "Healthcare.jpg",
    title: "Healthcare"
  },
  {
    image: "Real Estate.jpg",
    title: "Real Estate",
  },
  {
    image: "Law.jpg",
    title: "Law"
  },
  {
    image: "Technology.jpg",
    title: "Technology"
  },
  {
    image: "Media-_-Music_1.jpg",
    title: "Media_Music"
  },
]
  const handleCheckBox = (isChecked, label) => {
    console.log(isChecked, label)
    if(isChecked) {
      const newSector = [...sector, label]
      handleChange ({target : {name: "sector", value: newSector}})
    } else {
      const newSector = sector.filter((value) => {return value !==label})
      handleChange({target : {name : "sector", value :newSector}})
    }
  }
 
  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Which job sector interests you"
      />
      <div className="flex flex-wrap mt-20">
        
        {sectorImageAndTitle.map((content) => (
          <div className="w-1/4 mb-10">
          <Image
            src={`/${content.image}`}
            alt={content.image}
            className="rounded-img mb-5"
            height={70}
            width={70}
          />
          <Checkbox
            label={content.title}
            onChange={(isChecked, label) => handleCheckBox(isChecked, label)}
            className="text-white"
          />
         </div>
        ))}

      </div>
      <div className="mt-10">
        <Link className="mr-10" href="education">
          <NormalButton text="Previous" />
        </Link>
        <Link href="location">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Sector;
