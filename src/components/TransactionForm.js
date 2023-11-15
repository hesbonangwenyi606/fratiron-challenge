// src/components/TransactionForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description && amount && category) {
      const newTransaction = {
        id: uuidv4(), // Use v4 directly from uuid
        description,
        amount: parseFloat(amount).toFixed(2),
        category,
      };

      onAddTransaction(newTransaction);

      setDescription('');
      setAmount('');
      setCategory('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

TransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default TransactionForm;
