import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightArrowLeft, FaChevronLeft } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Receipt from "./Receipt";

const Transactiondetails = ({ onClick }) => {
  const [modal, setModal] = useState(false);
  const [receiptModal, setReceiptModal] = useState(false);
  const [activeView, setActiveView] = useState("default");

  const handleReceipt = () => {
    setReceiptModal(true), setModal(false);
  };

  return (
    <div>
      {modal && (
        <Modal
          onClick={onClick}
          className="
          bg-[#FFFFFF]
          min-[700px]:w-[450px]
          min-[850px]:w-[550px]
          min-[1200px]:w-[700px]
        "
        >
          {activeView === "default" && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="font-medium text-[20px]">Transaction Details</p>
                <div className="cursor-pointer" onClick={() => setModal(false)}>
                  {" "}
                  <IoMdClose />
                </div>
              </div>
              <div
                className="py-[8px] px-[16px] 
          rounded-[12px] 
          border 
          border-[#3745AF]
          w-[180px]
          mb-4
          "
              >
                <div></div>
                <div>
                  <p className="font-medium text-[16px]">Seyi Bankole</p>
                  <p className="text-[14px] text-[#8E8E93]">Sent</p>
                </div>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">Transaction ID</p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">
                  Transaction Date & Time:
                </p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">From Account:</p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">To</p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">Destination bank</p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">Transaction Type</p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">Amount</p>
                <p></p>
              </div>

              <div className="border-b border-[#80808033] flex pb-2">
                <p className="font-medium text-[14px]">Description</p>
                <p></p>
              </div>

              <div
                className="flex gap-2 items-center 
          justify-center 
          mt-4 
          cursor-pointer 
          text-[#3745AF] 
          w-[144px]
          border 
          border-[#3745AF]
          rounded-[8px]
          py-1
          "
              >
                <div className="text-[12px]">
                  <FaArrowRightArrowLeft />
                </div>
                <p className="text-[12px]">Transfer Again</p>
              </div>
              <div
                className="flex gap-4 mt-2 
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
                  <p>Download</p>
                  <div className="text-[20px]">
                    <MdOutlineFileDownload />
                  </div>
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
            py-4
            cursor-pointer
            font-medium
            text-[14px]
            min-[400px]:text-[16px]
            min-[400px]:font-semibold
            
            "
                  onClick={() => setActiveView("receipt")}
                >
                  <p className="">Share Receipt</p>
                  <div className="text-[20px]">
                    <IoShareSocialOutline />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === "receipt" && (
            <div>
              <Receipt onClickTwo={() => setActiveView("default")} />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Transactiondetails;
