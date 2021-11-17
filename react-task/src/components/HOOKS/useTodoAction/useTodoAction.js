import React, { useReducer } from "react"
import { reducer } from "./reducer"

const useTodoAction = () => {
  const [state, dispatch] = useReducer(reducer, { massive: [] })
  return { state, dispatch }
}

export default useTodoAction
