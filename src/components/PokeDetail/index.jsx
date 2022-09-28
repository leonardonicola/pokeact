import axios from "axios"
import React, { useEffect, useState } from "react"
import { Type } from "../Type"
import {
  Wrapper,
  Image,
  WrapperInfos,
  Info,
  BasicInfos,
  WrapperStats,
  Stat,
  SingleStat,
} from "./styles"
import { Text } from "../../styles"
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
            ) }
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
          <WrapperStats>
            <Stat>
              <SingleStat stat="hp">HP</SingleStat>
              <SingleStat num>{poke.stats[0].base_stat}</SingleStat>
            </Stat>
            <Stat>
              <SingleStat stat="atk">ATK</SingleStat>
              <SingleStat num>{poke.stats[1].base_stat}</SingleStat>
            </Stat>
            <Stat>
              <SingleStat stat="def">DEF</SingleStat>
              <SingleStat num>{poke.stats[2].base_stat}</SingleStat>
            </Stat>
            <Stat>
              <SingleStat stat="spc">SPC</SingleStat>
              <SingleStat num>{poke.stats[3].base_stat}</SingleStat>
            </Stat>
            <Stat>
              <SingleStat stat="spd">SPD</SingleStat>
              <SingleStat num>{poke.stats[5].base_stat}</SingleStat>
            </Stat>
          </WrapperStats>
        </>
      )}
    </Wrapper>
  )
})
