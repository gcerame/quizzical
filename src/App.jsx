import StartScreen from "./Components/StartScreen";
import Game from "./Components/Game";
import React from "react";
import {useState} from "react";

export default function App() {
    const [showStartScreen, setShowStartScreen] = React.useState(true);
    const toggleStartScreen = () => setShowStartScreen(!showStartScreen);

    return (
        <div className="App">
            {showStartScreen ? <StartScreen toggleStartScreen={toggleStartScreen}/> : <Game/>}
        </div>
    );
}

