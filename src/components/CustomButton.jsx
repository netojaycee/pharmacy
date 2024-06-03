// Button.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function CustomButton({ link, text, wid }) {
  const navigate = useNavigate();
  const action = () => {
    navigate(link);
  };

  return (
    <button
      onClick={action}
      // className={`bg-[#4fac71] px-4 py-2 font-semibold text-white justify-center rounded-md hover:bg-secondary flex items-center gap-1 w-${wid}`}
      className={`bg-primary px-4 py-2 font-semibold text-white justify-center rounded-md hover:bg-secondary flex items-center gap-1 w-${wid} `}
    >
      {text}
      <FaArrowRight />
    </button>
  );
}

export default CustomButton;
