// src/components/TransactionList.js
import React, { useState, useEffect } from 'react';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/transactions');
        const transactionsData = await response.json();
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {`ID: ${transaction.id}, Description: ${transaction.description}, Amount: ${transaction.amount}, Category: ${transaction.category}`}
          </li>
        ))}
      </ul>
    </div>
  );ar
};

export default TransactionList;
