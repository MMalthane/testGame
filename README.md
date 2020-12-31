# testGame
Game - Play tic-toe-tic

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


---------------------------------------------------------------------------------------------------------------

// Steps followed for the Project - Tix-Tac-toe
-----------------------------------------------
1. Setup React App
2. Create Componenets
3. Setup the Store
4. Start the Gaming Logic

Game Features
-------------
pass and play
2 player Game
player - X and Player - O
both players are playing on same computer
At the end one player wins or draw

Componenets
-----------

Board
  Square
   Cross
   Zero


Store
 ---------
 Reducer
 { 
Board
  Initial : [null, null, null, null,null,null,null,null,null],
Player:{ 
  P1 : X,
  P2 : O,
  Turn : P1,
  },
Result:{ 
  Win: null,
  draw: false
  }
 }
