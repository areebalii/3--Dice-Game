/* eslint-disable react/prop-types */
import styled from "styled-components"

function NumberSelector({ selectedNumber, setSelectedNumber, error, setError }) {
    const arrNumber = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }

    return (
        <NumberSelectorContainer>
        <p className="error">{error}</p>
            <div className="flex">
                {arrNumber.map((value, index) => (
                    <Box
                        isSelected={value === selectedNumber}
                        key={index}
                        onClick={() => numberSelectorHandler(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 18px;
        font-weight: 700;
    }

    .error{
        color: red;
    }
    @media (max-width: 768px) {
        .flex{
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
        }
    }

`

const Box = styled.div`
    height: 62px;
    width: 62px;
    cursor: pointer;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(porps) => porps.isSelected ? "black" : "white"};
    color: ${(porps) => porps.isSelected ? "white" : "black"};
`