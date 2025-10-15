import React from "react";

const QuickAccess = ({ icon, text, className, onClick }) => {
  return (
    <>
      <div
        className={`w-[145px] 
          h-[103px] 
          p-[20px] 
          rounded-[16px] 
          flex flex-col justify-between
          cursor-pointer
          shadow-[0_0_10px_#c2c1c1]
          max-[600px]:w-[172px] 
          min-[660px]:w-[172px] 
          max-[390px]:w-full ${className}`}
        onClick={onClick}
      >
        <div>{icon}</div>
        <div className="font-semibold">{text}</div>
      </div>
    </>
  );
};

export default QuickAccess;
