import Question from "./Question";
import React, {useEffect} from "react";

export default function Game() {

    const [questions, setQuestions] = React.useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
            .then(res => res.json())
            .then(data => setQuestions(data.results));
    }, []);

    function generateQuestions() {
        return questions.map(question => {
            return <Question
                question={question.question}
                answers={[...question.incorrect_answers, question.correct_answer]}
            />;
        });
    }

    return (
        <div className="game">
            <h1>Pantalla juego</h1>
            {generateQuestions()}
        </div>
    );
}