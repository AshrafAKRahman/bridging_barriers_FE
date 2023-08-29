"use client"
import Header from "../../components/header/header";
import Checkbox from "../../components/checbox/checbox";
import { useState } from "react";
import Form from "../../components/form/form";
import NormalButton from "../../components/buttons/normalButton";
import Link from "next/link";
import {useFormContext} from "../../context/FormContext.js"

const Criteria = () => {
  const {handleChange, formData} = useFormContext()
  const {sector} = formData

  const handleCheckboxChange = (isChecked, label) => {
    const newSector = [...sector, label]
    if(isChecked) {
      handleChange({target: {name: "sector", value: newSector}})
    } else {
      const newSector = sector.filter((value) => {return value !== label })
      console.log(newSector)
      handleChange({target: {name: "sector", value: newSector}})
    }
    
  };

  console.log(formData)

  const labels = [
    "Eligible for free school meals during secondary or further education",
    "A looked after young person or Care leaver",
    "A young Carer to immediate family member or a young parent below 21",
    "Identify as working class or low income background",
    "Caretakers not attending university",
    "Self-identifying as a person of colour (including mixed heritage)",
    "Self-identifying as estranged in adulthood",
    "Migrating to the UK after 5 years of age",
    "English as an additional language",
    "Receiving full maintenance loan at university",
    "Self-identifying as disabled or experienced significant disruption to your education due to illness or injury",
    "Experienced other significant personal or familial disadvantage that has impacted education or employment (for example, bereavement)",
  ];
  
  return (
    <Form>
      <Header
        titleClassName="text-3xl absolute left-40 md:left-20 top-20 transform translate-x-6 translate-y-58 text-white"
        title="Criteria & Circumstances"
      />
      <div className="flex flex-wrap gap-8 mt-40">
        {labels.map((label, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 mb-10">
            <Checkbox
              label={label}
              onChange={(isChecked, label) => handleCheckboxChange(isChecked, label)}
              className="text-white"
            />
          </div>
        ))}
      </div>

      <div className="mt-0">
        <Link className="mr-10" href="location">
          <NormalButton text="Previous" />
        </Link>
        <Link href="ethnicity">
          <NormalButton text="Next" />
        </Link>
      </div>
    </Form>
  );
};

export default Criteria;
