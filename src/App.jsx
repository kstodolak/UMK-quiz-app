import './App.css';
import { Quiz } from './components/Quiz/Quiz';
import { getQuestions } from './common/services/getQuestions';

function App() {
  const questions = getQuestions();
  return (
    <div className="App">
      <header className="App-header">
        <Quiz questions={questions} />
      </header>
    </div>
  );
}

export { App };
