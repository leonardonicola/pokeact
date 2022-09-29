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
    (props.headingsec &&
      css`
        font-size: 1.2em;
      `) ||
    (props.type &&
      css`
        font-size: 1em;
        color: #252525;
        font-weight: bold;
        padding: 10px;
        border-radius: 10px;
      `)}

  ${({ type }) =>
    (type === "GRASS" &&
      css`
        background-color: #a8ef87;
      `) ||
    (type === "POISON" &&
      css`
        background-color: #a33ea1;
      `) ||
    (type === "FIRE" &&
      css`
        background-color: #ee8130;
      `) ||
    (type === "WATER" &&
      css`
        background-color: #92adff;
      `) ||
    (type === "FLYING" &&
      css`
        background-color: #a98ff3;
      `) ||
    (type === "STEEL" &&
      css`
        background-color: #b7b7ce;
      `) ||
    (type === "GROUND" &&
      css`
        background-color: #e2bf65;
      `) ||
    (type === "NORMAL" &&
      css`
        background-color: #a8a77a;
      `) ||
    (type === "PSYCHIC" &&
      css`
        background-color: #f95587;
      `) ||
    (type === "DARK" &&
      css`
        background-color: #705746;
      `) ||
    (type === "FAIRY" &&
      css`
        background-color: #d685ad;
      `) ||
    (type === "DRAGON" &&
      css`
        background-color: #6f35fc;
      `) ||
    (type === "GHOST" &&
      css`
        background-color: #735797;
      `) ||
    (type === "ICE" &&
      css`
        background-color: #96d9d6;
      `) ||
    (type === "ROCK" &&
      css`
        background-color: #b6a136;
      `) ||
    (type === "BUG" &&
      css`
        background-color: #a6b91a;
      `) ||
    (type === "FIGHTHING" &&
      css`
        background-color: #c22e28;
      `) ||
    (type === "ELECTRIC" &&
      css`
        background-color: #f7d02c;
      `)}
`

export const Types = styled.div`
  display: flex;
  gap: 0 20px;
  width: 80%;
  justify-content: center;
`
