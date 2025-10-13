import React, { useState } from "react";
import SendMoney from "./SendMoney";
import AddMoney from "./AddMoney";

const TransferPage = ({ activeTab: defaultTab = "send" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <>
      <div className="py-6 px-4 border rounded-[12px] bg-white shadow flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-2 w-full hidden min-[1000px]:flex">
          <p className="font-medium text-[24px]">
            {activeTab === "send" ? "Send Money" : "Add Money"}
          </p>
          <p className="text-[#8E8E93]">
            {activeTab === "send"
              ? "Transfer funds securely to any wallet or bank account"
              : "Top up your wallet balance"}
          </p>
        </div>
        <div>
          <div className="flex mt-6 mb-6 items-center hidden min-[1000px]:flex">
            <button
              onClick={() => setActiveTab("add")}
              className={`w-[100%] ${
                activeTab === "add"
                  ? "font-semibold text-[#3745AF] border-b-2 border-[#3745AF] pb-2"
                  : "text-[#8E8E93]"
              }`}
            >
              Add Money
            </button>
            <button
              onClick={() => setActiveTab("send")}
              className={`w-[100%] ${
                activeTab === "send"
                  ? "font-semibold text-[#3745AF] border-b-2 border-[#3745AF] pb-2"
                  : "text-[#8E8E93]"
              }`}
            >
              Send Money
            </button>
          </div>

          <div>
            <div>{activeTab === "send" ? <SendMoney /> : <AddMoney />}</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferPage;
