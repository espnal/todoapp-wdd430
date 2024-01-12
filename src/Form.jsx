/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import './App.css'

function Form({onSubmit}) {
  const [input, setInput] = useState("")

  const submitFunc = (e) => {
    e.preventDefault
    if(input !== ""){
      return onSubmit(input)
    }
    setInput("")
  }
  return (
    <form className="new-item-form" onSubmit={submitFunc}>
      <div className="form-row">
        <label htmlFor="item">New Item: 
        <input
        id="item"
        type="text"
        value={input}
        onChange={e =>{setInput(e.target.value)}}/></label>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form
