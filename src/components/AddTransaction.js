import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';



const AddTransact = () => {
    const [text, setText]= useState();
    const [amount,setAmount]= useState();
    const { addTransaction} =useContext(GlobalContext);
    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction= {
         
           id: Math.floor(Math.random()*1000000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

  return (
    <div>
      <h3> Add new transaction</h3>
      <form onSubmit={onSubmit} >
        <div className = "form-control">
            <label htmlfor= "text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." />
        </div>
        <div className ="form-control">
            <label htmlfor="amount"
            >Amount <br />
            (negative-expense, positive-income)</label
            >
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransact;
