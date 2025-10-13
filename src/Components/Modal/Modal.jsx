import React, { useState } from "react";
import Button from "../Button/Button";

const Modal = ({ children, className, onClick }) => {
  return (
    <div>
      <div
        className="absolute w-full h-[100vh] 
        top-0 right-0
        bg-[black]
        bg-opacity-60
        flex
        items-center  
        justify-center
        pr-4
        pl-8
        "
        onClick={onClick}
      >
        <div
          className={`bg-[#F4F5FE] w-full 
          rounded-[12px] 
          flex flex-col
          px-4
          py-4
          gap-4
          min-[450px]:w-[400px] ${className}`}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
