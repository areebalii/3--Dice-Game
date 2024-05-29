/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from "styled-components"
import { Button } from "../styled/Button"

function StartGame({ toggle }) {
    return (
        <>
            <Container>
                <div>
                    <img src='/images/dicess.png' />
                </div>
                <div className='content'>
                    <h1>Dice Game</h1>
                    <Button onClick={toggle} >Play Now</Button>
                </div>
            </Container>
        </>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;  
    margin: 0 auto;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
       div img{
            height: 300px;
            width: 300px;
        }  
    }
    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
        
    }
`
