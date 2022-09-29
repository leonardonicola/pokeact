import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const globalState = {
  offset: 1,
  id: 1,
}

export const Context = createContext()
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
