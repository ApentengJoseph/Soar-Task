import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const WeeklyActivity = () => {
  const data = {
    days: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    deposit: [200, 300, 400, 350, 450, 300, 400],
    withdraw: [150, 250,200, 200,200,100, 250, 200,100,200, 190, 300, 200, 350, 250, 300],
  };

  return (
    <div className="relative p-4 bg-white card-border-radius">
      {/* Bar Chart Container */}
      <div className="relative">
        <BarChart
          series={[
            { data: data.deposit},
            { data: data.withdraw },
          ]}
          borderRadius={30}
          height={500}
          colors={["black", "#396AFF"]}
          xAxis={[
            {
              data: data.days,
              scaleType: "band",
            },
          ]}
          margin={{ top: 50, bottom: 50, left: 40, right: 10 }}
          options={{
            scales: {
              x: {
                barThickness: 20, // Adjust bar width
                maxBarThickness: 30, // Maximum bar width
              },
            },
          }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="flex items-center">
          <span
            className="w-4 h-4 mr-2 rounded-full"
            style={{ backgroundColor: "#396AFF" }}
          ></span>
          <span className="text-sm font-medium text-gray-700">Deposits</span>
        </div>
        <div className="flex items-center">
          <span
            className="w-4 h-4 mr-2 rounded-full"
            style={{ backgroundColor: "black" }}
          ></span>
          <span className="text-sm font-medium text-gray-700">Withdrawals</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
