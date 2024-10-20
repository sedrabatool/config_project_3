import React, { useState, useEffect } from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';
import FinancialSummary from './components/FinancialSummary';
import './App.css';

function App() {
  const getInitialBalance = () => JSON.parse(localStorage.getItem('balance')) || 0;
  const getInitialIncome = () => JSON.parse(localStorage.getItem('income')) || 0;
  const getInitialExpense = () => JSON.parse(localStorage.getItem('expense')) || 0;
  const getInitialTransactions = () => JSON.parse(localStorage.getItem('transactions')) || [];

  const [balance, setBalance] = useState(getInitialBalance);
  const [income, setIncome] = useState(getInitialIncome);
  const [expense, setExpense] = useState(getInitialExpense);
  const [transactions, setTransactions] = useState(getInitialTransactions);

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expense', JSON.stringify(expense));
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [balance, income, expense, transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    if (transaction.type === 'Income') {
      setIncome((prev) => prev + transaction.amount);
      setBalance((prev) => prev + transaction.amount);
    } else {
      setExpense((prev) => prev + transaction.amount);
      setBalance((prev) => prev - transaction.amount);
    }
  };

  const deleteTransaction = (index) => {
    const deletedTransaction = transactions[index];
    if (deletedTransaction.type === 'Income') {
      setIncome((prev) => prev - deletedTransaction.amount);
      setBalance((prev) => prev - deletedTransaction.amount);
    } else {
      setExpense((prev) => prev - deletedTransaction.amount);
      setBalance((prev) => prev + deletedTransaction.amount);
    }
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  };
  

  return (
    <div className="app-container">
      <div className="header">
        <div className="balance">
          <h3>Available Balance</h3>
          <p>${balance}</p>
        </div>
        <div className="income-expense">
          <div className='income'><h4>Income</h4><p>${income}</p></div>
          <div className='expense'><h4>Expense</h4><p>${expense}</p></div>
        </div>
      </div>

      <div className="row">
        <AddTransaction addTransaction={addTransaction} />
        <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} />
        <FinancialSummary transactions={transactions} />
      </div>
    </div>
  );
}

export default App;

