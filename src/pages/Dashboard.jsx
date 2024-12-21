import React, { useRef } from "react";
import { useData } from "../contexts/DataContext";
import Card from "../components/Card";
import TransactionList from "../components/TransactionList";
import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";
import Shimmer from "../components/Shimmer";

const Dashboard = () => {
  const {
    cards,
    transactions,
    weeklyData,
    expenseData,
    balanceHistoryData,
    contacts,
  } = useData(); // Access data from context

  const scrollContainerRef = useRef(null);

  if (!transactions.length || !cards.length || !expenseData.labels.length) {
    return <Shimmer />; // Show shimmer while loading
  }

  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 1;
    const containerWidth = scrollContainerRef.current.clientWidth;

    const visibleCards = Math.floor(containerWidth / cardWidth);
    const newIndex = Math.round(scrollLeft / (cardWidth * visibleCards));
    console.log("Active Card Index:", newIndex);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cards Section */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="section-title">My Cards</h2>
            <button className="see-all-button">See All</button>
          </div>
          <div
            ref={scrollContainerRef}
            className="overflow-hidden relative group"
            onScroll={handleScroll}
          >
            <div className="flex space-x-4 overflow-hidden cursor-pointer">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="min-w-[250px] sm:min-w-[300px] lg:min-w-[50%] flex-shrink-0 scroll-snap-align-start"
                >
                  <Card {...card} /> {/* Pass card data as props */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <div>
          <h2 className="section-title mb-4">Recent Transactions</h2>
          <TransactionList
            title="Recent Transactions"
            transactions={transactions}
          />
        </div>
      </div>

      {/* Transactions and Weekly Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Weekly Activity Section */}
        <div className="lg:col-span-2">
          <h2 className="section-title mb-4">Weekly Activity</h2>
          <WeeklyActivity data={weeklyData} />
        </div>

        {/* Expense Statistics Section */}
        <div>
          <h2 className="section-title mb-4">Expense Statistics</h2>
          <ExpenseStatistics data={expenseData} />
        </div>
      </div>

      {/* Quick Transfer and Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="section-title mb-4">Quick Transfer</h2>
          <QuickTransfer contacts={contacts} />
        </div>

        <div className="lg:col-span-2">
          <h2 className="section-title mb-4">Balance History</h2>
          <BalanceHistory data={balanceHistoryData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
