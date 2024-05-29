/* eslint-disable react/prop-types */
import styled from "styled-components"

function TotalSxore({ score }) {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
  </ScoreContainer>
  )
}

export default TotalSxore

const ScoreContainer = styled.div`  
    max-width: 200px;
    text-align: center;

    h1{
        font-size: 70px;
        line-height: 0px;
    }
    p{
        font-size: 20px;
        font-weight: 500;
        /* line-height: 0px; */
    }
`