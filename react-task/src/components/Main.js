import React, { useState } from "react"
import "./styles/Root.css"
import { Wrapper } from "."
import { ButtonAdd, Title, InputText, TodoList } from "./all-components"
import { InputContext } from "./context"
import { useTodoAction } from "./HOOKS"
import { useInputValue } from "./HOOKS"

const Main = () => {
  const { state, dispatch } = useTodoAction()
  const { inputValue, setInputValue } = useInputValue()
  return (
    <InputContext.Provider
      value={{ state, dispatch, inputValue, setInputValue }}>
      <Wrapper
        bgColor="color-gray-darken2"
        width="width-40"
        border="border-r-2"></Wrapper>

      <Wrapper width="width-60">
        <Title text="All" />
        <TodoList />
      </Wrapper>
    </InputContext.Provider>
  )
}

export default Main
