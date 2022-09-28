import { Card, Image, Infos, WrapperList, Wrapper } from "./styles"
import { Text } from "../../styles"
import { Type } from "../Type"
import axios from "axios"
import { Button } from "../Button"
import React, { useState, useEffect } from "react"
import { toUpperCase } from "../../utils/toUpper"

export const PokeList = React.memo(({ handleCardClick }) => {
  const [offset, setOffset] = useState(1)
  const [pokeList, setPokeList] = useState([])

  const handleButtonClick = (ev) => {
    switch (ev.target.innerText) {
      case "NEXT":
        setOffset((prev) => prev + 6)
        break
      case "PREV":
        setOffset((prev) => prev - 6)
        break
      default:
        break
    }
  }

  useEffect(() => {
    const loadData = () => {
      let endpoints = []
      for (let i = offset; i < offset + 6; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => {
          setPokeList(res)
        })
    }
    loadData()
  }, [offset])

  return (
    <Wrapper>
      <WrapperList>
        {pokeList.length > 0 &&
          pokeList.map((poke) => (
            <Card
              key={poke.data.id}
              onClick={() => handleCardClick(poke.data.id)}
            >
              <Image
                src={poke.data.sprites.front_default}
                alt={poke.data.name}
              />
              <Infos>
                <Text paragraph>Nº{poke.data.id}</Text>
                <Text heading>{toUpperCase(poke.data.name)}</Text>
                <Type
                  type1={poke.data.types[0].type.name.toUpperCase()}
                  {...(poke.data.types[1]
                    ? { type2: poke.data.types[1].type.name.toUpperCase() }
                    : "")}
                />
              </Infos>
            </Card>
          ))}
      </WrapperList>
      <Button isDisabled={offset} handleClick={handleButtonClick} />
    </Wrapper>
  )
})
