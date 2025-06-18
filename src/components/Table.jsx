import React from "react";
import Pagination from "./Pagination";

const Table = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900">
            <th className="px-3 py-2 whitespace-nowrap">Date</th>
            <th className="px-3 py-2 whitespace-nowrap">Description</th>
            <th className="px-3 py-2 whitespace-nowrap">Type</th>
            <th className="px-3 py-2 whitespace-nowrap">Amount</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {transactions.map((data) => (
            <tr
              className="*:text-gray-900 *:first:font-medium"
              key={data.entryId}
            >
              <td className="px-3 py-2 whitespace-nowrap">{data.date}</td>
              <td className="px-3 py-2 whitespace-nowrap">
                {data.description}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                {data.type.toUpperCase()}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">${data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Future Functionality */}
      {/* <div className="w-full flex justify-center">
        <Pagination />
      </div> */}
    </div>
  );
};

export default Table;
