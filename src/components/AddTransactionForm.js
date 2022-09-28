import React, { useState } from "react";


function AddTransactionForm() {
  const [transactions,setTransactions] = useState([])

  const getField = (e) => {
    setTransactions ({...transactions,[e.target.name]:e.target.value});
// console.log(e.target.value);
  }
  const submission = (e) => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(transactions),
    });
    
    
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(e)=>{submission(e)}}>
        <div className="inline fields">
          <input type="date" name="date"  onChange={getField}/>
          <input type="text" name="description" placeholder="Description"  onChange={getField}/>
          <input type="text" name="category" placeholder="Category" onChange={getField}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={getField} />
        </div>
        <button className="ui button" type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
