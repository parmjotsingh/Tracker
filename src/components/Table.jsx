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
            <>
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
            </>
          ))}
          <tr className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
            <td className="px-3 py-2 whitespace-nowrap">19/10/1678</td>
            <td className="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
            <td className="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
            <td className="px-3 py-2 whitespace-nowrap">15/03/1593</td>
            <td className="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
            <td className="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
            <td className="px-3 py-2 whitespace-nowrap">01/09/1971</td>
            <td className="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
            <td className="px-3 py-2 whitespace-nowrap">$53,000</td>
          </tr>

          <tr className="*:text-gray-900 *:first:font-medium">
            <td className="px-3 py-2 whitespace-nowrap">
              Guillermo de la Cruz
            </td>
            <td className="px-3 py-2 whitespace-nowrap">18/11/1991</td>
            <td className="px-3 py-2 whitespace-nowrap">
              Familiar/Vampire Hunter
            </td>
            <td className="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
