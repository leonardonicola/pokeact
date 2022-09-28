import { PokeList } from "../../components/PokeList"
import { PokeDetails } from "../../components/PokeDetail"
import { Wrapper } from "./styles.js"
import { useState } from "react"

function App() {
  const [id, setId] = useState(1)

  return (
    <Wrapper>
      <PokeList handleCardClick={setId} />
      <PokeDetails pokeId={id} />
    </Wrapper>
  )
}
export default App
