import React, { useContext, useState } from "react"
import { TodoList } from "."
import { InputContext } from "./context"

const { uuid } = require("uuidv4")

const Button = () => {
  const { value, state, dispatch } = useContext(InputContext)

  const shortUUID = () => {
    return uuid().slice(0, 4)
  }

  const addData = () => {
    dispatch({
      type: "ADD",
      payload: { id: shortUUID(), text: value },
    })
  }

  const deleteData = () => {
    dispatch({
      type: "DELETE",
      payload: { id: shortUUID(), text: value },
    })
  }

  return (
    <div>
      <button onClick={addData}>Add</button>
      <button onClick={deleteData}>Add</button>
      <div>
        {state.massive?.map((item, i) => (
          <p key={i}>{item.text}</p>
        ))}
      </div>
    </div>
  )
}

export default Button
