import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div
      className="p-4 bg-white card-border-radius h-[70%] relative group"
    >
      <ul className="mt-4 space-y-3 cursor-pointer overflow-hidden group-hover:overflow-y-auto h-full">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div
                style={{ background: transaction.background }}
                className="p-2 h-[55px] w-[55px] flex justify-center items-center rounded-full"
              >
                <img src={transaction.icon} alt="Logo" className="w-6 h-7" />
              </div>
              <div>
                <p className="font-medium text-textBlueDark text-base">
                  {transaction.description}
                </p>
                <p className="text-sm text-textBlueLight font-semibold">
                  {transaction.date}
                </p>
              </div>
            </div>
            <p
              className={`text-lg ${
                transaction.amount.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {transaction.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
