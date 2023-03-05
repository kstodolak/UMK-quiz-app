import React from "react"
import './QuestionAnswer.css';

export function QuestionAnswer({ answer, answerHandleClick, isCorrect, showResult }) {
  const resultClassName = isCorrect ? 'correct' : 'wrong';
  const handleClick = () => answerHandleClick(isCorrect);

  return (
    <button
      onClick={handleClick}
      className={`questionAnswerButton ${showResult ? resultClassName : ''}`}
    >
      {answer}
    </button>
  )
}
