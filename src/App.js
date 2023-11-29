// App.js

import React, { useEffect, useState } from 'react';
import TransactionTable from './components/TransactionTable';  // Update the path
import TransactionForm from './components/TransactionForm';  // Update the path
import SearchBar from './components/SearchBar';  // Update the path

const App = () => {
  // State to manage transactions
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('https://code-qnow.onrender.com/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    
  };

  // Function to search transactions
  const handleSearch = (searchTerm) => {
    // Implement your search logic here and update the state accordingly
  };

  return (
    <div>
      <h1>Bank Transactions App</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionForm onAddTransaction={handleAddTransaction} />      
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default App;
