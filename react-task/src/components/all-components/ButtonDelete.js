import React, { useContext } from "react"
import { InputContext } from "../context"
import "../styles/index.css"

const ButtonDelete = ({ id }) => {
  const { dispatch } = useContext(InputContext)
  const deleteData = i => {
    return dispatch({
      type: "DELETE",
      payload: i,
    })
  }

  return (
    <button className="round-button" onClick={() => deleteData(id)}></button>
  )
}

export default ButtonDelete
