import React, {useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const [text,setText]=useState('')
    const [amount,setAmount]=useState()
    const {addTransaction}=useContext(GlobalContext)

    const onSubmit=(e)=>{
      e.preventDefault()

      const newTransaction={
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount
       }

       addTransaction(newTransaction)
    }

  return (
    <>
      <h3>Add new transactions</h3>
      <form onSubmit={onSubmit}>

        <div className="form-control">
            <label for='text'>text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter text..' />
        </div>

        <div className="form-control">
            <label for="amount">
                amount
                <br/>
                (negative - expense,positive - income)
            </label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='enter amount...' />
        </div>

        <button   className='btn'>Add Transaction</button>

      </form>
    </>
  )
}

export default AddTransaction
