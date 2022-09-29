import { WrapperList, Card, Image, Infos } from "./styles"
import { Text } from "../../styles"
import { Type } from "../Type"
import { toUpperCase } from "../../utils/toUpper"
import React from "react"

export const PokeCard = React.memo(({ pokeList, dispatch }) => {
  const handleCardClick = (pokeId) => {
    dispatch({ type: "CHANGE_ID", payload: pokeId })
  }
  return (
    <WrapperList>
      {pokeList.length > 0 &&
        pokeList.map((poke) => (
          <Card
            key={poke.data.id}
            onClick={() => handleCardClick(poke.data.id)}
          >
            <Image src={poke.data.sprites.front_default} alt={poke.data.name} />
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
  )
})
