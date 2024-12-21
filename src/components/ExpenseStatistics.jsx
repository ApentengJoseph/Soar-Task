import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const ExpenseStatistics = () => {
  const data = [
    { label: "Entertainment", value: 30, color: "#344A7D" },
    { label: "Bill Expense", value: 15, color: "#FF7D00" },
    { label: "Investment", value: 20, color: "#4A80F6" },
    { label: "Others", value: 35, color: "#232323" },
  ];

  return (
    <div
      style={{ height: "93%" }}
      className="bg-white relative card-border-radius p-6 flex flex-col justify-center items-center space-y-6"
    >
      <div className="flex flex-col items-center">
        {/* Chart Container */}
        <div style={{ width: "100%", maxWidth: "450px", marginLeft: "3rem" }}>
          <PieChart
            series={[
              {
                data: data.map((item) => ({
                  id: item.label,
                  value: item.value,
                  color: item.color,
                })),
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                outerRadius: 150,
                innerRadius:10,
                paddingAngle: 10,
                cornerRadius: 5,
                arcLabel: (item) => `${item.value}%`,
                arcLabelMinAngle: 20,
                arcLabelRadius: "55%",
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontWeight: "bold",
                fontSize: 14,
                fill: "#fff",
              },
            }}
            width={500}
            height={400}
          />
        </div>

        {/* Side Labels */}
        <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-6 justify-center">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4"
                style={{
                  backgroundColor: item.color, // Match the color of the slice
                  borderRadius: "50%",
                }}
              />
              <p className="text-sm font-medium text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
