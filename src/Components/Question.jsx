import React from 'react';
import he from "he";


export default function Question(props) {

    const [answers, setAnswers] = React.useState(props.answers);


    function generateAnswers() {
        console.log(props.answers);
        return props.answers.map(answer =>
            <div className="answer">
                <span>{he.decode(answer)}</span>
            </div>);
    }

    return (
        <div className="question">
            <h2>{he.decode(props.question)}</h2>
            <div className="answers">
                {generateAnswers()}
            </div>
        </div>
    );
}
