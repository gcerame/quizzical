import React from 'react';

export default function Answer (props) {
    let style = {
        backgroundColor: props.isSelected ? '#D6DBF5' : '#F5F7FB'
    };

    if (props.gameFinished) {
        if (props.isSelected && props.isCorrect) {
            style = { backgroundColor: '#94D7A2', color: '#293264' };
        } else if (props.isSelected && props.isCorrect === false) {
            style = { backgroundColor: '#F8BCBC', opacity: '100%', color: '#293264' };
        } else if (props.isCorrect) {
            style = {
                backgroundColor: '#94D7A2',
                color: 'var(--focused-btn-color)',
                opacity: '50%',
                border: 'none'
            };
        } else if (props.isCorrect === false) {
            style = { opacity: '50%' };
        }
    }
    return <div
        className="answer"
        style={style}
        onClick={() => {
            if (!props.gameFinished) props.toggleSelected(props.questionID, props.id);
        }}>
        <span>{props.answer}</span>
    </div>;
};
