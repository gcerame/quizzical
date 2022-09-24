import Question from './Question';
import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function Game ({
    selectedDifficulty,
    selectedType
}) {
    const [questions, setQuestions] = React.useState([]);
    const [gameFinished, setGameFinished] = React.useState(false);
    const [correctAnswers, setCorrectAnswers] = React.useState(0);
    const [restartGame, setRestartGame] = React.useState(false);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5', {
            params: {
                difficulty: selectedDifficulty,
                type: selectedType === 'allQuestionTypes' ? '' : selectedType
            }
        })
            .then(res => res.json())
            .then(data => data.results.map(question => ({
                id: nanoid(),
                question: question.question,
                answers: [...question.incorrect_answers, question.correct_answer].map(answer => ({
                    answer,
                    isCorrect: answer === question.correct_answer,
                    isSelected: false,
                    id: nanoid()
                })).sort(() => Math.random() - 0.5)
            })))
            .then(questions => setQuestions(questions));
    }, [restartGame]);

    function checkAnswers () {
        let correctAnswers = 0;
        questions.forEach(question => {
            question.answers.forEach(answer => {
                if (answer.isCorrect && answer.isSelected) correctAnswers++;
            });
        });
        setCorrectAnswers(correctAnswers);
        setGameFinished(true);
    }

    function toggleSelected (questionID, answerID) {
        const newQuestions = questions.map(question => {
            if (question.id === questionID) {
                question.answers = question.answers.map(answer => {
                    answer.isSelected = answer.id === answerID ? !answer.isSelected : false;
                    return answer;
                });
            }
            return question;
        });
        setQuestions(newQuestions);
    }

    function generateQuestions () {
        return questions.map(question => {
            return <Question
                question={question.question}
                answers={question.answers}
                key={question.id}
                questionID={question.id}
                toggleSelected={toggleSelected}
                gameFinished={gameFinished}
            />;
        });
    }

    function toggleRestartGame () {
        setRestartGame(true);
        setGameFinished(false);
    }

    return (<div className="game">
        {generateQuestions()}
        <div className="footer">
            {gameFinished
                ? <>
                    <span>You have answered {correctAnswers}/5 correctly</span>
                    <button
                        className="submit-button"
                        onClick={toggleRestartGame}
                    >Restart game
                    </button>
                </>
                : <button className="submit-button" onClick={checkAnswers}>Check Answers</button>}

        </div>
    </div>);
}
