import React, { useState } from "react"
import { Button, Title, InputText } from "."
import { InputContext } from "./context"
import { useTodoAction } from "./HOOKS/useTodoAction"
const Main = () => {
  const { state, dispatch } = useTodoAction()
  const [value, setValue] = useState()
  return (
    <InputContext.Provider value={{ state, dispatch, value, setValue }}>
      <Title />
      <InputText />
      <Button />
    </InputContext.Provider>
  )
}

export default Main
