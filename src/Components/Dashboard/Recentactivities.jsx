import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios";

const Recentactivities = () => {
  // const [transaction, setTransaction] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getTransactions() {
  //     try {
  //       const res = await axios.get();
  //     } catch (error) {}
  //   }
  // }, []);

  const activities = [
    {
      id: 1,
      name: "Chika Okafor",
      date: "Today",
      amount: "-#45,000.00",
      status: "Pending",
      type: "debit",
      day: "Mon, 11 Aug 2025",
    },
    {
      id: 2,
      name: "USSD Charge",
      date: "Today",
      amount: "-#50.00",
      status: "Completed",
      type: "debit",
      day: "Sat, 09 Aug 2025",
    },
    {
      id: 3,
      name: "Ayo Lawal",
      date: "Today",
      amount: "-#43,750.00",
      status: "Failed",
      type: "debit",
      day: "Fri, 08 Aug 2025",
    },
    {
      id: 4,
      name: "Seyi Bankole",
      date: "Today",
      amount: "-#8,750.00",
      status: "Completed",
      type: "debit",
      day: "Thu, 07 Aug 2025",
    },
    {
      id: 5,
      name: "Tobi Daniel",
      date: "Tuesday",
      amount: "-#3,200.00",
      status: "Completed",
      type: "debit",
      day: "Tue, 05 Aug 2025",
    },
    {
      id: 6,
      name: "Netflix",
      date: "Tuesday",
      amount: "-#43,750.00",
      status: "Completed",
      type: "debit",
      day: "Mon, 04 Aug 2025",
    },
  ];

  return (
    <div>
      <div
        className="flex flex-col p-4 w-full bg-[white] rounded-[16px] mt-8 
      shadow-[0_0_10px_#c2c1c1] min-[1400px]:hidden"
      >
        <div className="flex justify-between items-center w-full font-medium">
          <p>Recent Activities</p>
          <div className="text-[20px]">
            <HiOutlineDotsVertical />
          </div>
        </div>

        <div className="mt-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex
            justify-between 
            py-4
            border-b border-[#EAECF0]
            
            "
            >
              <div className="flex items-center gap-3">
                <div>
                  {activity.status === "Failed" ||
                  activity.status === "Pending" ? (
                    <div className=" rounded-full w-[24px] h-[24px] bg-[#FF3B3014] flex items-center justify-center">
                      <FiArrowUpRight className="text-[red]" />
                    </div>
                  ) : (
                    <div className=" rounded-full w-[24px] h-[24px] bg-[#34C75914] flex items-center justify-center">
                      {" "}
                      <FiArrowUpRight className="text-[green]" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[#222222E5] font-normal text-sm">
                    {activity.name}
                  </p>
                  <p className="text-[#22222299] font-normal text-xs">
                    {activity.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-normal text-sm">{activity.amount}</p>
                <div className="text-xs w-77px h-24px">
                  {activity.status === "Completed" ? (
                    <p className="text-[#02B15A] w-full bg-[#F0FFF7] rounded-[40px] ">
                      {activity.status}
                    </p>
                  ) : activity.status === "Failed" ? (
                    <p className="text-[#EE443F] w-full bg-[#FEF6F6] rounded-[40px] py-[4px] px-[12px]">
                      {activity.status}
                    </p>
                  ) : (
                    <p className="text-[#FFD700] w-full bg-[#FFFDF5] pl-[12px] pr-[6px] py-[4.19px] rounded-[40px]">
                      {activity.status}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-center 
        justify-center mt-8"
        >
          <div
            className="
         flex
        items-center
        gap-1
        w-[117px]
        py-[10px] px-[16px] 
        rounded-[12px] 
        text-[#737375] 
        border border-[#00000014]
        
        "
          >
            <p>View all</p>
            <IoChevronDown />
          </div>
        </div>
      </div>

      <div
        className="shadow-[0_0_10px_#c2c1c1]
        rounded-[16px]
        p-4 bg-[white]
        mt-8
        max-[1400px]:hidden
        "
      >
        <div
          className="flex 
        justify-between
        items-center
        "
        >
          <p className="font-medium text-[18px]">Recent Activities</p>

          <div
            className="
         flex
        items-center
        gap-1
        w-[117px]
        py-[10px] px-[16px] 
        rounded-[12px] 
        text-[#737375] 
        border border-[#00000014]
        cursor-pointer
        "
          >
            <p>View all</p>
            <IoChevronDown />
          </div>
        </div>

        <div className="flex justify-between py-[10px] px-[16px] bg-[#F2F2F7] font-medium text-sm mt-4">
          <div className="flex w-[60%] justify-between">
            <p>Transaction Date</p>
            <p>Account Name</p>
            <p>Status</p>
          </div>
          <p className="flex justify-center w-[40%]">Amount</p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex justify-between p-[16px]">
              <div className="flex w-[60%] justify-between items-center">
                <p className="text-sm text[#4E5250]">{activity.day}</p>

                <div className=" flex justify-start">
                  <p className="font-medium text-sm text-[#101211]">
                    {activity.name}
                  </p>
                </div>
                <div>
                  {activity.status === "Completed" ? (
                    <p className=" text-[#02B15A] text-[14px] w-full bg-[#F0FFF7] rounded-[40px] ">
                      {activity.status}
                    </p>
                  ) : activity.status === "Failed" ? (
                    <p className="text-[#EE443F] text-[14px]  w-full bg-[#FEF6F6] rounded-[40px] py-[4px] px-[12px]">
                      {activity.status}
                    </p>
                  ) : (
                    <p className="text-[#FF9500]  w-full bg-[#FFFDF5] pl-[12px] pr-[6px] py-[4.19px] rounded-[40px]">
                      {activity.status}
                    </p>
                  )}
                </div>
              </div>

              <p className="flex justify-center w-[40%]">{activity.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recentactivities;
