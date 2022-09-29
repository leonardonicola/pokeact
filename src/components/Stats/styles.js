import styled, { css } from "styled-components"

export const WrapperStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding: 30px;
  justify-content: space-between;
  gap: 10px;
`

export const Stat = styled.div`
  text-align: center;
  background-color: #eff1f7;
  padding: 0 2px 15px 2px;
  border-radius: 15px;
`

export const SingleStat = styled.div`
  ${(props) =>
    props.stat &&
    css`
      padding: 9px;
      border-radius: 15px;
      color: #fff;
      margin-bottom: 7px;
    `}
  ${({ stat }) =>
    (stat === "hp" &&
      css`
        background-color: #df2140;
      `) ||
    (stat === "atk" &&
      css`
        background-color: #fd9952;
      `) ||
    (stat === "def" &&
      css`
        background-color: #fedc51;
      `) ||
    (stat === "spc" &&
      css`
        background-color: #fb94a8;
      `) ||
    (stat === "spd" &&
      css`
        background-color: #85ddff;
      `)}

    font-weight: bold;
`
