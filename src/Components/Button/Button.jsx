import React from "react";

const Button = ({ text, onClick, className, type = "button" }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-[#3745AF] w-full 
          py-[25px] px-[15px] 
          rounded-[12px] 
          ${className}`}
        type={type}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
