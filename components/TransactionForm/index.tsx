"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTransaction } from "@/store/slice/transactionSlice";

const TransactionForm = () => {
  const dispatch = useAppDispatch();
  // const { transactions, balance } = useAppSelector(
  //   (state) => state.transactions
  // );

  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"debit" | "credit">("debit");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addTransaction({
        type,
        amount: parseFloat(amount),
      })
    );

    // Reset form
    setAmount("");
    setType("debit");
  };

  return (
    <div className='w-full sm:w-4/12 sm:mx-auto mt-10'>
      <h1 className="text-2xl font-bold mb-4">Transaction Form</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              step="0.01"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "debit" | "credit")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
