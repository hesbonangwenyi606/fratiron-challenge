// src/components/TransactionTable.js
import React from 'react';
import PropTypes from 'prop-types';

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction Table</h2>
      {transactions && transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.array,
};

// Set a default value for transactions (empty array)
TransactionTable.defaultProps = {
  transactions: [],
};

export default TransactionTable;
