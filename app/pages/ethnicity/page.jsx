"use client"
import Form from "../../components/form/form";
import { useState } from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/subHeader/subHeader"
import Checkbox from "../../components/checbox/checbox";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import { useFormContext } from "@/app/context/FormContext";

const Ethnicity = () => {
  const {formData, handleChange} = useFormContext();
  const {ethnicity} = formData

  const labels = ["Mixed or multiple ethnic groups", "Asian or Asian British", "Black, African, Caribbean or Black British", "White, White British, White European or White other", "Self Describe"  ]
  
  const handleCheckBoxChange = (isChecked, label) => {
    console.log(isChecked, label)
    if(isChecked) {
      const newEhtnicity = [...ethnicity, label]
      handleChange({target:{name:"ethnicity", value: newEhtnicity}})
    } else {
      const newEhtnicity = ethnicity.filter((value) => {return value !==label})
      handleChange({target: {name:"ethnicity", value: newEhtnicity}})
    }
  }
  console.log(formData)

  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left:40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Equal opportunities"
      />
      <SubHeader
        titleClassName="text-2xl mt-20 text-white text-center mb-10 flex"
        title="Select your heritage & gender"
      />
      <p className="text-white">
        Ethical data collection Lorem ipsum dolor sit amet. Sed corrupti
        voluptas eum voluptas mollitia qui labore unde vel repellat dolore ut
        voluptas repellendus qui quia odio. Aut libero dicta eos facere
        reiciendis quo quos nostrum.
      </p>
      <div className="flex justify-between">
        <div className="w-1/2">
          <SubHeader
            titleClassName="text-2xl mt-10 text-gray-400 flex mb-2"
            title="Ethnic Heritage"
          />
          {labels.map((labels) => (
            <Checkbox
              label={labels}
              className="mb-3 text-white"
              onChange={(isChecked, label)=>{handleCheckBoxChange(isChecked, label)}} 
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Link className="mr-10" href="criteria">
          <NormalButton text="Previous" />
        </Link>
        <Link href="profileCreatedConfirmation">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Ethnicity;
