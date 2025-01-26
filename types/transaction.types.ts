export interface Transaction {
  id: string;
  amount: number;
  type: "credit" | "debit";
}

export interface TransactionState {
  transactions: Transaction[];
}