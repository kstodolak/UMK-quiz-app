import React from 'react'

function QuizResult({ correctAnswers, questionsAmount }) {
  return (
    <p>🎉  Twój wynik: {correctAnswers} / {questionsAmount} pkt.</p>
  )
}

export { QuizResult };
