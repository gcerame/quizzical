import React from 'react';

export default function Question(props) {
    const question =
        {
            question: "¿Cuál es el nombre de la mascota de Facebook?",
            answers: [{text: "Answer 1"},
                {text: "Answer 2"},
                {text: "Answer 3"},
                {text: "Answer 4"}]
        };

    function generateAnswers() {
        return question.answers.map(answer =>
            <div className="answer">
                <span>{answer.text}</span>
            </div>);
    }

    return (
        <>
            <h2>{question.question}</h2>
            <div className="answer">
                {generateAnswers()}
            </div>
        </>
    );
}
