import React from 'react'

export function QuizResult({ correctAnswers, questionsAmount }) {
  return (
    <p>🎉  Twój wynik: {correctAnswers} / {questionsAmount} pkt.</p>
  )
}
