import React from "react";
import CustomButton from "../../components/CustomButton";
import smartphone from "@/assets/images/smartphone.png";
import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Order() {
  return (
    <div className="bg-white w-full flex flex-col gap-3 pt-5 clip-custom-card ">
      <h2 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800 text-center lg:mt-4 mt-10">
        Order Your Meds in <span className="text-secondary">Minutes</span>
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 p-5  w-[98%] lg:w-[90%] mx-auto mb-2 ">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          <p className="text-lg text-gray-600 mt-4">
          Ordering your medications can be quick and easy. Avoid the time and stress of visiting multiple pharmacies. No more waiting in line or driving around – we've got you covered.
          </p>
          <div class="p-8 flex flex-row bg-white shadow-md shadow-gray-400 gap-3 items-center outer-div">
  <div class="bg-gray-200 hover-target p-3">
    <IoMdCheckmark className="" />
  </div>
  <p class="">
  No time for pharmacy runs? We make getting your medications easy from the comfort of your home 24/7.
  </p>
</div>


          <div className="p-8 flex flex-row bg-white shadow-md shadow-gray-400 gap-3 items-center outer-div">
            {/* <IoMdCheckmarkCircleOutline color="red"  className=" p-5 text-gray-500" /> */}
            <div className="bg-gray-200 hover-target p-3">
              <IoMdCheckmark className="" />
            </div>
            <p className="">
              Sign up in minutes and get the medications you need delivered
              straight to your doorstep, as soon as today!
            </p>
          </div>
          <p className="text-lg text-gray-600 mt-4">
            Experience a better way to manage your health. Order now to enjoy
            for our hassle-free pharmacy delivery service today!
          </p>
          <CustomButton link="" text={"Order Now"} wid={"1/2"} />
        </div>
        <div className="w-full lg:w-1/2">
          <img src={smartphone} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
