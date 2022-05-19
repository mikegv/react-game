import React, { useState } from 'react';
import './Collapsible.css'


const Collapsible = () => {
    const [collapsed, setCollapsed] = useState(true)
    const clickHandler = () => setCollapsed(() => !collapsed)
    let collapseClass = collapsed ? 'collapsableArea' : 'collapsableArea showCollapsableArea'
    let collapseButtonClass = collapsed ? 'openButton' : 'openButton closeButton'
    return (
        <div>
            <div className='topOfCollapsible' >
            <button className={collapseButtonClass} onClick={clickHandler}>
                {collapsed ? <p className='closeX'>How To Play</p> : null}

                {!collapsed ? <p className='closeX'>[X]</p> : null}

            </button>
            </div>
           
            <div className={collapseClass}>
                <p>
                    The game board is made of 2 rows of 6 small holes known as “pockets”, and large holes on opposite ends called “mancalas” or “stores”.
                    Each player has 6 pockets directly in front of them and a store to their right.
                </p>

                <h2>
                    Objective
                </h2>

                <p>
                    The object of this game is to see which player can get the most stones into their store.
                </p>



                <h2>Gameplay</h2>
                <p>One player will start the game by picking any pocket containing stones from their own side.</p>
                
                <p>
                The player will remove all the stones from that pocket, and deposit one stone at a time into neighboring pockets going counter-clockwise until the stones run out.
                If a player encounters their own store, a stone is deposited in it.
                </p>
                <p>
                If there are enough stones to go past the player’s own store, stones are deposited continuing on the other side’s pockets. However, if they encounter the other player’s store, that store is skipped over.
                </p>
                <p>
                If the last stone is deposited in the player’s own store, the player gets another turn.
                If the last stone is placed in an empty pocket on the player’s own side, the player takes this stone as well as the other player’s stones across from the empty pocket landed in, and places them in their own store.
                </p>
                <h2>
                Winning the Game
                </h2>
                <p>When all six pockets on one side are emptied the game ends. Each player will count the number of stones in their store. The player who has the most stones in their store wins.
                </p>
            </div>

        </div>
    );
};

export default Collapsible;