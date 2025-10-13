import axios from "axios";
import { HiOutlineDotsVertical } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import logo4 from "../../assets/logo4.png";
// import FiltersAndSortby from "./FilterModal";
import FiltersModal from "./FiltersModal";
import SortByModal from "./SortByModal";
import Transactiondetails from "./Transactiondetails";

const TransactionHistory = () => {
  const url = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_BEARER_TOKEN;

  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  // const [filterModal, setFilterModal] = useState(true);
  const [transactionDetailsModal, setTransactionDetailsModal] = useState(true);
  const handleClose = () => {
    setTransactionDetailsModal(false);
  };
  // const [trsModal, setTrsModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`${url}/transaction/history`, {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        });

        setTransaction(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [token, url]);

  return (
    <div className="">
      <div className="mt-8 bg-[white] p-4 rounded-[16px] flex flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <p className="font-medium">Transaction history</p>
          <div
            className="font-medium cursor-pointer min-[1100px]:hidden"
            onClick={handleModal}
          >
            <HiOutlineDotsVertical />
          </div>

          {/* <div className="hidden min-[1100px]:flex">
            <FiltersModal />
            <SortByModal />
          </div> */}
        </div>

        <div>
          {loading ? (
            <div>
              <p>Loading....</p>
            </div>
          ) : error ? (
            <div>
              {/* <p>{error}</p> */}
              <div className="w-full flex flex-col items-center justify-center">
                <div>
                  <img src={logo4} alt="" />
                </div>
                <p>No recent transactions</p>
              </div>
            </div>
          ) : transaction === 0 ? (
            <div>
              <p>No recent transactions</p>
            </div>
          ) : (
            <div>
              <p></p>
            </div>
          )}
        </div>

        {modal && (
          <div
            className="h-full w-full
           bg-black
           bg-opacity-50
           absolute top-1/2 left-1/2 
           transform -translate-x-1/2
           -translate-y-1/2
           flex
           items-center
           justify-center
           pl-[36px]
           pr-[20px]
           
           "
          >
            <div
              className="bg-[#F4F5FE] p-8
            rounded-[14px] 
            flex w-full 
            justify-between
            "
            >
              <div className="flex flex-col gap-8 font-medium ">
                {/* <p className="cursor-pointer">Filters</p>
                <p className="cursor-pointer">Status</p> */}
                <FiltersModal />
                <SortByModal />
              </div>

              <div>
                <p className="cursor-pointer" onClick={handleModal}>
                  X
                </p>
              </div>
            </div>

            {}
          </div>
        )}
      </div>

      {transactionDetailsModal && (
        <div>
          <Transactiondetails onClick={handleClose} />
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
