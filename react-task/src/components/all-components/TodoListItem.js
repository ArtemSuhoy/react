import React, { useContext } from "react"
import { InputContext } from "../context"
import { ButtonDelete } from "."
import "../styles/index.css"

const TodoListItem = () => {
  const { state, dispatch, deleteData } = useContext(InputContext)
  return (
    <>
      {state.massive?.map((item, i) => {
        return item.text !== undefined &&
          item.text.split(" ").join("") !== "" ? (
          <div>
            <li key={i} id={item.id} className="d-flex pb-xl">
              <div className="d-flex ai-center pr-md">
                <ButtonDelete id={item.id} />
              </div>
              <div className="flex-grow-auto border-b-1">{item.text}</div>
            </li>
          </div>
        ) : (
          false
        )
      })}
    </>
  )
}

export default TodoListItem
