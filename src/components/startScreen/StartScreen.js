import React from 'react';
import './StartScreen.css'
import BasicThemeImage from '../../images/basicTheme.PNG'
import SecondThemeImage from '../../images/secondTheme.PNG'
import ThirdThemeImage from '../../images/thirdTheme.PNG'

const StartScreen = (props) => {
    let themeImage = props.theme === 'basic' ? BasicThemeImage : props.theme === 'second' ? SecondThemeImage : ThirdThemeImage
    return (
        <div className='startScreen'>
            <p>Mancala</p>
            <button onClick={()=> props.startGameButtonHandler()} >Start</button>
        <div className='imageContainer'>
        <img src={themeImage} alt='image of theme' width={'300px'} height={'auto'} />
        </div>
        
        <button onClick={() => props.themeClickHandler('basic')} >Basic Theme</button> <button onClick={() => props.themeClickHandler('second')} >Second Theme</button><button onClick={() => props.themeClickHandler('third')} >Third Theme</button>   
        
        {/* how to play, insert a collapsible here */}
        <div>
            how to play mancala
            -rules 
            -how to win
            -close [X]
        </div>
        </div>
        )
};

export default StartScreen;