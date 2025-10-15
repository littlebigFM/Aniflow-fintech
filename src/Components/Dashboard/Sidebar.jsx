import React from "react";
import image from "../../assets/logo3.png";
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  MdCompareArrows,
  MdOutlineInsertChartOutlined,
  MdOutlineSettings,
} from "react-icons/md";
// import { BsArrow90DegRight } from "react-icons/bs";
import style from "../../CSS/main.module.css";
// import { CiSettings } from "react-icons/ci";
import { SiSpringsecurity } from "react-icons/si";
import { IoHelpCircleSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <div
        className={`${style.sidebar} bg-[#3745AF] w-[252px]  py-6 px-4 
        rounded-3xl 
        max-[800px]:w-[200px]
        max-[600px]:hidden
        h-[900px] sticky top-5
        `}
        // h-[900px]
      >
        <div className="border-b border-[#FFFFFF3D] pb-[32px]">
          <img src={image} alt="" />
        </div>
        <div className="border-b border-[#FFFFFF3D] py-[32px] flex flex-col">
          <div>
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                ` flex items-center gap-2 pl-4 py-4 ${
                  isActive
                    ? "text-[#3745AF] bg-[white] rounded-[10px]"
                    : "text-white"
                }`
              }
            >
              <RxDashboard /> <p className="font-400 text-base">Dashboard</p>
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/Activity"
              className={({ isActive }) =>
                ` flex items-center gap-2 pl-4 py-4 ${
                  isActive
                    ? "text-[#3745AF] bg-[white] rounded-[10px]"
                    : "text-white"
                }`
              }
            >
              <MdOutlineInsertChartOutlined />
              <p className="font-400 text-base">Activity</p>
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/Transactions"
              className={({ isActive }) =>
                ` flex items-center gap-2 pl-4 py-4 ${
                  isActive
                    ? "text-[#3745AF] bg-[white] rounded-[10px]"
                    : "text-white"
                }`
              }
            >
              <MdCompareArrows />
              Transaction
            </NavLink>
          </div>

          <div>
            {/* <NavLink
              to=""
              className={({ isActive }) =>
                ` flex items-center gap-2 pl-4 py-4 ${
                  isActive
                    ? "text-[#3745AF] bg-[white] rounded-[10px]"
                    : "text-white"
                }`
              }
            >
              <BsArrow90DegRight />
              Quick Access
            </NavLink> */}
          </div>
        </div>
        <div className="py-[32px] flex flex-col gap-8 px-[18px]">
          <div className="text-[white] flex items-center gap-2 cursor-pointer">
            <MdOutlineSettings />
            <p className="text-[white]">Settings</p>
          </div>
          <div className="text-[white] flex items-center gap-2 cursor-pointer">
            <SiSpringsecurity />
            <p className="text-[white]">Security</p>
          </div>
          <div className="text-[white] flex items-center gap-2 cursor-pointer">
            <IoHelpCircleSharp />
            <p className="text-[white]">Help Centre</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
