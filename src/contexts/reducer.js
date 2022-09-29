export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_OFFSET": {
      return { ...state, offset: state.offset + 10 }
    }
    case "DECREMENT_OFFSET": {
      return { ...state, offset: state.offset - 10 }
    }
    case "CHANGE_ID": {
      return { ...state, id: action.payload }
    }
  }
  return { ...state }
}
