import axios from "axios";
import React, { useEffect, useState } from "react";
import PaymentMethod from "./PaymentMethod";
import { PiWarningCircleLight } from "react-icons/pi";
import Button from "../Button/Button";
import CardDetailsModal from "../Modal/CardDetailsModal";
import { IoMdClose } from "react-icons/io";

const AddMoney = () => {
  const [amount, setAmount] = useState("");
  const presetAmount = [500, 1000, 2000, 3000, 5000, 10000];
  const [getBalance, setGetBalance] = useState("");

  const url = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_BEARER_TOKEN;

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`${url}/wallets/balance`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGetBalance(response.balance);
        console.log(response.balance);
      } catch (error) {
        console.log(`Error fetching balance: ${error}`);
      }
    };
    fetchBalance();
  }, [url, token]);

  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 min-[1000px]:hidden">
        <h2 className="text-2xl font-semibold">Add Money</h2>
        <p className="text-[gray]">Top up your wallet balance</p>
      </div>

      <div
        className="w-full bg-[#FFFBEB]
      text-[#BF6A02]
       border border-[#BF6A02]
       rounded-[12px]
       p-2
       flex gap-2 items-start
      
       "
      >
        <div className="text-[24px]">
          <PiWarningCircleLight />
        </div>
        <p>
          Only use trusted payment methods. Your card details are encrypted for
          security purposes.
        </p>
      </div>

      <div className="w-full">
        <p className="font-semibold">Enter Amount</p>
        <div
          className="w-full grid
                grid-cols-1 gap-2
                min-[300px]:grid-cols-2
                min-[380px]:grid-cols-4
                min-[1000px]:grid-cols-6
                mt-4
                "
        >
          {presetAmount.map((val) => (
            <button
              key={val}
              className={`bg-[#F3F4F6] px-4 py-2 rounded-[12px] font-medium text-[#666666] ${
                amount == val ? "bg-[blue] text-[white]" : "bg-[#F3F4F6] "
              } ${
                val === 5000 || val === 1000
                  ? "hidden min-[1000px]:inline-block"
                  : ""
              }`}
              onClick={() => setAmount(val)}
            >
              #{val.toLocaleString()}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full relative">
          {/* <span
            className="absolute left-[11px] top-1/2
        -translate-y-1/2
         font-semibold
         text-[18px]
         "
          >
            #
          </span> */}
          <input
            type="text"
            className="bg-[#F9FAFB] w-full pl-5 h-[52px] rounded-[12px] border outline-none text-[17px]"
            placeholder="Enter Amount"
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
          />
        </div>

        <div className="mt-2">
          <p className="text-[#8E8E93]">Current balance: {getBalance} </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <PaymentMethod />
        </div>
      </div>
      <div onClick={() => setModal(true)}>
        <Button text="Proceed" className="text-[white] font-semibold" />
      </div>

      {modal && (
        <div>
          <CardDetailsModal
            onClick={handleClose}
            icon={
              <IoMdClose
                onClick={() => setModal(false)}
                className="cursor-pointer text-[24px]"
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default AddMoney;
