import React from "react";
import { BsSend } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

const Beneficiaries = () => {
  const Beneficiaries = [
    {
      id: 1,
      name: "Ezekiel Olowo",
      lastSeen: "2 days ago",
    },

    {
      id: 2,
      name: "Ayo Lawal",
      lastSeen: "3 days ago",
    },

    {
      id: 3,
      name: "Chika Okafor",
      lastSeen: "5 days ago",
    },
  ];

  return (
    <div className="w-full p-4 rounded-[16px] bg-[white] mt-8 shadow-[0_0_10px_#c2c1c1]">
      <div className="flex justify-between items-center w-full">
        <p className="font-medium text-[18px]">Beneficiaries</p>
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[#1B1C1EC2]">View all</p>
          <div className="text-[#8E9196] text-[24px]">
            <GoArrowRight />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {Beneficiaries.map((beneficial) => (
          <div className="flex justify-between" key={beneficial.id}>
            <div>
              <p>{beneficial.name}</p>
              <p className="font-light text-[9px] text-[#8E9196]">
                {beneficial.lastSeen}
              </p>
            </div>
            <div>
              <BsSend />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficiaries;
