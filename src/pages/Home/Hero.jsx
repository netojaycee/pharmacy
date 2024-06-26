import React from "react";
import gif from "@/assets/images/gif.gif";
import CustomButton from "../../components/CustomButton";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-5 w-[98%] lg:w-[90%] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2 lg:gap-3">
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-gray-800">
          <span className="text-primary">Medical</span> Runs Made  <span className="text-secondary">Easy</span>...
          </h2>
          <p className="lg:text-lg text-gray-600 mt-2 lg:mt-4">
            Medmova connects you with a network of trusted pharmacies to deliver
            your medication conveniently. Order online and get it delivered
            straight to your doorstep.
          </p>
          {/* <div className="w-full lg:w-1/2"> */}
            <CustomButton
              text={"Order Now"}
              wid={"1/2"}
              link=""
            />
          {/* </div> */}
        </div>
        <div className="w-full lg:w-1/2">
          {/* <video src={hero_vid} width="640" height="480" autoPlay muted loop>
            Your browser does not support the video tag.
          </video> */}
          <img src={gif} alt="" className="" />
        </div>
      </div>
    </>
  );
}
