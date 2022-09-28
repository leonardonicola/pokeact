import { Wrapper, Image } from "./styles"
import { Text, Types } from "../../styles"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { toUpperCase } from "../../utils/toUpper"

export const PokeDetails = React.memo(({ pokeId }) => {
  const [poke, setPoke] = useState({})

  useEffect(() => {
    const loadData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then((res) => setPoke(res.data))
    }
    loadData()
  }, [pokeId])

  return (
    <Wrapper>
      {poke.name && (
        <>
          <Image src={poke.sprites.front_default} />
          <Text paragraph>Nº{poke.id}</Text>
          <Text heading>{toUpperCase(poke.name)}</Text>
          {(!!poke.types[1] && (
            <Types>
              <Text type={poke.types[0].type.name}>
                {poke.types[0].type.name}
              </Text>
              <Text type={poke.types[1].type.name}>
                {poke.types[1].type.name}
              </Text>
            </Types>
          )) || (
            <Text type={poke.types[0].type.name}>
              {poke.types[0].type.name}
            </Text>
          )}
        </>
      )}
    </Wrapper>
  )
})
