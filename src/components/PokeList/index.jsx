import { Wrapper } from "./styles"
import { PokeCard } from "../PokeCard"
import axios from "axios"
import { Button } from "../Button"
import React, { useState, useEffect, useContext, useCallback } from "react"

import { Context } from "../../contexts/AppContext"

export const PokeList = () => {
  const [pokeList, setPokeList] = useState([])
  const context = useContext(Context)

  const handleButtonClick = useCallback(
    (ev) => {
      switch (ev.target.innerText) {
        case "NEXT":
          context.dispatch({ type: "INCREMENT_OFFSET" })
          break
        case "PREV":
          context.dispatch({ type: "DECREMENT_OFFSET" })
          break
        default:
          break
      }
    },
    [context.dispatch]
  )

  useEffect(() => {
    const loadData = () => {
      let endpoints = []
      for (let i = context.state.offset; i < context.state.offset + 6; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => {
          setPokeList(res)
        })
    }
    loadData()
  }, [context.state.offset])

  return (
    <Wrapper>
      <PokeCard pokeList={pokeList} dispatch={context.dispatch} />
      <Button handleClick={handleButtonClick} />
    </Wrapper>
  )
}
