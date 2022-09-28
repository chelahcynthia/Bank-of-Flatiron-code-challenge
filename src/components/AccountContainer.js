import React, { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import {useState} from "react"

function AccountContainer() {
  const [transactions,setTransaction]=useState([])
  
  function handleTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((res)=>{return res.json()})
    .then ((data)=>setTransaction(data))
  }
useEffect(()=>{
  handleTransactions();
},[])
//  search bar 

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
