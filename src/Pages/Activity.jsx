import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import style from "../CSS/main.module.css";

const Activity = () => {
  return (
    <div
      className={`${style.DashTrans} p-8 flex gap-[32px] max-[800px]:gap-[16px] max-[800px]:px-4`}
    >
      <Sidebar />

      <div>
        <h1>Activity</h1>
      </div>
    </div>
  );
};

export default Activity;
