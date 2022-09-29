import React from "react"
import { WrapperStats, Stat, SingleStat } from "./styles"

export const Stats = React.memo(({ stats }) => {
  return (
    <WrapperStats>
      <Stat>
        <SingleStat stat="hp">HP</SingleStat>
        <SingleStat num>{stats[0].base_stat}</SingleStat>
      </Stat>
      <Stat>
        <SingleStat stat="atk">ATK</SingleStat>
        <SingleStat num>{stats[1].base_stat}</SingleStat>
      </Stat>
      <Stat>
        <SingleStat stat="def">DEF</SingleStat>
        <SingleStat num>{stats[2].base_stat}</SingleStat>
      </Stat>
      <Stat>
        <SingleStat stat="spc">SPC</SingleStat>
        <SingleStat num>{stats[3].base_stat}</SingleStat>
      </Stat>
      <Stat>
        <SingleStat stat="spd">SPD</SingleStat>
        <SingleStat num>{stats[5].base_stat}</SingleStat>
      </Stat>
    </WrapperStats>
  )
})
