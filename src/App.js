import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './components/timer/timer.js';
import Header from './components/header/header.js';
import Scrambler from './components/scrambler/scrambler.js';

function App() {
  const [solves, updateSolves] = useState([]);
  const [scramble, generateScramble] = useState('');

  const addSolve = (time) => {
    let solve = {
      marked: true,
      scramble: scramble,
      solution: '',
      time: time,
      penalty: false,
      dnf: false,
      result: time
    }

    updateSolves([...solves, solve]);
  }

  useEffect(() => {
    generateScramble(Scrambler('3x3x3'));
  }, [solves]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="main-content">
          <div className="timer">
            <Timer addTime={addSolve}/>
          </div>
          <div className="tools">
            theme: white
          </div>
        </div>
        <div className="scramble">
          scramble: { scramble }
        </div>
      </main>
    </div>
  );
}

export default App;
