import React, { useState } from "react";
// import Sidebar from "../Dashboard/Sidebar";
import BankSelect from "./BankSelect";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const SendMoney = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    name: "",
    bank: "",
    amount: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    event.preventDefault();
    let newError = {};

    if (!formData.accountNumber)
      newError.accountNumber = "Account number is required";
    if (!formData.name) newError.name = "Name of the Recipient is required";
    if (!formData.bank) newError.bank = "Bank name";
    if (!formData.amount) newError.amount = "Enter Amount";
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(formData);

  const [modal, setModal] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const handleClose = () => {
    setModal(false);
    setModalTwo(false);
  };

  const handleClickOne = () => {
    setModal(false);
    setModalTwo(true);
  };

  // ================= for pin ============= //
  const [pin, setPin] = useState({
    pin: "",
  });

  const handleChangeTwo = (event) => {
    setPin({
      // ...pin,
      [event.target.name]: event.target.value,
    });
  };

  console.log("pin", pin);

  return (
    <div className="">
      <div className="flex flex-col gap-1 min-[1000px]:hidden">
        <h2 className="text-2xl font-semibold">Send Money</h2>
        <p className="text-[gray]">
          Transfer funds securely to any wallet or bank account
        </p>
      </div>
      <form action="" className="flex flex-col gap-4 mt-6 min-[1000px]:mt-2">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Enter Account Number</p>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="bg-[#F9FAFB] w-full pl-4 h-[52px] rounded-[12px] border outline-none"
            placeholder="1234567890"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Recipient Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#F9FAFB] w-full pl-4 h-[52px] rounded-[12px] border outline-none"
            placeholder="Cynthia Ofori"
          />
        </div>

        <div>
          <BankSelect />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Enter Amount</p>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="bg-[#F9FAFB] w-full pl-4 h-[52px] rounded-[12px] border outline-none"
            placeholder="#20,000"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">Description (optional)</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-[#F9FAFB] w-full pl-4 h-[52px] rounded-[12px] border outline-none"
          />
        </div>

        <div onClick={() => setModal(true)}>
          <Button className="text-[white] font-semibold" text="Proceed" />
        </div>

        <div>
          {modal && (
            <Modal onClick={handleClose}>
              {
                <div
                  className="flex flex-col
                 gap-4"
                >
                  <div
                    className="flex flex-col
                  items-center 
                  gap-4
                    "
                  >
                    <p className="font-medium text-[20px] text-[#666666]">
                      Confirm Transfer
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-[12px] text-[#8C8C8C]">Bank</p>
                      <p className="font-medium text-[13px]">Zenith bank</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-[12px] text-[#8C8C8C]">
                        Account Number
                      </p>
                      <p className="font-medium text-[13px]">2283461098</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-[12px] text-[#8C8C8C]">Account Name</p>
                      <p className="font-medium text-[13px]">Cynthia Ofori</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-[12px] text-[#8C8C8C]">Bank</p>
                      <p className="font-medium text-[13px]">20,000.00</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-[14px] text-[#111827]">
                      Payment Method
                    </p>
                    <div className="bg-[#E0E0E0] w-full mt-3 p-6 rounded-[12px]">
                      <div>
                        <p className="text-[12px] text-[#111827]">
                          Available Balance{" "}
                          <span className="text-[#666666]">(23,000)</span>
                        </p>
                      </div>

                      <div className="mt-4">
                        <p className="text-[12px] text-[#111827]">
                          Wallet{" "}
                          <span className="text-[#666666]">(23,000)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div onClick={handleClickOne}>
                    <Button
                      text="Continue"
                      className="text-[white] font-semibold"
                    />
                  </div>
                </div>
              }
            </Modal>
          )}

          {modalTwo && (
            <Modal onClick={handleClose}>
              {
                <div className="flex flex-col gap-6 pb-[8rem]">
                  <div>
                    <p className="font-medium text-[24px]">Enter your Pin</p>
                    <p className="font-light text-[#8E8E93]">
                      Please enter your 4-digit transaction pin to authorize
                      this transfer
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      pattern="[0-9]"
                      // placeholder="enter pin"
                      // className=" rounded tracking-widest"
                      onChange={(event) => setPin(event.target.value)}
                      // onChange={handleChangeTwo}
                      className="flex items-center justify-center outline-none p-2 rounded-[8px]"
                    />
                  </div>
                  <div>
                    <Button
                      text="Confirm Transfer"
                      className="text-[white] font-semibold"
                    />
                  </div>
                </div>
              }
            </Modal>
          )}
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
