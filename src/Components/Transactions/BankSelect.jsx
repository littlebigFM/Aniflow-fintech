import axios from "axios";
import React, { useEffect, useState } from "react";

const BankSelect = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");

  const url = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_BEARER_TOKEN;

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(`${url}/banks/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBanks(response.data.data || []);
        console.log(response.data.data);
      } catch (error) {
        console.log(`Error fetching banks: ${error}`);
      }
    };
    fetchBanks();
  }, [url, token]);

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Select Bank</p>
      <select
        value={selectedBank}
        onChange={(event) => setSelectedBank(event.target.value)}
        className="bg-[#F9FAFB] w-full pl-4 h-[52px] rounded-[12px] border outline-none "
      >
        {/* <option value="">Select bank</option> */}
        {banks.map((bank) => (
          <option key={bank.bank_code} value={bank.bank_code}>
            {bank.bank_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BankSelect;
