import React from 'react';
import './StartScreen.css'
import BasicThemeImage from '../../images/basicTheme.PNG'
import SecondThemeImage from '../../images/secondTheme.PNG'
import ThirdThemeImage from '../../images/thirdTheme.PNG'
import Collapsible from '../collapsible/Collapsible'

import NaturePreview from '../../images/natureBackgroundPreview.PNG'
import SpacePreview from '../../images/spaceBackgroundPreview.PNG'

const StartScreen = (props) => {
    let themeImage = props.theme === 'basic' ? BasicThemeImage : props.theme === 'second' ? SecondThemeImage : ThirdThemeImage
    let backgroundImage = props.backgroundImage === 'img1' ? NaturePreview : SpacePreview
    return (
        <div className='startScreen'>
            <div className='titleArea'>
                <h1 className='titleText back'>Mancala</h1>
                <h1 className='titleText front'>Mancala</h1>
            </div>
            <button onClick={() => props.startGameButtonHandler()} className='startButton'>Start</button>


            <div className='themeChooserArea'>
                <div className='themeChooser'>
                <div className='imageContainer'>
                <img src={themeImage} alt='image of theme' width={'300px'} height={'auto'} />
            </div>
                    <p>Choose A Color</p>
                    <button onClick={() => props.themeClickHandler('basic')} >Blue Stones</button> <button onClick={() => props.themeClickHandler('second')} >Red Stones</button><button onClick={() => props.themeClickHandler('third')} >Purple Stones</button>
                </div>
                <div className='themeChooser'>
                <div className='imageContainer'>
                <img src={backgroundImage} alt='image of theme' width={'300px'} height={'auto'} />
            </div>
                    <p>Choose A Background</p>
                    <button onClick={() => props.backgroundClickHandler('img1')} >Nature Background</button> <button onClick={() => props.backgroundClickHandler('img2')} >Space Background</button><button onClick={() => props.backgroundClickHandler('img2')} >Something Else</button>
                </div>
            </div>



            <Collapsible />

        </div>
    )
};

export default StartScreen;