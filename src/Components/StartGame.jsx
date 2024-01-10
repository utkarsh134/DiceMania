import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'



const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="/Images/dices.png" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>
                    Play Now
                </Button>
            </div>
        </Container>
    )
}

export default StartGame


const Container = styled.div`
 /* max-width: 1180px; */
 /* width: 100vw; */
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 auto;
 height: 100vh ;
 background: #034694;

 .content {

    div{
        padding-left: 40px;
    }

    h1{
        color: white;
        font-size: 96px ;
        white-space: nowrap;

    }

 }

`
    ;

