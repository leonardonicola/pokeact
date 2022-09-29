import { useContext } from "react"
import { Context } from "../../contexts/AppContext"
import { ButtonsDiv, Button as Buttons } from "./styles"

export const Button = ({ handleClick }) => {
  const context = useContext(Context)
  return (
    <ButtonsDiv>
      <Buttons disabled={context.state.offset === 1} onClick={handleClick}>
        PREV
      </Buttons>
      <Buttons onClick={handleClick}>NEXT</Buttons>
    </ButtonsDiv>
  )
}
