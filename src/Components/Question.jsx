import React from 'react';
import he from "he";
import Answer from "./Answer";
import {nanoid} from "nanoid";


export default function Question(props) {
    const [answers, setAnswers] = React.useState(props.answers);


    function generateAnswers() {
        return answers.map(answer =>
            <Answer
                answer={he.decode(answer.answer)}
                key={nanoid()}
                isSelected={answer.isSelected}
                toggleSelected={props.toggleSelected}
                id={answer.id}
                questionID={props.questionID}
                isCorrect={answer.isCorrect}
                gameFinished={props.gameFinished}
            />);
    }

    return (
        <div className="question">
            <p className="question--title">{he.decode(props.question)}</p>
            <div className="answers">
                {generateAnswers()}
            </div>
        </div>
    );
}
