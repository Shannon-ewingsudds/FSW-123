import {useState} from "react";
import Die from './Die.js';


export default function RollDice() {
    const randomDice = () => {
        return Math.floor(Math.random()*(6) + 1)
    }

    const [diceNum1, setDice1] = useState(randomDice)
    const [diceNum2, setDice2] = useState(randomDice)

    const randomDie = () => {
        setDice1(randomDice)
        setDice2(randomDice)
    }

    return (
        <>
            <div id ="dice">
                <Die 
                    dice = {diceNum1}
                />
                <Die
                    dice = {diceNum2}
                />
            </div>
            <button onClick={randomDie}> Roll Dice </button>  
        </>
    )
}