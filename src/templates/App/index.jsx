import { PokeList } from "../../components/PokeList"
import { PokeDetails } from "../../components/PokeDetail"
import { Wrapper } from "./styles.js"
import { AppContext } from "../../contexts/AppContext"
function App() {
  return (
    <AppContext>
      <Wrapper>
        <PokeList />
        <PokeDetails />
      </Wrapper>
    </AppContext>
  )
}
export default App
