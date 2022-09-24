import './StartScreen.css';
import React from 'react';
import Select from 'react-select';

export default function StartScreen ({
    setSelectedType,
    setSelectedDifficulty,
    toggleStartScreen
}) {
    return (
        <div className="start-screen">
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <Select
                className="select"
                options={[
                    {
                        value: 'easy',
                        label: 'Easy'
                    },
                    {
                        value: 'medium',
                        label: 'Medium'
                    },
                    {
                        value: 'hard',
                        label: 'Hard'
                    }
                ]}
                defaultValue={{
                    value: 'easy',
                    label: 'Easy'
                }}
                placeholder="Select difficulty"
                onChange={(e) => {
                    setSelectedDifficulty(e.value);
                }}
            />
            <Select
                className="select"
                options={[
                    {
                        value: 'allQuestionTypes',
                        label: 'All Question Types'
                    },
                    {
                        value: 'multiple',
                        label: 'Multiple Choice'
                    },
                    {
                        value: 'boolean',
                        label: 'True/False'
                    }
                ]}
                placeholder={'Select question type'}
                defaultValue={{
                    value: 'allQuestionTypes',
                    label: 'All Question Types'
                }}
                onChange={(e) => {
                    setSelectedType(e.value);
                }}
            />
            <button className="start-button" onClick={toggleStartScreen}>
                Start quiz
            </button>
        </div>
    );
}
