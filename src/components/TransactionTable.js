import React from 'react';

const TransactionTable = ({ transactions }) => {
  
  return (
    <div className='transaction-div'>
      <h2 className='transaction-header'>Transaction Table</h2>
      <table className="transaction-table">
        <thead>
          <tr>
          <th className="table-header">ID</th>
            <th className="table-header">Description</th>
            <th className="table-header">Category</th>
            <th className="table-header">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="table-data">{transaction.id}</td>
              <td className="table-data">{transaction.date}</td>
              <td className="table-data">{transaction.description}</td>
              <td className="table-data">{transaction.category}</td>
              <td className="table-data">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
