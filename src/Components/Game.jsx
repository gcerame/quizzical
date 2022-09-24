import Question from "./Question";
import React, {useEffect} from "react";
import {nanoid} from "nanoid";

export default function Game() {

    const [questions, setQuestions] = React.useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
            .then(res => res.json())
            .then(data => data.results.map(question => ({
                id: nanoid(),
                question: question.question,
                answers: [...question.incorrect_answers, question.correct_answer].map(answer => ({
                    answer: answer,
                    isCorrect: answer === question.correct_answer,
                    isSelected: false,
                    id: nanoid()
                }))
            })))
            .then(questions => setQuestions(questions));
    }, []);

    function toggleSelected (questionID, answerID) {
        const newQuestions = questions.map(question => {
            if (question.id === questionID) {
                //Unselect all answers
                question.answers = question.answers.map(answer => {
                    answer.isSelected = false;
                    return answer;
                });
                //Toggle the answer that was clicked
                question.answers = question.answers.map(answer => {
                    if (answer.id === answerID) {
                        answer.isSelected = !answer.isSelected;
                    }
                    return answer;
                });
            }
            return question;
        });
        setQuestions(newQuestions);
    }

    function generateQuestions() {
        return questions.map(question => {
            return <Question
                question={question.question}
                answers={question.answers}
                key={question.id}
                questionID={question.id}
                toggleSelected={toggleSelected}
            />;
        });
    }

    function checkAnswers() {
        console.log(questions[1].answers);
    }

    return (
        <div className="game">
            {generateQuestions()}
            <button onClick={checkAnswers}>
                Check Answers
            </button>
        </div>
    );
}