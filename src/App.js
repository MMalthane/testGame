import React from 'react';  
import {useSpring, animated} from 'react-spring' 
import './App.css';
import StartGame from './components/StartGame';


function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0.2}})


  return (
  
     <div className="container">
      <div className="row header">
    <animated.h1 style={props}>Tic-Toc-Tic Game</animated.h1>
      </div>
      <div className="content"><animated.div style={props}>< StartGame/></animated.div></div>
      </div>
     
  );
}

export default App;
