import React from "react";
// import Modal from "../Modal/Modal";
import logo from "../../assets/logo1.png";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { FaChevronLeft, FaImage, FaRegFile } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiFileOn, CiImageOn } from "react-icons/ci";

const Receipt = ({ onClickTwo }) => {
  return (
    <div>
      <div className="min-[850px]:pl-4">
        <div className="flex items-center gap-8 mb-10">
          <div
            className="text-[#808080] text-[18px] cursor-pointer"
            onClick={onClickTwo}
          >
            <FaChevronLeft />
          </div>
          <p className="font-medium text-[20px]">Share Receipt</p>
          <div></div>
        </div>
      </div>
      {/* ========================== */}
      <div
        className=" min-[850px]:bg-[#FAFBFF]
      min-[850px]:rounded-[24px]
      min-[850px]:py-6
      min-[850px]:px-4
      "
      >
        <div
          className="flex 
              flex-col
              items-center 
              justify-center
               border-b
              border-[#808080]
              pb-4 
              "
        >
          <div
            className="flex flex-col gap-1 
                items-center 
                justify-center
                mb-6
                min-[850px]:flex
                min-[850px]:flex-row
                min-[850px]:justify-between
                min-[850px]:w-full
                "
          >
            <div className="pl-3 w-[130px] min-[850px]:w-[200px]">
              <img src={logo} alt="" />
            </div>
            <p className="font-medium min-[850px]:text-[20px]">
              Transaction Receipt
            </p>
          </div>
          <div>
            <p className="font-semibold text-[#3745AF] text-[32px]">
              #8,750.00
            </p>
          </div>
        </div>
        <div
          className="flex 
              flex-col 
              gap-4 pt-4
              px-3
              "
        >
          <div className="flex items-center justify-between">
            <p className="font-light text-[12px] text-[#10121199]">
              Recipient Details
            </p>
            <div>
              <p>Oluwaseyi Adeniwura Bankole</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-light text-[12px] text-[#10121199]">
              Sender Details
            </p>
            <div>
              <p></p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-light text-[12px] text-[#10121199]">
              Transaction Number
            </p>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      {/* ========================== */}
      <div
        className="flex gap-4 mt-14
        max-[350px]:flex-col
        max-[350px]:gap-2
      "
      >
        <div
          className="w-full 
            flex gap-2 
            items-center 
            justify-center 
            cursor-pointer 
            text-[#3745AF]
            font-semibold
            border
            border-[#3745AF]
            rounded-[12px]
            py-4
            cursor-pointer
            font-medium
            text-[14px]
            min-[400px]:text-[16px]
            min-[400px]:font-semibold
            "
        >
          <div className="text-[20px]">
            <FaRegFile />
          </div>
          <p>Share as PDF</p>
        </div>

        <div
          className="w-full 
              flex gap-2 
            items-center 
            justify-center
            cursor-pointer
            bg-[#3745AF]
            rounded-[12px]
            text-[white]
            font-semibold
            py-4
            cursor-pointer
            font-medium
            text-[14px]
            min-[400px]:text-[16px]
            min-[400px]:font-semibold
            "
        >
          <div className="text-[20px]">
            <CiImageOn />
          </div>
          <p>Share as image</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
