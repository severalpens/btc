import React from 'react'

export default function FormInitialBalance(props) {
  return (
    <div>
    <label htmlFor="initialBalance">Initial Balance</label>
    <br />
    <input id="initialBalance" name="initialBalance" defaultValue="10000" onChange={e => props.setInitialBalance(e.target.value)}></input>
  </div>
  )
}
