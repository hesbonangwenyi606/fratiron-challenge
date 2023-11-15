
import React from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionTable from './components/TransactionTable'
import SearchBar from './components/SearchBar'
import TransactionList from './components/Data'
function App() {
  return (
   <>

   <SearchBar />
   <TransactionForm />
   <TransactionTable />
  <TransactionList/>
  
     </>
  )
}

export default App