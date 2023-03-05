import React from 'react'
import { QuestionOption } from '../QuestionOption/QuestionOption';
import './Question.css';

function Question({ question, saveAnswer, showResult }) {
  const { correct, text, options } = question;

  const answerHandleClick = (isCorrect) => saveAnswer(isCorrect);

  return (
    <div className='questionContainer'>
      <section className='questionText'>{text}</section>
      <div className='verticalDivider'></div>
      <section className='questionAnswers'>
        {options.map(({ id, answer }) => (
          <QuestionOption
            id={id}
            key={`answer-${id}`}
            answer={answer}
            isCorrect={(id === correct)}
            answerHandleClick={answerHandleClick}
            showResult={showResult}
          />
        ))}
      </section>
    </div>
  )
}

export { Question };
