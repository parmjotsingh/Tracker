import { useState } from "react";
import { toast } from "react-toastify";
import { updateTransaction } from "../services/transaction-services";

const Table = ({ transactions, handleActions, setFetchTransactions }) => {
  const [updateField, setUpdateField] = useState(false);
  const [editRowId, setEditRowId] = useState(null);
  const [rowFieldsData, setRowFieldsData] = useState({
    amount: 0,
    type: "",
    description: "",
    date: "",
  });
  const handleEdit = (event, entryId) => {
    console.log(transactions);

    transactions.forEach((element) => {
      if (element.entryId == entryId) setRowFieldsData(element);
    });
    setEditRowId(entryId);
  };
  const handleSave = (entryId) => {
    // if (rowFieldsData.date.trim() == 0) {
    //   toast.error("Please Select Date");
    //   return;
    // } else if (rowFieldsData.description.trim() == 0) {
    //   toast.error("Please fill description");
    //   return;
    // } else if (rowFieldsData.type.trim() == 0) {
    //   toast.error("Please Select Type");
    //   return;
    // } else if (rowFieldsData.amount <= 0) {
    //   toast.error("Please enter amount");
    //   return;
    // }
    // callApi;
    updateTransaction(entryId, rowFieldsData)
      .then(() => {
        toast.success("Data Updated");
        setEditRowId(null);
        setFetchTransactions(true);
        setRowFieldsData({ amount: 0, type: "", description: "", date: "" });
      })
      .catch((error) => {
        console.log(error);
        if (error.status == 400) {
          for (let key in error?.response?.data) {
            if (error.response.data.hasOwnProperty(key)) {
              toast.error(`${key}: ${error.response.data[key]}`);
            }
          }
        } else toast.error("Error while Updating data");
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900 ">
            <th className="px-3 py-2 whitespace-nowrap">Date</th>
            <th className="px-3 py-2 whitespace-nowrap">Description</th>
            <th className="px-3 py-2 whitespace-nowrap">Type</th>
            <th className="px-3 py-2 whitespace-nowrap">Amount</th>
            <th className="px-3 py-2 whitespace-nowrap w-1"></th>
            <th className="px-3 py-2 whitespace-nowrap hidden">EntryId</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {transactions.map((data) => (
            <tr
              className={
                (editRowId == data.entryId ? "bg-gray-100 " : "") +
                "*:text-gray-900 *:first:font-medium"
              }
              key={data.entryId}
            >
              {/* Date */}
              <td className="px-3 py-2 whitespace-nowrap">
                {editRowId == data.entryId ? (
                  <input
                    className="outline-0 border-0"
                    type={"date"}
                    value={rowFieldsData.date}
                    readOnly={editRowId != data.entryId}
                    onChange={(e) =>
                      setRowFieldsData({
                        ...rowFieldsData,
                        date: e.target.value,
                      })
                    }
                  />
                ) : (
                  data.date
                )}
              </td>

              {/* Description */}
              <td className="px-3 py-2 whitespace-nowrap">
                {editRowId == data.entryId ? (
                  <input
                    className="outline-0 border-0"
                    type={"text"}
                    value={rowFieldsData.description}
                    readOnly={editRowId != data.entryId}
                    onChange={(e) =>
                      setRowFieldsData({
                        ...rowFieldsData,
                        description: e.target.value,
                      })
                    }
                  />
                ) : (
                  data.description
                )}
              </td>
              {/* Type */}
              <td className="px-3 py-2 whitespace-nowrap">
                {editRowId == data.entryId ? (
                  <select
                    name="type"
                    className="outline-0 border-0"
                    onChange={(e) => (e) =>
                      setRowFieldsData({
                        ...rowFieldsData,
                        type: e.target.value,
                      })}
                    value={rowFieldsData.type}
                    readOnly={editRowId != data.entryId}
                  >
                    <option value="">Please select</option>
                    <option value="credit">CREDIT</option>
                    <option value="debit">DEBIT</option>
                  </select>
                ) : (
                  data.type.toUpperCase()
                )}
              </td>
              {/* Amount */}
              <td className="px-3 py-2 whitespace-nowrap">
                {editRowId == data.entryId ? (
                  <input
                    className="outline-0 border-0"
                    type={"number"}
                    value={rowFieldsData.amount}
                    readOnly={editRowId != data.entryId}
                    onChange={(e) =>
                      setRowFieldsData({
                        ...rowFieldsData,
                        amount: e.target.value,
                      })
                    }
                  />
                ) : (
                  "$" + data.amount
                )}
              </td>

              {/* Buttons */}
              <td className="px-3 py-2 whitespace-nowrap ">
                {editRowId != null && editRowId == data.entryId ? (
                  <>
                    <button
                      onClick={() => handleSave(data.entryId)}
                      className="cursor-pointer border border-emerald-600 px-[10px] py-1 bg-gray-50 text-emerald-600 rounded-sm text-sm font-medium tracking-wide mr-1 hover:shadow-sm transition  hover:-translate-[1px]"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditRowId(null);
                        setRowFieldsData({
                          amount: 0,
                          type: "",
                          description: "",
                          date: "",
                        });
                      }}
                      className="cursor-pointer border border-rose-500 px-3 py-1 bg-gray-50 text-rose-500 rounded-sm text-sm font-medium tracking-wide mr-1 hover:shadow-sm transition  hover:-translate-[1px]"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={(event) => handleEdit(event, data.entryId)}
                      className="cursor-pointer border border-emerald-600 px-3 py-1 bg-gray-50 text-emerald-600 rounded-sm text-sm font-medium tracking-wide mr-1 hover:shadow-sm transition  hover:-translate-[1px]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleActions("delete", data.entryId)}
                      className="cursor-pointer border border-rose-500 px-3 py-1 bg-gray-50 text-rose-500 rounded-sm text-sm font-medium tracking-wide hover:shadow-sm transition  hover:-translate-[1px]"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
              <td className="px-3 py-2 whitespace-nowrap hidden">
                {data.entryId}
              </td>
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
