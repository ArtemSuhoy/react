import React, { useContext, useState } from "react"
import { TodoList } from ".."
import { InputContext } from "../context"

const { uuid } = require("uuidv4")

const setShortUUID = () => {
  return uuid().slice(0, 4)
}

const shortIdArray = [...Array(20)].map(item => setShortUUID())

let i = 0

const ButtonAdd = ({ styles }) => {
  const { inputValue, setInputValue, state, dispatch } =
    useContext(InputContext)

  const addData = () => {
    dispatch({
      type: "ADD",
      payload: { id: `id-${(i += 1)}`, text: inputValue },
    })

    setInputValue("")
  }

  return (
    <div className="button-add d-flex jc-center ai-center" onClick={addData}>
      <div>✚</div>
    </div>
  )
}

export default ButtonAdd
