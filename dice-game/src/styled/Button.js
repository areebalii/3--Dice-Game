import styled from "styled-components"

export const Button = styled.button`
    align-items: center;
    padding: 10px 18px;
    width: 220px;
    background: black;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: .3s background ease-in-out;

    &:hover{
        background-color: white;
        color: black;
        border: 2px solid black;
    }
`
export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

        &:hover{
         background-color: black;
         color: white;
         border: 2px solid transparent;
    }
`