import StartScreen from './Components/StartScreen';
import Game from './Components/Game';
import React from 'react';

export default function App () {
    const [showStartScreen, setShowStartScreen] = React.useState(true);
    const toggleStartScreen = () => setShowStartScreen(!showStartScreen);
    const [selectedDifficulty, setSelectedDifficulty] = React.useState('easy');
    const [selectedType, setSelectedType] = React.useState('allQuestionTypes');

    React.useEffect(() => {
    }, [selectedDifficulty, selectedType]);
    return (
        <div className="App">
            {showStartScreen
                ? <StartScreen
                    toggleStartScreen={toggleStartScreen}
                    setSelectedDifficulty={setSelectedDifficulty}
                    setSelectedType={setSelectedType}/>
                : <Game
                    toggleStartScreen={toggleStartScreen}
                    selectedDifficulty={selectedDifficulty}
                    selectedType={selectedType}/>}
        </div>
    );
}
