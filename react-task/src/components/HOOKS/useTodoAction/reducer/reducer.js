const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, massive: [...state.massive, action.payload] }
    case "DELETE":
      return {
        ...state,
        massive: [
          ...state.massive.filter((item, i) => item.id !== action.payload),
        ],
      }
    default:
      return state
  }
}

export default reducer
