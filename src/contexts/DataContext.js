import React, { createContext, useContext, useEffect, useState } from "react";
import mockAPI from "../mockApi/mockAPI"; // Import mock endpoints

// Create Context
const DataContext = createContext();

// Provider Component
export const DataProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [weeklyData, setWeeklyData] = useState({ deposit: [], withdraw: [] });
  const [expenseData, setExpenseData] = useState({ labels: [], values: [] });
  const [balanceHistoryData, setBalanceHistoryData] = useState({ labels: [], values: [] });
  const [contacts, setContacts] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from mock API
    const fetchData = async () => {
      const fetchedTransactions = await mockAPI.getTransactions();
      const fetchedWeeklyData = await mockAPI.getWeeklyData();
      const fetchedExpenseData = await mockAPI.getExpenseData();
      const fetchedBalanceHistoryData = await mockAPI.getBalanceHistoryData();
      const fetchedContacts = await mockAPI.getContacts();
      const fetchedCards = await mockAPI.getCards();

      setTransactions(fetchedTransactions);
      setWeeklyData(fetchedWeeklyData);
      setExpenseData(fetchedExpenseData);
      setBalanceHistoryData(fetchedBalanceHistoryData);
      setContacts(fetchedContacts);
      setCards(fetchedCards);
    };

    fetchData();
  }, []);

  const data = {
    transactions,
    weeklyData,
    expenseData,
    balanceHistoryData,
    contacts,
    cards,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// Custom Hook for Convenience
export const useData = () => {
  return useContext(DataContext);
};
