"use client";
import React from "react";
import { useAppSelector } from "@/store/hooks";

const TransactionHistory = () => {
  const { transactions } = useAppSelector((state) => state.transaction);

  const newTransactions = transactions.slice(-2).reverse();
  return (
    <div className="my-3">
      <h5 className="text-black text-lg font-medium font-mont">
        Recent Transactions
      </h5>
      <ul>
        {newTransactions.map((transaction, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-[10px] px-3 border-b border-b-gray-50"
          >
            <p className="font-bold">$ {transaction.amount.toFixed(2)}</p>
            <p className={`${transaction.type === "credit" ? "text-green-500 bg-green-200" : "text-red-500 bg-red-200"} px-2 py-1 rounded-full w-fit text-[10px] font-bold`}>
              {transaction.type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
