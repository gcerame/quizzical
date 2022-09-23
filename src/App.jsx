import StartScreen from "./Components/StartScreen";
import Game from "./Components/Game";
import React from "react";
import {useState} from "react";

export default function App() {
    const [gameStarted, setGameStarted] = React.useState(false);

    return (
        <div className="App">
            {gameStarted ? <Game/> : <StartScreen/>}
        </div>
    );
}

