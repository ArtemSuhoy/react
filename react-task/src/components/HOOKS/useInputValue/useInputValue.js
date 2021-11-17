import React, { useState } from "react"

const useInputValue = () => {
  const [inputValue, setInputValue] = useState()
  return { inputValue, setInputValue }
}

export default useInputValue
