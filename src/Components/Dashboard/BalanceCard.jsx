import React, { useEffect, useState } from "react";
import style from "../../CSS/main.module.css";
import axios from "axios";

const BalanceCard = () => {
  const url = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_BEARER_TOKEN;

  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`${url}/wallets/balance`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBalance(response.data.balance);
        console.log(response.data.balance);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBalance();
  }, []);

  return (
    <div
      className={`${style.card} 
    h-[192px] 
    bg-gradient-to-l 
    from-[#3745AF] 
    to-[#B9C4FB] 
    rounded-[16px]
    p-4
    flex flex-col 
    justify-between
    mt-4
    w-full
     min-[420px]:w-[350px]
    min-[675px]:w-[424px]
   min-[600px]:mt-8

    
    `}
    >
      <div className="text-white">
        <p>Available Balance</p>
      </div>
      <p className="font-semibold text-[40px]">#{balance}</p>
      <p className="text-white">Last updated:</p>
    </div>
  );
};

export default BalanceCard;
