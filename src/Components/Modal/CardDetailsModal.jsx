import React, { useState } from "react";
import Modal from "./Modal";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";

const CardDetailsModal = ({ icon, onClick }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const handleChange = (event) => {
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value,
    });
  };

  console.log(cardDetails);

  // const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal onClick={onClick}>
        <div className="flex justify-between items-center">
          <p className="font-medium text-[24px]">Enter Card Details</p>
          <div>
            {/* <IoMdClose /> */}
            {icon}
          </div>
        </div>
        <form action="" className="flex flex-col gap-4 mt-4">
          <div className="w-full bg-[#F9FAFB]">
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="w-full  p-3 rounded-[12px] border border-[#C7C7CC]"
            />
          </div>
          <div className="flex w-full gap-4">
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              placeholder="Expiry Date"
              className="w-full p-3 rounded-[12px] border border-[#C7C7CC]"
            />
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              placeholder="CVV"
              className="w-full p-3 rounded-[12px] border border-[#C7C7CC]"
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleChange}
              placeholder="Cardholder Name"
              className="w-full p-3 rounded-[12px] border border-[#C7C7CC]"
            />
          </div>
        </form>
        <div>
          <Button
            text="Continue"
            className="text-[white] font-semibold w-full mt-6"
          />
        </div>
      </Modal>
    </div>
  );
};

export default CardDetailsModal;
