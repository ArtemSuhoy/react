import React, { useState, useContext } from "react"
import { InputContext } from "./context"

const InputText = () => {
  const { value, setValue } = useContext(InputContext)
  return (
    <div>
      <input
        placeholder="title..."
        onChange={event => setValue(event.target.value)}
      />
      <p>Text {value}</p>
    </div>
  )
}

export default InputText
