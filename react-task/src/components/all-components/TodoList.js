import React from "react"
import { TodoListItem } from "."
import { InputText, ButtonAdd } from "."

const TodoList = () => {
  return (
    <ul className="p-0 pl-xl">
      <TodoListItem />
      <li className="d-flex ai-center">
        <div className="pr-md">
          <ButtonAdd />
        </div>
        <div className="width-100">
          <InputText />
        </div>
      </li>
    </ul>
  )
}

export default TodoList
