import React from "react";
import CustomButton from "../../components/CustomButton";
import reminder from "@/assets/images/reminder.png";
import { IoMdCheckmark } from "react-icons/io";

export default function Medication() {
  return (
    <div className="pb-8 bg-gray-200 w-full flex flex-col gap-3 pt-5 clip-custom-card ">
      <h2 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800 text-center lg:mt-4 mt-10">
        Medication Management
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 p-5  w-[98%] lg:w-[90%] mx-auto mb-2 ">
        <div className="w-full lg:w-1/2">
          <img src={reminder} alt="" className="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          <p className="text-lg text-gray-600 mt-4">
            Juggling prescriptions? Feeling overwhelmed with refills and
            reminders? We've got you covered! Our comprehensive medication
            management tools take the stress out of managing your health.
          </p>
          <div className="p-8 flex flex-row bg-white shadow-md shadow-gray-400 gap-3 items-center">
            <div className="bg-gray-200 p-3">
              <IoMdCheckmark className="" />
            </div>

            <p className="">
              Never miss a dose again with our helpful reminders, personalised
              refill alerts and progress check-ins.
            </p>
          </div>
          <div className="p-8 flex flex-row bg-white shadow-md shadow-gray-400 gap-3 items-center">
            {/* <IoMdCheckmarkCircleOutline color="red"  className=" p-5 text-gray-500" /> */}
            <div className="bg-gray-200 p-3">
              <IoMdCheckmark className="" />
            </div>
            <p className="">
              Set automatic repurchases of your prescriptions before they run
              out, so you can focus on what matters most - your health.
            </p>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            Take control of your health. Sign up to enjoy AI consultations for
            FREE!
          </p>
          <CustomButton link="" text={"Sign Up"} wid={"1/2"} />
        </div>
      </div>
    </div>
  );
}
