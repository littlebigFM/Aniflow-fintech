// SortByModal.jsx
import React, { useState } from "react";

const SortByModal = ({ sortBy = "All", setSortBy, onClose }) => {
  const [localSortBy, setLocalSortBy] = useState(sortBy);

  const [sortByModal, setSortByModal] = useState(false);

  const handleSortByModal = () => {
    setSortByModal(!sortByModal);
  };

  const handleApply = () => {
    setSortBy(localSortBy);
    onClose();
  };

  const options = [
    "All",
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "3 Months",
    "6 Months",
    "This Year",
    "Previous Month",
    "Previous Week",
    "Previous Year",
  ];

  return (
    <div>
      <div onClick={handleSortByModal} className="cursor-pointer">
        Sortby
      </div>

      {sortByModal && (
        <div className="absolute top-20 right-10 bg-white p-4 rounded shadow-md w-96">
          <h3 className="text-lg font-semibold mb-3">Sort By</h3>

          <div className="grid grid-cols-3 gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setLocalSortBy(option)}
                className={`px-3 py-2 rounded border ${
                  localSortBy === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={(onClose, handleSortByModal)}
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

export default SortByModal;
