import React, { useState } from "react";
import "../App.css";

const AddTransaction = ({ addTransaction }) => {
<<<<<<< HEAD
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount.replace(/[$]/g, ''));
=======
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(""); // Start with an empty string
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove the dollar signs before parsing
    const numericAmount = parseFloat(amount.replace(/[$]/g, ""));
>>>>>>> cbcee3706da9280ff25c0fa289875ae655887368
    if (category && !isNaN(numericAmount) && description) {
      addTransaction({ type, category, amount: numericAmount, description });
      setCategory("");
      setAmount("");
      setDescription("");
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;

   
    if (/^\$?\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="w-full h-full px-8">
      <h3 className="text-3xl font-bold py-8">Add Transaction</h3>

      <div className="transaction-content">
        <div className="transaction-type">
          <p className="my-4">Select type</p>
          <div className="income-expense-buttons">
            <button className="income-button" onClick={() => setType("Income")}>
              Income
            </button>
            <button
              className="expense-button"
              onClick={() => setType("Expense")}
            >
              Expense
            </button>
          </div>
        </div>

        <div className="transaction-form">
          <form onSubmit={handleSubmit}>
            <div className="cat_label">
              <label>Category</label>
            </div>
            <div className="Category_input">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {type === "Income" ? (
                  <>
                    <option value="marketing">marketing</option>
                    <option value="Hotel_Buisness">Hotel_Buisness</option>
                    <option value="Rent">Rent</option>
                    <option value="Web_dev_income">Web_dev_income</option>
                  </>
                ) : (
                  <>
                    <option value="outing">outing</option>
                    <option value="party">party</option>
                    <option value="Entertain">Entertain</option>
                    <option value="utilities">utilities</option>
                  </>
                )}
              </select>
            </div>

            <br />
            <div className="Amount_label">
              <label>Amount</label>
            </div>
            <div className="Amount_input">
              <input
                type="text" // Allow flexible input
                value={amount}
                onChange={handleAmountChange}
                placeholder="$$$" // More straightforward placeholder
              />
            </div>
            <div className="Desc_label">
              <label>Description</label>
            </div>
            <div className="Desc_input">
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter a Description"
              />
            </div>
            <br />

            <div className="add-transaction-button-container">
              <button type="submit">Add Transaction</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
