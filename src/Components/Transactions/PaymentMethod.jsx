import React, { useState } from "react";
import { AiOutlineBank } from "react-icons/ai";
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div>
      <div>
        <p className="font-medium text-[16px]">Payment Method</p>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {/* ============== method 1 ============ */}
        <div
          className={`bg-[#F3F4F6] 
            rounded-[12px] 
            flex p-4 
            items-center 
            justify-between 
            cursor-pointer
            ${
              selectedMethod === "card"
                ? "border border-[#3745AF]"
                : "border-none"
            }
            `}
          onClick={() => setSelectedMethod("card")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-[white] h-[44px] w-[44px] rounded-full flex items-center justify-center">
              <HiOutlineCreditCard className="text-[24px]" />
            </div>
            <div>
              <p className="text-[#111827] font-semibold">Debit Card</p>
              <p className="text-[#6B7280]">**** 4827</p>
            </div>
          </div>
          <div
            className={`w-[20px] h-[20px] border-2 rounded-full flex
               items-center 
               justify-center ${
                 selectedMethod === "card"
                   ? "border-[#3745AF]"
                   : "border-[#8E8E93]"
               }`}
          >
            {selectedMethod === "card" && (
              <div className="w-[10px] h-[10px] bg-[#3745AF] rounded-full"></div>
            )}
          </div>
        </div>

        {/* ============== method 2 ============ */}
        <div
          className={`bg-[#F3F4F6] 
            rounded-[12px] 
            flex p-4 
            items-center 
            justify-between 
            cursor-pointer
            ${
              selectedMethod === "bank"
                ? "border border-[#3745AF]"
                : "border-none"
            }
            `}
          onClick={() => setSelectedMethod("bank")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-[white] h-[44px] w-[44px] rounded-full flex items-center justify-center">
              <AiOutlineBank className="text-[24px]" />
            </div>

            <div>
              <p className="text-[#111827] font-semibold">Bank Transfer</p>
              <p className="text-[#6B7280]">Jaiz Bank **** 4827</p>
            </div>
          </div>

          <div
            className={`
             w-[20px] h-[20px] border-2 rounded-full flex
             items-center 
             justify-center
             ${
               selectedMethod === "bank"
                 ? "border-[#3745AF]"
                 : "border-[#8E8E93]"
             }
             `}
          >
            {selectedMethod === "bank" && (
              <div className="w-[10px] h-[10px] bg-[#3745AF] rounded-full"></div>
            )}
          </div>
        </div>
        {/* ============== method 3 ============ */}
        <div
          className={`bg-[#F3F4F6] 
            rounded-[12px] 
            flex p-4 
            items-center 
            justify-between 
            cursor-pointer
            ${
              selectedMethod === "ussd"
                ? "border border-[#3745AF]"
                : "border-none"
            }
            `}
          onClick={() => setSelectedMethod("ussd")}
        >
          <div className="flex items-center gap-2">
            <div className="bg-[white] h-[44px] w-[44px] rounded-full flex items-center justify-center">
              <IoCallOutline className="text-[24px]" />
            </div>
            <div>
              <p className="text-[#111827] font-semibold">USSD CODE</p>
              <p className="text-[#6B7280]">*827#</p>
            </div>
          </div>
          <div
            className={`
            w-[20px] h-[20px] 
            border-2 
            rounded-full flex
            items-center 
            justify-center
            ${
              selectedMethod === "ussd"
                ? "border-[#3745AF]"
                : "border-[#8E8E93]"
            }
            `}
          >
            {selectedMethod === "ussd" && (
              <div className="w-[10px] h-[10px] bg-[#3745AF] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
