import React from "react";
import CustomButton from "../../components/CustomButton";
import why from "@/assets/images/19.png";

export default function Why() {
  return (
    <>
      <div className="bg-gray-200 w-full clip-custom-card">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-5  w-[98%] lg:w-[90%] mx-auto ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          <h2 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800 text-left lg:mt-4 mt-10">
              WHY <span className="text-secondary">MEDMOVA</span>?
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              At Medmova, we believe that getting the medications you need
              should be simple, especially when you're feeling ill. That is why
              we provide a convenient and dependable pharmacy delivery service
              that saves you time and alleviates tension. Everyone deserves
              quick access to the prescriptions they require, and we are here to
              make that happen.
            </p>
            <CustomButton text={"Read More"} wid={"1/2"} />
          </div>
          <div className="w-full lg:w-1/2">
            <img src={why} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
