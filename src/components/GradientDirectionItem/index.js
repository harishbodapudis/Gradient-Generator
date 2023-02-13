// Write your code here
import {DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, setDirectionBtn, currentDirection} = props
  const {displayText, value, directionId} = data
  console.log(currentDirection)
  const setDirectionBtnValue = () => {
    setDirectionBtn(value)
  }

  return (
    <li>
      <DirectionBtn
        type="button"
        onClick={setDirectionBtnValue}
        direction={value}
        currentDirection={currentDirection}
      >
        {displayText}
      </DirectionBtn>
    </li>
  )
}

export default GradientDirectionItem
