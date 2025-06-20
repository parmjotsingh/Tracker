import { useEffect, useState } from "react";
import Base from "../components/Base";
import Table from "../components/Table";
import {
  addUserTransaction,
  deleteTransaction,
  loadUserTransaction,
} from "../services/transaction-services";
import { getCurrentUserDetail } from "../auth/index.js";
import { toast } from "react-toastify";
//date formate - 2025-04-10
const UserDashboard = () => {
  const [inputFieldData, setInputFieldData] = useState({
    amount: 0,
    type: "",
    description: "",
    date: "",
  });
  const [userDetail, setUserDetail] = useState(undefined);
  const [transactions, setTransactions] = useState([]);
  const [fetchTransactions, setFetchTransactions] = useState(true);

  useEffect(() => {
    setUserDetail(getCurrentUserDetail());
  }, []);

  useEffect(() => {
    userDetail != undefined &&
      fetchTransactions &&
      loadUserTransaction(userDetail.id)
        .then((data) => {
          toast.success("Transactions Synced");
          console.log(data);
          setTransactions(data);
          setFetchTransactions(false);
        })
        .catch((error) => {
          alert("error");
          toast.error("transaction not fetched due to some error");
        });
  }, [userDetail, fetchTransactions]); //inputFieldData, userDetail

  const handleFieldChange = (e) => {
    console.log("hellp " + e.target.value + e.target.name);
    if (e.target.name == "type" && e.target.value.trim() == "") {
      toast.error("Please Select Type value");
      return;
    }
    setInputFieldData({
      ...inputFieldData,
      [e.target.name]: e.target.value,
    });
  };

  const handleActions = (action, entryId) => {
    if (action == "edit") {
      toast.dark("EDITing");
    } else if (action == "delete") {
      toast.promise(
        deleteTransaction(entryId).then((response) => {
          setFetchTransactions(true);
          return response;
        }),
        {
          pending: "Processing",
          success: "Entry deleted👌",
          error: "Error 🤯",
        }
      );
    }
  };

  const addTransaction = () => {
    if (inputFieldData.date.trim() == 0) {
      toast.error("Please Select Date");
      return;
    } else if (inputFieldData.description.trim() == 0) {
      toast.error("Please fill transaction description");
      return;
    } else if (inputFieldData.type.trim() == 0) {
      toast.error("Please Select Type");
      return;
    } else if (inputFieldData.amount <= 0) {
      toast.error("Please enter amount");
      return;
    }
    addUserTransaction(inputFieldData, userDetail.id)
      .then((data) => {
        toast.success("transaction added");
        console.log(data);
        setInputFieldData({ amount: 0, type: "", description: "", date: "" });
        setFetchTransactions(true);
      })
      .catch((error) => {
        alert("error");
        toast.error("transaction not added due to some error");
      });
  };

  return (
    <Base>
      <div className="mx-auto max-w-screen-xl my-auto flex-grow grid grid-rows-4 items-center">
        {/* input fields */}
        <div className=" grid grid-cols-9 gap-x-8 my-4">
          <div className="col-span-2">
            <span className="text-lg font-medium text-gray-700">Date</span>
            <input
              type="date" //"email"
              className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3"
              onChange={(e) => handleFieldChange(e)}
              name="date"
              value={inputFieldData.date}
            />
          </div>
          <div className="col-span-2">
            <span className="text-lg font-medium text-gray-700">
              Description
            </span>
            <input
              type="text"
              className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3"
              onChange={(e) => handleFieldChange(e)}
              value={inputFieldData.description}
              name="description"
            />
          </div>

          <label className="col-span-2" htmlFor="Headline">
            <span className="text-lg font-medium text-gray-700">Type</span>

            <select
              name="type"
              id="Headline"
              className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3"
              onChange={(e) => handleFieldChange(e)}
              value={inputFieldData.type}
            >
              <option value="">Please select</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </label>
          {/* </div> */}
          <div className="col-span-2">
            <span className="text-lg font-medium text-gray-700">Amount</span>
            <input
              type="number" // Amount
              className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3"
              onChange={(e) => handleFieldChange(e)}
              value={inputFieldData.amount}
              name="amount"
            />
          </div>
          <button
            onClick={addTransaction}
            className="self-end col-span-1 border bg-gray-50 border-teal-600 text tracking-wider font-medium text-teal-600 rounded-sm h-9 px-4 hover:cursor-pointer"
          >
            ADD
          </button>
        </div>
        {/* Table */}
        <div className="row-span-2">
          <Table
            transactions={transactions}
            handleActions={handleActions}
            setFetchTransactions={setFetchTransactions}
          />
        </div>
      </div>
    </Base>
  );
};

export default UserDashboard;

{
  /* <div > */
}
{
  /* <span className="text-lg font-medium text-gray-700">Type</span>
            <input
              type="text" //
              className="mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm h-9 px-3"
              onChange={(e) => handleChange(e, "type")}
              // value={data.date}
            /> */
}
