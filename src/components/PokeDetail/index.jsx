import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Type } from "../Type"
import { Wrapper, Image, WrapperInfos, Info, BasicInfos } from "./styles"
import { Stats } from "../Stats"
import { Text } from "../../styles"
import { toUpperCase } from "../../utils/toUpper"
import { Context } from "../../contexts/AppContext"

export const PokeDetails = () => {
  const context = useContext(Context)
  const [poke, setPoke] = useState({})

  useEffect(() => {
    const loadData = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${context.state.id}`)
        .then((res) => setPoke(res.data))
    }
    loadData()
  }, [context.state.id])

  return (
    <Wrapper>
      {poke.name && (
        <>
          <Image src={poke.sprites.front_default} alt={poke.name} />
          <Text paragraph>#{poke.id}</Text>
          <Text heading>{toUpperCase(poke.name)}</Text>
          <Type
            type1={poke.types[0].type.name.toUpperCase()}
            {...(poke.types[1]
              ? { type2: poke.types[1].type.name.toUpperCase() }
              : "")}
          />
          <Text headingsec>ABILITIES</Text>
          <WrapperInfos>
            <Info ability>{toUpperCase(poke.abilities[0].ability.name)}</Info>
            {poke.abilities[1] && (
              <Info ability>{toUpperCase(poke.abilities[1].ability.name)}</Info>
            )}
          </WrapperInfos>
          <WrapperInfos>
            <BasicInfos>
              <Text headingsec>Weight</Text>
              <Info>{poke.weight}lbs</Info>
            </BasicInfos>
            <BasicInfos>
              <Text headingsec>Height</Text>
              <Info>{poke.height}m</Info>
            </BasicInfos>
            <BasicInfos>
              <Text headingsec>Base EXP</Text>
              <Info>{poke.base_experience}</Info>
            </BasicInfos>
          </WrapperInfos>
          <Stats stats={poke.stats} />
        </>
      )}
    </Wrapper>
  )
}
