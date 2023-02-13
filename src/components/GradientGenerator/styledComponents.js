// Style your elements here

import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ColorSelectionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 50%;
  margin: auto;
`
export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const GenerateBtn = styled.button`
  margin: 20px auto;
  background-color: #00c9b7;
  width: 100px;
  color: #000000;
  padding: 10px 0px;
  border-radius: 5px;
  cursor: pointer;
  border: 0px;
`
export const ColorPicker = styled.input`
  border: 0px;
  background-color: transparent;
  width: 80px;
  height: 35px;
`
export const ButtonsBox = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`
