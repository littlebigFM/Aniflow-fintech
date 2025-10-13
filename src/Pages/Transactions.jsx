import React, { useState } from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Dashboard/Navbar";
import style from "../CSS/main.module.css";
import QuickAccess from "../Components/Dashboard/QuickAccess";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { MdOutlineSchedule } from "react-icons/md";
import { LuReceiptText } from "react-icons/lu";
import TransactionHistory from "../Components/Transactions/TransactionHistory";
// import SendMoney from "../Components/Transactions/SendMoney";
import TransferPage from "../Components/Transactions/TransferPage";

const Transactions = () => {
  const [activeView, setActiveView] = useState("default");

  return (
    <div
      className={`${style.DashTrans} p-8 flex gap-[32px] max-[800px]:gap-[16px] max-[800px]:px-4`}
    >
      <Sidebar />

      <div className="w-full">
        {/* ===== DEFAULT VIEW ===== */}
        {activeView === "default" && (
          <>
            <Navbar text="Transactions" />

            {/* Quick Access Buttons */}
            <div
              className="w-full mt-8 grid
                grid-cols-1 gap-2
                min-[350px]:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4"
            >
              <QuickAccess
                className="bg-white lg:w-full cursor-pointer"
                text="Send Money"
                icon={
                  <div className="h-[24px] w-[24px] bg-[#F2F2F7] flex items-center justify-center rounded-full">
                    <GoArrowUpRight className="text-[#3745AF]" />
                  </div>
                }
                onClick={() => setActiveView("send")}
              />

              <QuickAccess
                className="bg-white lg:w-full"
                text="Receive Money"
                icon={
                  <div className="h-[24px] w-[24px] bg-[#F2F2F7] flex items-center justify-center rounded-full">
                    <GoArrowDownLeft className="text-[#101211]" />
                  </div>
                }
              />

              <QuickAccess
                className="bg-white lg:w-full"
                text="Schedule Transfer"
                icon={
                  <div className="h-[24px] w-[24px] bg-[#F2F2F7] flex items-center justify-center rounded-full">
                    <MdOutlineSchedule className="text-[#D37436]" />
                  </div>
                }
              />

              <QuickAccess
                className="bg-white lg:w-full"
                text="Bills Payment"
                icon={
                  <div className="h-[24px] w-[24px] bg-[#F2F2F7] flex items-center justify-center rounded-full">
                    <LuReceiptText className="text-[#AF52DE]" />
                  </div>
                }
              />
            </div>

            {/* Transaction history */}
            <TransactionHistory />
          </>
        )}

        {/* ===== SEND MONEY VIEW ===== */}
        {activeView === "send" && (
          <div>
            <button
              onClick={() => setActiveView("default")}
              className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Back
            </button>
            <div>
              {/* <SendMoney /> */}
              <TransferPage />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
