import {Component} from 'react'
import {
  GradientContainer,
  ColorBox,
  ColorSelectionBox,
  GenerateBtn,
  ColorPicker,
  ButtonsBox,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: 'top',
    setColorOne: '#8ae323',
    setColorTwo: '#014f7b',
    setDirection: 'top',
  }

  setFirstColor = event => {
    this.setState({firstColor: event.target.value})

    const {firstColor} = this.state
  }

  setSecondColor = event => {
    this.setState({secondColor: event.target.value})

    const {secondColor} = this.state
  }

  generateBackground = () => {
    const {firstColor, secondColor, direction} = this.state
    console.log(firstColor, secondColor)
    this.setState({
      setColorOne: firstColor,
      setColorTwo: secondColor,
      setDirection: direction,
    })
  }

  setDirectionBtn = value => {
    this.setState({direction: value})
  }

  render() {
    const {
      firstColor,
      secondColor,
      direction,
      setColorOne,
      setColorTwo,
      setDirection,
    } = this.state
    console.log(firstColor, secondColor, direction)
    return (
      <GradientContainer
        direction={setDirection}
        firstColor={setColorOne}
        secondColor={setColorTwo}
        data-testid="gradientGenerator"
      >
        <div>
          <h1>Generate a CSS Color Gradient</h1>
          <p>Choose Direction</p>
          <ButtonsBox>
            {gradientDirectionsList.map(item => (
              <GradientDirectionItem
                key={item.directionId}
                data={item}
                setDirectionBtn={this.setDirectionBtn}
                currentDirection={direction}
              />
            ))}
          </ButtonsBox>
          <p>Pick the Colors</p>
          <ColorSelectionBox>
            <ColorBox>
              <p>{firstColor}</p>
              <ColorPicker
                type="color"
                value={firstColor}
                onChange={this.setFirstColor}
              />
            </ColorBox>
            <ColorBox>
              <p>{secondColor}</p>
              <ColorPicker
                type="color"
                value={secondColor}
                onChange={this.setSecondColor}
              />
            </ColorBox>
          </ColorSelectionBox>
          <GenerateBtn type="button" onClick={this.generateBackground}>
            Generate
          </GenerateBtn>
        </div>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
