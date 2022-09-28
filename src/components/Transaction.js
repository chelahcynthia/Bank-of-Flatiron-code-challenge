import React from "react";
import { Button } from "bootstrap";

function Transaction({transaction}) {
  const {id,date,description,category,amount}=transaction

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{date}</td>
       <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="btn btn-success">Edit</button>
{" "}        
      
        <button className="btn btn-danger">Discard</button>
      </td>
    </tr>
  );
}

export default Transaction;
