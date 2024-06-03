import React from "react";
import CustomButton from "../../components/CustomButton";
import idea from "@/assets/images/16.png";
import { IoMdCheckmark } from "react-icons/io";
export default function Consultation() {
  return (
    <div className="bg-[#f4f8bc] w-full flex flex-col gap-3 pt-5 clip-custom-card pb-8">
      <h2 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800 text-center lg:mt-4 mt-10">
      AI Consultations      </h2>
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 p-5  w-[98%] lg:w-[90%] mx-auto mb-2 ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          <p className="text-lg text-gray-600 mt-4">
          Describe your symptoms to our AI to receive tailored recommendations of medications from our database that fit within your budget.
          </p>
          <div className="p-8 flex flex-row bg-white shadow-md shadow-gray-400 gap-3 items-center">
            <div className="bg-gray-200 p-3"><IoMdCheckmark className="" /></div>

            <p className="">
            Don't just get medication, get guidance! Tell our AI what's wrong and get instant recommendations based on your symptoms.


            </p>
          </div>
          <div className="p-8 flex flex-row bg-white shadow-md shadow-gray-400 gap-3 items-center">
            {/* <IoMdCheckmarkCircleOutline color="red"  className=" p-5 text-gray-500" /> */}
            <div className="bg-gray-200 p-3"><IoMdCheckmark className="" /></div>
            <p className="">
             
Get supplementary information to help you make informed decisions about your health.
            </p>
          </div>
          <p className="text-lg text-gray-600 mt-4">
          Sign up for our medication management tools today and experience a simpler, more organized way to manage your health.
          </p>
          <CustomButton text={"Sign Up"} wid={"1/2"} />
        </div>
        <div className="w-full lg:w-1/2">
          <img src={idea} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
