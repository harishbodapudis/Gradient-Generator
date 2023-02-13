// Style your elements here
import styled from 'styled-components'

export const DirectionBtn = styled.button`
  background-color: #ffffff;
  color: #1e293b;
  border: 0px;
  opacity: ${props => (props.direction === props.currentDirection ? 1 : 0.5)};
  margin-right: 5px;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
`
