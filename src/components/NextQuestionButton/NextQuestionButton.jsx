import React from 'react'
import './NextQuestionButton.css';

export function NextQuestionButton({ onClick }) {
  return (
    <div className='quizButtonRow'>
      <button onClick={onClick} className='quizNextQuestionButton'>Dalej</button>
    </div>
  )
}
