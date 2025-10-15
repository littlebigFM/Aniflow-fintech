import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import style from "../CSS/main.module.css";

const Activity = () => {
  return (
    <div
      className={`${style.DashTrans} 
       px-8
      flex 
      gap-[32px] 
      max-[800px]:gap-[16px] 
      max-[800px]:px-4
      
      `}
    >
      <div className="h-[900px] sticky mt-6 top-6 min-[1100px]:mt-6">
        <Sidebar />
      </div>

      <div className="w-full py-6">
        <h1>Activity</h1>
      </div>
    </div>
  );
};

export default Activity;
