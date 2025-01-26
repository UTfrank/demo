import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, TransactionState } from "@/types/transaction.types";

const initialState: TransactionState = {
  transactions: [],
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Omit<Transaction, 'id'>>) => {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        ...action.payload,
      }
      state.transactions.push(newTransaction);
      localStorage.setItem('transactionState', JSON.stringify(state));
    },
  }
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;