"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {setProfile} from "@/store/slice/profileSlice";

const ProfileUpdateForm = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.profile);

  const [username, setUsername] = useState(profile.username);
  const [minRoi, setMinRoi] = useState(profile.minRoi.toString());
  const [maxRoi, setMaxRoi] = useState(profile.maxRoi.toString());
  const [balance, setBalance] = useState(profile.balance.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      setProfile({
        username,
        minRoi: parseFloat(minRoi),
        maxRoi: parseFloat(maxRoi),
        balance: parseFloat(balance),
      })
    );
  };

  return (
    <div className="w-full sm:w-4/12 sm:mx-auto mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
            required
          />
        </div>

        <div>
          <label htmlFor="minRoi" className="block mb-2">
            Minimum ROI (%)
          </label>
          <input
            type="number"
            id="minRoi"
            value={minRoi}
            onChange={(e) => setMinRoi(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter minimum ROI"
            step="0.01"
            required
          />
        </div>

        <div>
          <label htmlFor="maxRoi" className="block mb-2">
            Maximum ROI (%)
          </label>
          <input
            type="number"
            id="maxRoi"
            value={maxRoi}
            onChange={(e) => setMaxRoi(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter maximum ROI"
            step="0.01"
            required
          />
        </div>

        <div>
          <label htmlFor="balance" className="block mb-2">Balance ($)</label>
          <input
            type="number"
            id="balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter balance"
            step="0.01"
            required
          />
        </div>

        <div>
          <p className="text-gray-600">
            Current Balance: ${profile.balance.toFixed(2)}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
