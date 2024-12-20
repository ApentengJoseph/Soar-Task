import React, { useState, useRef}  from "react";
import Card from "../components/Card";
import TransactionList from "../components/TransactionList";
import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";

const Dashboard = () => {
  const transactions = [
    {
      icon: "icons/deposit.png",
      background: "#FFF5D9",
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
    },
    {
      icon: "icons/paypal_payment.png",
      background: "#E7EDFF",
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
    },
    {
      icon: "icons/dollar.png",
      background: "#DCFAF8",
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
    },
    {
      icon: "icons/dollar.png",
      background: "#DCFAF8",
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
    },
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
    {
      image: "https://randomuser.me/api/portraits/men/74.jpg",
      name: "Livia Bator",
      role: "CEO",
    },
    {
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Randy Press",
      role: "Director",
    },
    {
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Workman",
      role: "Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      name: "Workman",
      role: "Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      name: "Workman",
      role: "Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/93.jpg",
      name: "Workman",
      role: "Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      name: "Workman",
      role: "Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/39.jpg",
      name: "Workman",
      role: "Designer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Workman",
      role: "Designer",
    },
  ];

  const cards = [
    {
      title: "My Card",
      balance: "5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      lastDigits: "1234",
      dark: true,
    },
    {
      title: "My Card",
      balance: "4,120",
      cardHolder: "Jane Doe",
      validThru: "10/23",
      lastDigits: "5678",
      dark: false,
    },
    {
      title: "My Card",
      balance: "9,999",
      cardHolder: "John Smith",
      validThru: "08/24",
      lastDigits: "9101",
      dark: true,
    },
    {
        title: "My Card",
        balance: "9,999",
        cardHolder: "John Smith",
        validThru: "08/24",
        lastDigits: "9101",
        dark: false,
      },
  ];

  const [setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);


  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const cardWidth = scrollContainerRef.current.firstChild?.offsetWidth || 1;
    const containerWidth = scrollContainerRef.current.clientWidth;

    const visibleCards = Math.floor(containerWidth / cardWidth);
    const newIndex = Math.round(scrollLeft / (cardWidth * visibleCards));
    setActiveIndex(newIndex);
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
            className="overflow-hidden relative  group"
            onScroll={handleScroll}
          >
            <div className="flex space-x-4 overflow-hidden cursor-pointer">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] flex-shrink-0 scroll-snap-align-start"
                >
                  <Card
                    title={card.title}
                    balance={card.balance}
                    cardHolder={card.cardHolder}
                    validThru={card.validThru}
                    lastDigits={card.lastDigits}
                    dark={card.dark}
                  />
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

      {/* Expense Statistics and Quick Transfer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="section-title mb-4">Quick Transfer</h2>
          <QuickTransfer contacts={contacts} />
          </div>

        {/* Expense Statistics Section */}
        <div className="lg:col-span-2">
          <h2 className="section-title mb-4">Balance History</h2>
          <BalanceHistory data={balanceHistoryData} />
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
