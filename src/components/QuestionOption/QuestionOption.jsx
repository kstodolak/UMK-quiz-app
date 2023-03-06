import React from "react"
import './QuestionOption.css';
import css from 'clsx';

function QuestionOption({ answer, answerHandleClick, isCorrect, showResult }) {
  const resultClassName = isCorrect ? 'correct' : 'wrong';

  // Option 1 - without clsx library
  const buttonStyles = `questionOptionButton ${showResult ? resultClassName : ''}`;

  // Option 2 - with clsx library
  // const buttonStyles = css(
  //   'questionOptionButton',
  //   showResult ? resultClassName : null,
  // );

  const handleClick = () => answerHandleClick(isCorrect);

  return (
    <button
      onClick={handleClick}
      className={buttonStyles}
    >
      {answer}
    </button>
  )
}

export { QuestionOption };
