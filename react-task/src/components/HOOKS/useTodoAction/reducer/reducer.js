const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, massive: [...state.massive, action.payload] }
    case "DELETE": (
      
    )
    default:
      return state
  }
}

export default reducer
