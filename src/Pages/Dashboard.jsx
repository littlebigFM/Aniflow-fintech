import React, { useState } from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Dashboard/Navbar";
import style from "../CSS/main.module.css";
import BalanceCard from "../Components/Dashboard/BalanceCard";
import QuickAccess from "../Components/Dashboard/QuickAccess";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Recentactivities from "../Components/Dashboard/Recentactivities";
import Beneficiaries from "../Components/Dashboard/Beneficiaries";
import { Link } from "react-router-dom";
import TransferPage from "../Components/Transactions/TransferPage";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("default");

  return (
    <div
      className={`${style.DashTrans} 
      p-8 
      flex 
      gap-[32px] 
      max-[800px]:gap-[16px]
      max-[800px]:px-4
      `}
    >
      <div>
        {" "}
        <Sidebar />
      </div>

      {activeView === "default" && (
        <div className="w-full">
          <div className="w-full">
            {" "}
            <Navbar text="Dashboard" />
          </div>

          <div>
            <p className="mt-4 font-medium text-[28px] min-[600px]:mt-8 min-[600px]:text-[32px]">
              Good Morning,
            </p>
          </div>

          <div className="min-[1100px]:flex gap-6">
            <div>
              <div>
                <BalanceCard />
              </div>

              <div
                className="flex flex-col 
              mt-4
            justify-between 
            min-[430px]:h-[198px]
            min-[430px]:w-full
            min-[430px]:rounded-[16px]
            min-[430px]:bg-[white]
            min-[430px]:p-8
            min-[430px]:
            min-[740px]:w-[424px]
            "
              >
                <p className="hidden font-medium text-[18px] min-[430px]:flex ">
                  Quick Access
                </p>
                <div
                  className="flex 
              w-full 
              justify-between
              max-[380px]:justify-normal
              max-[310px]:flex-col
              "
                >
                  <div className="w-full" onClick={() => setActiveView("add")}>
                    <QuickAccess
                      className="bg-[#3745AF] mt-4 text-[white]"
                      icon={<IoAddCircleOutline className="text-[24px]" />}
                      text="Add Money"
                    />
                  </div>
                  <div
                    className=" w-full"
                    onClick={() => setActiveView("send")}
                  >
                    <QuickAccess
                      className="bg-[#F0F0F0] mt-4 text-[#3745AF]"
                      icon={<FiSend className="text-[22px]" />}
                      text="Send Money"
                    />
                  </div>
                </div>
              </div>

              <div className="hidden min-[1100px]:flex ">
                <Beneficiaries />
              </div>
            </div>
            <div className="w-full">
              <Recentactivities />
            </div>

            <div className="min-[1100px]:hidden">
              <Beneficiaries />
            </div>
          </div>
        </div>
      )}

      {activeView === "add" && (
        <div className="w-full">
          <div>
            <button
              onClick={() => setActiveView("default")}
              className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Back
            </button>
          </div>

          <div className="w-full">
            <TransferPage activeTab="add" />
          </div>
        </div>
      )}

      {activeView === "send" && (
        <div className="w-full">
          <div>
            <button
              onClick={() => setActiveView("default")}
              className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Back
            </button>
          </div>

          <div className="w-full">
            <TransferPage activeTab="send" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
