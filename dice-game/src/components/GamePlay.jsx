import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalSxore from "./TotalSxore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [score, setScore] = useState(0)
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number")
      return
    }


    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice(() => randomNumber)

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 1)
    }

    setSelectedNumber(undefined)
  }

  const resetGame = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top-section">
        <TotalSxore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btn">
        <OutlineButton onClick={resetGame}>Reset</OutlineButton>
        <Button
        onClick={() => setShowRules((prev) => !prev)}
        >{
          showRules ? "Hide" : "Show"
        } Show Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
max-width: 1180px;
margin: 0 auto;
/* padding-top: 50px; */
  .top-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 767px) {
    .top-section{
      flex-direction: column;
    }
  }
`
