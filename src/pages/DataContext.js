import React, { createContext, useContext } from "react";

// Data
const transactions = [
  { icon: "icons/deposit.png", background: "#FFF5D9", description: "Deposit from my Card", date: "28 January 2021", amount: "-$850" },
  { icon: "icons/paypal_payment.png", background: "#E7EDFF", description: "Deposit Paypal", date: "25 January 2021", amount: "+$2,500" },
  { icon: "icons/dollar.png", background: "#DCFAF8", description: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400" },
  { icon: "icons/dollar.png", background: "#DCFAF8", description: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400" },
];

const weeklyData = {
  deposit: [100, 200, 300, 400, 500, 400, 300],
  withdraw: [200, 100, 300, 200, 400, 300, 100],
};

const expenseData = {
  labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
  values: [30, 15, 20, 35],
};

const balanceHistoryData = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  values: [300, 400, 350, 450, 500, 550, 600],
};

const contacts = [
  { image: "https://randomuser.me/api/portraits/men/74.jpg", name: "Livia Bator", role: "CEO" },
  { image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Randy Press", role: "Director" },
  // More contacts...
];

const cards = [
  { title: "My Card", balance: "5,756", cardHolder: "Eddy Cusuma", validThru: "12/22", lastDigits: "1234", dark: true },
  { title: "My Card", balance: "4,120", cardHolder: "Jane Doe", validThru: "10/23", lastDigits: "5678", dark: false },
  // More cards...
];

// Create Context
const DataContext = createContext();

// Provider Component
export const DataProvider = ({ children }) => {
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
