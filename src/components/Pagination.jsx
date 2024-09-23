import React from "react";

function Pagination({ totalPages, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className="flex space-x-4">
        {pageNumber.map((number) => (
          <li
            key={number}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg cursor-pointer"
          >
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
