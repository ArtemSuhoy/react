import React, { useState, useContext } from "react"
import { InputContext } from "../context"

const InputText = () => {
  const { inputValue, setInputValue } = useContext(InputContext)
  return (
    <input
      className="todo-input"
      value={inputValue}
      onChange={event => setInputValue(event.target.value)}
      maxLength="100"
    />
  )
}

export default InputText
