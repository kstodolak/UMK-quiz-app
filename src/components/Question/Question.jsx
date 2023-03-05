import React from 'react'
import { QuestionAnswer } from '../QuestionAnswer/QuestionAnswer';
import './Question.css';

export function Question({ question, saveAnswer, showResult }) {
  const { correct, text, options } = question;

  const answerHandleClick = (isCorrect) => saveAnswer(isCorrect);

  return (
    <div className='questionContainer'>
      <section className='questionText'>{text}</section>
      <div className='verticalDivider'></div>
      <section className='questionAnswers'>
        {options.map(({ id, answer }) => (
          <QuestionAnswer
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
