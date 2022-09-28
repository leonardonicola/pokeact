import { ButtonsDiv, Button as Buttons } from "./styles"

export const Button = ({ handleClick, isDisabled }) => {
  return (
    <ButtonsDiv>
      <Buttons disabled={isDisabled === 1} onClick={handleClick}>
        PREV
      </Buttons>
      <Buttons onClick={handleClick}>NEXT</Buttons>
    </ButtonsDiv>
  )
}
