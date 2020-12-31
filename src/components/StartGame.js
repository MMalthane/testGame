import React, { useState } from 'react';
import Board from '../components/Board/Board';


function StartGame(state) {
    const [ShowBoard, setShowBoard] = useState(false)
    return (
        <React.Fragment>
            { ShowBoard ? <Board />  : (<button onClick={()=>setShowBoard(true)}>Start Game</button>)                  
        }
        </React.Fragment>
    )
}

export default StartGame;