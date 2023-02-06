import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>rouz.io</h1>

        <button
          className="icon glow click"
          type="button"
          onClick={() => setCount(count+ 1)}
        >
          <span>here soon</span>
          <i className="fa-solid fa-dice-d20"></i>
        </button>
        
        <div className="dots">
          {Array.from(Array(count).keys()).map(i => <span key={i}>.</span>)}
        </div>
      </header>
    </div>
  );
}

export default App;
