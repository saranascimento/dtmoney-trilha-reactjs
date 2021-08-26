import React from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = React.createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([])

  React.useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
  
}