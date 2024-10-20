<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import '../App.css';
=======
// import React, { useState, useEffect } from 'react';
// import { Chart } from 'react-google-charts';
// import '../App.css';

// const FinancialSummary = ({ transactions }) => {
//   // Function to calculate chart data
//   const calculateChartData = (type) => {
//     const filteredTransactions = transactions.filter(
//       (trans) => trans.type === type
//     );

//     if (filteredTransactions.length === 0) {
//       return [
//         ['Category', 'Amount'],
//         ['No Data', 1], // Placeholder chart data
//       ];
//     }

//     const categoryTotals = {};
//     filteredTransactions.forEach((trans) => {
//       if (categoryTotals[trans.category]) {
//         categoryTotals[trans.category] += trans.amount;
//       } else {
//         categoryTotals[trans.category] = trans.amount;
//       }
//     });

//     return [
//       ['Category', 'Amount'],
//       ...Object.entries(categoryTotals).map(([category, amount]) => [
//         category,
//         amount,
//       ]),
//     ];
//   };

//   // State for chart data
//   const [incomeChartData, setIncomeChartData] = useState([]);
//   const [expenseChartData, setExpenseChartData] = useState([]);

//   // Update chart data when transactions change
//   useEffect(() => {
//     setIncomeChartData(calculateChartData('Income'));
//     setExpenseChartData(calculateChartData('Expense'));
//   }, [transactions]);

//   return (
//     <div className="financial-summary">
//       <h2>Financial Summary</h2>

//       <h3>Income</h3>
//       <div className="chart1">
//         <Chart
//           chartType="PieChart"
//           width="100%"
//           height="400px"
//           data={incomeChartData}
//           options={{
//             pieHole: 0.65,
//             chartArea: { width: '100%', height: '100%' },
//             backgroundColor: '#F9F9F9',
//             slices: [
//               { color: '#04BFDA' },
//               { color: '#9B88ED' },
//               { color: '#FB67CA' },
//               { color: '#FFA84A' },
//             ],
//             legend: { position: 'right', alignment: 'center' },
//             pieSliceTextStyle: { fontSize: 10, textAlign: 'left' },
//           }}
//         />
//       </div>

//       <h3>Expense</h3>
//       <div className="chart2">
//         <Chart
//           chartType="PieChart"
//           width="100%"
//           height="400px"
//           data={expenseChartData}
//           options={{
//             pieHole: 0.65,
//             chartArea: { width: '100%', height: '100%' },
//             backgroundColor: '#F9F9F9',
//             slices: [
//               { color: '#04BFDA' },
//               { color: '#9B88ED' },
//               { color: '#FB67CA' },
//               { color: '#FFA84A' },
//             ],
//             legend: { position: 'right', alignment: 'center' },
//             pieSliceTextStyle: { fontSize: 10, textAlign: 'left' },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default FinancialSummary;

import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "../App.css";
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368

const FinancialSummary = ({ transactions }) => {
  const [incomeChartData, setIncomeChartData] = useState([]);
  const [expenseChartData, setExpenseChartData] = useState([]);

  useEffect(() => {
    const calculateChartData = (type) => {
      const filteredTransactions = transactions.filter(
        (trans) => trans.type === type
      );

      if (filteredTransactions.length === 0) {
<<<<<<< HEAD
        return [['Category', 'Amount'], ['No Data', 1]]; // Placeholder data
=======
        return [
          ["Category", "Amount"],
          ["No Data", 1], // Placeholder chart data
        ];
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
      }

      // Use reduce to aggregate amounts by category
      const categoryTotals = filteredTransactions.reduce((acc, trans) => {
        acc[trans.category] = (acc[trans.category] || 0) + trans.amount;
        return acc;
      }, {});

<<<<<<< HEAD
      // Format data for the chart
      const chartData = [
        ['Category', 'Amount'],
=======
      return [
        ["Category", "Amount"],
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
        ...Object.entries(categoryTotals).map(([category, amount]) => [
          category,
          amount,
        ]),
      ];

      return chartData;
    };

    setIncomeChartData(calculateChartData("Income"));
    setExpenseChartData(calculateChartData("Expense"));
  }, [transactions]);

  return (
<<<<<<< HEAD
    <div className="financial-summary">
      <h3>Financial Summary</h3>

      <h3>Income</h3>
      <div className="first_pie">
=======
    <div className=" w-full h-full px-8">
      <h2 className="text-3xl font-bold py-8">Financial Summary</h2>

      <h3 className="font-bold text-xl">Income</h3>
      <div className="chart1">
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
        <Chart
          chartType="PieChart"
          width="100%"
          height="200px"
          data={incomeChartData}
          options={{
            pieHole: 0.65,
            chartArea: { width: "100%", height: "100%" },
            backgroundColor: "#F9F9F9",
            slices: [
<<<<<<< HEAD
              { color: '#04BFDA' },
              { color: '#FFA84A' },
              { color: '#FB67CA' },
              { color: '#9B88ED' },
            ],
            legend: { position: 'right', alignment: 'center' },
            pieSliceText: 'none',
            tooltip: { trigger: 'none' },
            enableInteractivity: false,
=======
              { color: "#04BFDA" },
              { color: "#9B88ED" },
              { color: "#FB67CA" },
              { color: "#FFA84A" },
            ],
            legend: { position: "right", alignment: "center" },
            pieSliceTextStyle: { fontSize: 10, textAlign: "left" },
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
          }}
        />
      </div>

<<<<<<< HEAD
      <h3>Expense</h3>
      <div className="sec_pie">
=======
      <h3 className="font-bold text-xl">Expense</h3>
      <div className="chart2">
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
        <Chart
          chartType="PieChart"
          width="100%"
          height="200px"
          data={expenseChartData}
          options={{
            pieHole: 0.65,
            chartArea: { width: "100%", height: "100%" },
            backgroundColor: "#F9F9F9",
            slices: [
<<<<<<< HEAD
              { color: '#04BFDA' },
              { color: '#FFA84A' },
              { color: '#FB67CA' },
              { color: '#9B88ED' },
            ],
            legend: { position: 'right', alignment: 'center' },
            pieSliceText: 'none',
            tooltip: { trigger: 'none' },
            enableInteractivity: false,
=======
              { color: "#04BFDA" },
              { color: "#9B88ED" },
              { color: "#FB67CA" },
              { color: "#FFA84A" },
            ],
            legend: { position: "right", alignment: "center" },
            pieSliceTextStyle: { fontSize: 10, textAlign: "left" },
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
          }}
        />
      </div>
    </div>
  );
};

export default FinancialSummary;
