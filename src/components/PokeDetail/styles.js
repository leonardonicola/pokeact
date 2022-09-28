import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25%;
  max-width: 40%;
  height: fit-content;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
  margin: 40px;
  margin-left: 0;
`

export const Image = styled.img`
  width: 40%;
  transform: scale(1.3);
`

export const BasicInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const WrapperInfos = styled.div`
  display: grid;
  width: 90%;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  justify-items: center;
  margin: 15px;
`
export const Info = styled.span`
  ${(props) =>
    props.ability &&
    css`
      border: 0.5px solid #252525cc;
    `}
  background-color: #eff1f7;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  text-align: center;
`
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
        background-color: #DF2140;
      `) ||
    (stat === "atk" &&
      css`
        background-color: #FD9952;
      `)||
    (stat === "def" &&
      css`
        background-color: #FEDC51;
      `)||
    (stat === "spc" &&
      css`
        background-color: #FB94A8;
      `)
    ||
    (stat === "spd" &&
      css`
        background-color: #85DDFF;
      `)}

    font-weight: bold;
`
