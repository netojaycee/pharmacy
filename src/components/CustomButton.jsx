// Button.js
import React from "react";
import { useNavigate } from "react-router-dom";

function CustomButton({ link, text }) {
    const navigate = useNavigate();
    const action = () => {
        navigate(link);
    };

    return (
        <button
            onClick={action}
            className="bg-primary px-4 py-2 font-semibold text-white rounded-md"
        >
            {text}
        </button>
    );
}

export default CustomButton;
