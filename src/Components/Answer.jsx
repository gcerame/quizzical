import React from 'react';

export default function Answer ({ gameFinished, isCorrect, isSelected, answer, toggleSelected, id, questionID }) {
    let style = {
        backgroundColor: isSelected ? '#D6DBF5' : '#F5F7FB'
    };

    if (gameFinished) {
        if (isSelected && isCorrect) {
            style = { backgroundColor: '#94D7A2', color: '#293264' };
        } else if (isSelected && isCorrect === false) {
            style = { backgroundColor: '#F8BCBC', opacity: '100%', color: '#293264' };
        } else if (isCorrect) {
            style = {
                backgroundColor: '#94D7A2',
                color: 'var(--focused-btn-color)',
                opacity: '50%',
                border: 'none'
            };
        } else if (isCorrect === false) {
            style = { opacity: '50%' };
        }
    }
    return <div
        className="answer"
        style={style}
        onClick={() => {
            if (!gameFinished) toggleSelected(questionID, id);
        }}>
        <span>{answer}</span>
    </div>;
};
