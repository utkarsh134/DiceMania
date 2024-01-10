
import styled from 'styled-components';
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice';
import { Button } from '../styled/Button';
import { OutlineButton } from '../styled/Button';

import Rules from './Rules';

import { useState } from 'react';

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);

    const [score, setScore] = useState(0);
    const [error, setError] = useState("");

    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        let randomnum = Math.random() * (max - min);
        return (Math.floor(randomnum + min));

    }

    const rollDice = () => {

        if (!selectedNumber) {
            setError("You have not selected any number")
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - randomNumber);
        }

        setSelectedNumber(undefined);
    }


    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className='btns'>
                <OutlineButton
                    onClick={resetScore}
                >Reset</OutlineButton>
                <Button
                    onClick={() => setShowRules((prev) => !prev)}
                > {showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    background: #c0e2ff;
    min-height: 100vh;
   .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   }

    .btns{
        gap: 10px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

   
`;