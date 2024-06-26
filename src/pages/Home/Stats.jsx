import React from "react";
import { ImHappy } from "react-icons/im";
import ReactStars from "react-rating-stars-component";
import { MdHeadphones } from "react-icons/md";
import { MdOutlineMoreTime } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";

export default function Stats() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 py-10  w-[98%] lg:w-[90%] mx-auto gap-4">
        <div className="p-8 flex bg-white hover:bg-primary hover:text-white shadow-md shadow-gray-400 gap-3 items-center">
          <div className="">
            <ImHappy />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">4000</h2>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>

        <div className="p-8 flex flex-row bg-white hover:bg-primary hover:text-white  shadow-md shadow-gray-400 gap-3 items-center">
          <div className="">
            <MdOutlineMoreTime />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">1374</h2>

            <p className="text-sm">Average Delivery Time</p>
          </div>
        </div>

        <div className="p-8 flex bg-white hover:bg-primary hover:text-white  shadow-md shadow-gray-400 gap-3 items-center">
          <div className="">
            <MdHeadphones />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">374</h2>
            <p className="text-sm">Hours of Support</p>
          </div>
        </div>

        <div className="p-8 flex bg-white hover:bg-primary hover:text-white  shadow-md shadow-gray-400 gap-3 items-center">
          <div className=""><PiHandshakeLight /></div>
          <div className="flex flex-col gap-3">
            <ReactStars
              count={5}
              size={30}
              activeColor="#06752"
              edit={false}
              value="4"
            />

            <p className="text-sm">Customer Satisfaction rate</p>
          </div>
        </div>
      </div>
    </>
  );
}
