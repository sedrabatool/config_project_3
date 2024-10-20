import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import '../App.css';

const FinancialSummary = ({ transactions }) => {
  const [incomeChartData, setIncomeChartData] = useState([]);
  const [expenseChartData, setExpenseChartData] = useState([]);

  useEffect(() => {
    const calculateChartData = (type) => {
      const filteredTransactions = transactions.filter(
        (trans) => trans.type === type
      );

      if (filteredTransactions.length === 0) {
        return [['Category', 'Amount'], ['No Data', 1]]; // Placeholder data
      }

      // Use reduce to aggregate amounts by category
      const categoryTotals = filteredTransactions.reduce((acc, trans) => {
        acc[trans.category] = (acc[trans.category] || 0) + trans.amount;
        return acc;
      }, {});

      // Format data for the chart
      const chartData = [
        ['Category', 'Amount'],
        ...Object.entries(categoryTotals).map(([category, amount]) => [
          category,
          amount,
        ]),
      ];

      return chartData;
    };

    setIncomeChartData(calculateChartData('Income'));
    setExpenseChartData(calculateChartData('Expense'));
  }, [transactions]);

  return (
    <div className="financial-summary">
      <h3>Financial Summary</h3>

      <h3>Income</h3>
      <div className="first_pie">
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
              { color: '#FFA84A' },
              { color: '#FB67CA' },
              { color: '#9B88ED' },
            ],
            legend: { position: 'right', alignment: 'center' },
            pieSliceText: 'none',
            tooltip: { trigger: 'none' },
            enableInteractivity: false,
          }}
        />
      </div>

      <h3>Expense</h3>
      <div className="sec_pie">
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
              { color: '#FFA84A' },
              { color: '#FB67CA' },
              { color: '#9B88ED' },
            ],
            legend: { position: 'right', alignment: 'center' },
            pieSliceText: 'none',
            tooltip: { trigger: 'none' },
            enableInteractivity: false,
          }}
        />
      </div>
    </div>
  );
};

export default FinancialSummary;
