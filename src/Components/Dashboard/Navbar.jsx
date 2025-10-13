import React, { useEffect, useRef, useState } from "react";
import style from "../../CSS/main.module.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";

const Navbar = ({ text }) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const dropDownref = useRef(null);

  const closeAll = () => {
    setMenu(false);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownref.current && !dropDownref.current.contains(event.target)) {
        setOpen(false);
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div
        className={` ${style.navbar} w-full bg-[white] 
      rounded-[24px] 
      flex justify-between 
      shadow-[0_0_10px_#c2c1c1]
      items-center 
      p-[24px]
      relative
      max-[800px]:px-[12px]
      max-[800px]:py-[18px]

      `}
        ref={dropDownref}
      >
        <div className="hidden max-[600px]:flex text-[30px] cursor-pointer">
          {/* {(logo = )} */}
          <RiMenuFill
            onClick={() => {
              closeAll();
              setMenu(!menu);
            }}
          />
        </div>

        <div className="font-medium text-[24px] max-[800px]:text-[16px] max-[600px]:hidden">
          <p>{text}</p>
        </div>
        <div className="flex gap-6 items-center max-[800px]:gap-3 ">
          <div className="w-[44px] h-[44px] bg-[#F2F3FB] rounded-full flex items-center justify-center">
            <IoMdNotificationsOutline className="w-[34px] h-[34px] text-[#3745AF] max-[800px]:w-[24px] h-[24px]" />
          </div>
          <div
            onClick={() => {
              closeAll();
              setOpen(!open);
            }}
            className="cursor-pointer max-[402px]:hidden"
          >
            <p>Ololade Olaniyi</p>
            <p className="text-[#808080] text-[14px] ">Personal</p>
          </div>
          <div className="cursor-pointer">
            <GoChevronDown
              className="text-[24px] text-[#808080]"
              onClick={() => {
                closeAll();
                setOpen(!open);
              }}
            />
          </div>
        </div>

        {/* ============================== */}

        <div className="absolute left-0 top-[85px] min-[800px]:top-[100px] pointer-events-none">
          <div
            className={`
            ${style.dropDown} ${menu ? style.show : style.hide}
             flex flex-col 
          w-[150px] h-[180px] 
          rounded-[18px] 
          bg-[white] 
          items-center 
          justify-center
          gap-6
          text-[18px]
     
          `}
          >
            <Link to="/Dashboard" className={style.item}>
              Dashboard
            </Link>
            <Link to="/Activity" className={style.item}>
              {" "}
              Activity
            </Link>
            <Link to="/Transactions" className={style.item}>
              Transactions
            </Link>
          </div>
        </div>

        {/* ============================== */}

        {/* {open && ( */}
        <div className="absolute right-0 top-[85px] min-[800px]:top-[100px] pointer-events-none">
          <div
            className={`
            ${style.dropDown} ${open ? style.show : style.hide}
             flex flex-col 
          w-[150px] h-[180px] 
          rounded-[18px] 
          bg-[white] 
          items-center 
          justify-center
          gap-6
          text-[18px]
     
          `}
          >
            <Link to="" className={style.item}>
              Profile
            </Link>
            <Link to="" className={style.item}>
              Settings
            </Link>
            <Link to="/Login" className={style.item}>
              Log out
            </Link>
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Navbar;
