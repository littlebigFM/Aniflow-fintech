// FiltersModal.jsx
import React, { useState } from "react";

const FiltersModal = ({ filters = {}, setFilters, onClose }) => {
  const [localFilters, setLocalFilters] = useState({
    status: filters.status || "All",
    type: filters.type || "All",
    startDate: filters.startDate || "",
    endDate: filters.endDate || "",
  });

  const [ftModal, setFtModal] = useState(false);

  const handleFtModal = () => {
    setFtModal(!ftModal);
  };

  const handleApply = () => {
    setFilters(localFilters);
    onClose();
  };

  return (
    <div>
      <div onClick={handleFtModal} className="cursor-pointer">
        Filter
      </div>

      {ftModal && (
        <div
          className=" absolute 
          top-1/2 left-1/2 
           transform -translate-x-1/2
           -translate-y-1/2 
          bg-[#F4F5FE] 
          p-4 
          rounded-[24px]
          w-full
          "
        >
          <h3 className="text-lg font-semibold mb-3">Filters</h3>

          {/* Status */}
          <div className="flex justify-between items-center">
            <label className="block mb-2">Status:</label>
            <select
              value={localFilters.status}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, status: e.target.value })
              }
              className="gap-none outline-none"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Failed</option>
            </select>
          </div>

          {/* Type */}
          <div className="flex justify-between items-center mt-4">
            <label className="block mb-2">Type:</label>
            <select
              value={localFilters.type}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, type: e.target.value })
              }
              className="outline-none"
            >
              <option>All</option>
              <option>Credit</option>
              <option>Debit</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex justify-between items-center mt-4">
            <label className="block mb-2">Start Date:</label>
            <input
              type="date"
              value={localFilters.startDate}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, startDate: e.target.value })
              }
              className="outline-none"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <label className="block mb-2">End Date:</label>
            <input
              type="date"
              value={localFilters.endDate}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, endDate: e.target.value })
              }
              className="outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={(onClose, handleFtModal)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersModal;
