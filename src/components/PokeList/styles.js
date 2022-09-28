import styled from "styled-components"
export const WrapperList = styled.div`
  display: grid;
  margin: 70px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  width: 70%;
  gap: 80px;
`

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 250px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  transition: all 0.2s ease;
  cursor: default;
  :hover {
    transform: scale(1.02);
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`

export const Image = styled.img`
  position: absolute;
  top: -70px;
  width: 50%;
  max-width: 150px;
`

export const Infos = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  bottom: 0;
  width: 100%;
`
