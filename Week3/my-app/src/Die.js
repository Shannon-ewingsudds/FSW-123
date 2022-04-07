import image1 from "./diceRoll/dice1.svg"
import image2 from "./diceRoll/dice2.svg"
import image3 from "./diceRoll/dice3.svg"
import image4 from "./diceRoll/dice4.svg"
import image5 from "./diceRoll/dice5.svg"
import image6 from "./diceRoll/dice6.svg"

function Die({dice}) {
    let pic;
    switch (dice) {
        case 1:
            pic = image1;
            break;
        case 2:
            pic = image2;
            break;
        case 3:
            pic = image3;
            break;
        case 4:
            pic = image4;
            break;
        case 5:
            pic = image5;
            break;

        case 6:
            pic = image6;
            break;
        default:
            break;
    }
    return (
	
        <img width="200" height="200" src={pic} alt="dice"/>
    )
}

export default Die;