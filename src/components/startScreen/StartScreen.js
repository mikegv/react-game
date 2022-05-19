import React from 'react';
import './StartScreen.css'
import BasicThemeImage from '../../images/basicTheme.PNG'
import SecondThemeImage from '../../images/secondTheme.PNG'
import ThirdThemeImage from '../../images/thirdTheme.PNG'
import Collapsible from '../collapsible/Collapsible'

const StartScreen = (props) => {
    let themeImage = props.theme === 'basic' ? BasicThemeImage : props.theme === 'second' ? SecondThemeImage : ThirdThemeImage
    return (
        <div className='startScreen'>
            <p>Mancala</p>
            <button onClick={()=> props.startGameButtonHandler()} className='startButton'>Start</button>
        <div className='imageContainer'>
            <img src={themeImage} alt='image of theme' width={'300px'} height={'auto'} />
        </div>
        <p>Choose A Color</p>
        <button onClick={() => props.themeClickHandler('basic')} >Blue Stones</button> <button onClick={() => props.themeClickHandler('second')} >Red Stones</button><button onClick={() => props.themeClickHandler('third')} >Purple Stones</button>   
            
        <Collapsible />

        </div>
        )
};

export default StartScreen;