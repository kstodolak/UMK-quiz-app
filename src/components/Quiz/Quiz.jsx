import React, { useState } from 'react'
import { NextQuestionButton } from '../NextQuestionButton/NextQuestionButton';
import { Question } from '../Question/Question';
import { QuizResult } from '../QuizResult/QuizResult';
import './Quiz.css';

function Quiz({ questions }) {
  const questionsAmount = questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const saveAnswer = isCorrect => {
    if (showResult) {
      return;
    }
    setShowResult(true);

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  }

  const nextQuestion = () => {
    setShowResult(false);
    if (currentQuestion === questionsAmount) {
      setFinished(true);
      return;
    }
    setCurrentQuestion(prev => prev + 1);
  };

  return (
    <main className="quizContainer">
      <header className="quizHeader">Pytanie {currentQuestion} / {questionsAmount}</header>
      {!finished && (
        <Question question={questions[currentQuestion - 1]} saveAnswer={saveAnswer} showResult={showResult} />
      )}
      {finished && (
        <QuizResult correctAnswers={correctAnswers} questionsAmount={questionsAmount} />
      )}
      {showResult && (
        <NextQuestionButton onClick={nextQuestion} />
      )}
    </main>
  )
}

export { Quiz };
