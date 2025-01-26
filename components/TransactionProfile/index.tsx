"use client";
import React from "react";
import TradingChart from "../TradingChart";
import TransactionHistory from "../TransactionHistory";
import { useAppSelector } from "@/store/hooks";

const TransactionProfile = () => {
  const { profile } = useAppSelector((state) => state.profile);
  console.log(profile);
  return (
    <div className="w-full sm:w-4/12 sm:mx-auto">
      <p className="text-black text-lg font-medium font-mont mb-4">
        Hello {profile.username}
      </p>
      <div className="bg-[#6F1ED5] p-4 rounded-2xl h-40 flex flex-col items-start justify-between">
        <div className="px-3 py-2 bg-white rounded-full text-sm w-fit">
          {profile.minRoi}% - {profile.maxRoi}% returns
        </div>
        <h4 className="text-white text-3xl font-bold font-mont">
          $ {profile.balance.toFixed(2)}
        </h4>
      </div>
      <TransactionHistory />
      <div className="h-[300px]">
        <TradingChart />
      </div>
    </div>
  );
};

export default TransactionProfile;
