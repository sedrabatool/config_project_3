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

import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import '../App.css';

const FinancialSummary = ({ transactions }) => {
  // State for chart data
  const [incomeChartData, setIncomeChartData] = useState([]);
  const [expenseChartData, setExpenseChartData] = useState([]);

  // Update chart data when transactions change
  useEffect(() => {
    const calculateChartData = (type) => {
      const filteredTransactions = transactions.filter(
        (trans) => trans.type === type
      );

      if (filteredTransactions.length === 0) {
        return [
          ['Category', 'Amount'],
          ['No Data', 1], // Placeholder chart data
        ];
      }

      const categoryTotals = {};
      filteredTransactions.forEach((trans) => {
        if (categoryTotals[trans.category]) {
          categoryTotals[trans.category] += trans.amount;
        } else {
          categoryTotals[trans.category] = trans.amount;
        }
      });

      return [
        ['Category', 'Amount'],
        ...Object.entries(categoryTotals).map(([category, amount]) => [
          category,
          amount,
        ]),
      ];
    };

    setIncomeChartData(calculateChartData('Income'));
    setExpenseChartData(calculateChartData('Expense'));
  }, [transactions]);

  return (
    <div className="financial-summary">
      <h2>Financial Summary</h2>

      <h3>Income</h3>
      <div className="chart1">
        <Chart
          chartType="PieChart"
          width="100%"
          height="200px"
          data={incomeChartData}
          options={{
            pieHole: 0.65,
            chartArea: { width: '100%', height: '100%' },
            backgroundColor: '#F9F9F9',
            slices: [
              { color: '#04BFDA' },
              { color: '#9B88ED' },
              { color: '#FB67CA' },
              { color: '#FFA84A' },
            ],
            legend: { position: 'right', alignment: 'center' },
            pieSliceTextStyle: { fontSize: 10, textAlign: 'left' },
          }}
        />
      </div>

      <h3>Expense</h3>
      <div className="chart2">
        <Chart
          chartType="PieChart"
          width="100%"
          height="200px"
          data={expenseChartData}
          options={{
            pieHole: 0.65,
            chartArea: { width: '100%', height: '100%' },
            backgroundColor: '#F9F9F9',
            slices: [
              { color: '#04BFDA' },
              { color: '#9B88ED' },
              { color: '#FB67CA' },
              { color: '#FFA84A' },
            ],
            legend: { position: 'right', alignment: 'center' },
            pieSliceTextStyle: { fontSize: 10, textAlign: 'left' },
          }}
        />
      </div>
    </div>
  );
};

export default FinancialSummary;
