import styled, { css } from "styled-components"

export const Text = styled.h1`
  ${(props) =>
    (props.paragraph &&
      css`
        font-size: 1em;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      `) ||
    (props.heading &&
      css`
        font-size: 1.5em;
      `) ||
    (props.type &&
      css`
        font-size: 1em;

        font-weight: bold;
        padding: 10px;
        border-radius: 10px;
      `)}

  ${({ type }) =>
    (type === "grass" &&
      css`
        background-color: #a8ef87;
      `) ||
    (type === "poison" &&
      css`
        background-color: #a33ea1;
      `) ||
    (type === "fire" &&
      css`
        background-color: #ee8130;
      `) ||
    (type === "water" &&
      css`
        background-color: #92adff;
      `) ||
    (type === "flying" &&
      css`
        background-color: #a98ff3;
      `) ||
    (type === "steel" &&
      css`
        background-color: #b7b7ce;
      `) ||
    (type === "ground" &&
      css`
        background-color: #e2bf65;
      `) ||
    (type === "normal" &&
      css`
        background-color: #a8a77a;
      `) ||
    (type === "psychic" &&
      css`
        background-color: #f95587;
      `) ||
    (type === "dark" &&
      css`
        background-color: #705746;
      `) ||
    (type === "fairy" &&
      css`
        background-color: #d685ad;
      `) ||
    (type === "dragon" &&
      css`
        background-color: #6f35fc;
      `) ||
    (type === "ghost" &&
      css`
        background-color: #735797;
      `) ||
    (type === "ice" &&
      css`
        background-color: #96d9d6;
      `) ||
    (type === "rock" &&
      css`
        background-color: #b6a136;
      `) ||
    (type === "bug" &&
      css`
        background-color: #a6b91a;
      `) ||
    (type === "fighting" &&
      css`
        background-color: #c22e28;
      `) ||
    (type === "electric" &&
      css`
        background-color: #f7d02c;
      `)}
`

export const Types = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`
