/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"

function RollDice({ rollDice, currentDice }) {


  return (
    <DiceContainer>
        <div className="dice"
        onClick={rollDice}
        >
            <img src={`/images/dice/dice_${currentDice}.jpg`} alt="Dice 1" />
        </div>
        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: 150px;
        width: 150px;
    }

    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`