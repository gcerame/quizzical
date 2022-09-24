import React from 'react';

export default function Answer(props) {
    const style = {
        backgroundColor: props.isSelected ? "green" : "#F5F7FB",
        border: props.isSelected ? "1px solid green" : "1px solid #F5F7FB"
    };
    return <div className="answer" style={style}
                onClick={() => props.toggleSelected(props.questionID,props.id)}>
        <span>{props.answer}</span>
    </div>;
};

