import styled from "styled-components"

export const ButtonsDiv = styled.div``

export const Button = styled.button`
  margin: 10px;
  padding: 20px 40px;
  border: 0;
  border-radius: 10px;
  background-color: #252525;
  color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
  :disabled {
    background-color: #808080;
  }
  :hover {
    background-color: #000;
  }
  :hover:disabled {
    background-color: #808080;
  }
`
