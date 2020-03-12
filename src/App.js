import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './components/timer/timer.js';
import Header from './components/header/header.js';
import Scrambler from './components/scrambler/scrambler.js';
import Results from './components/results/results.js';

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
      result: function(){
        if(this.dnf){return 'DNF';}
        else if(this.penalty){return this.time+2000;}
        else{return this.time;}
      }
    }

    updateSolves([...solves, solve]);
    generateScramble(Scrambler('3x3x3'));
  }

  useEffect(() => {
    generateScramble(Scrambler('3x3x3'));
  }, []);

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
      <section className="results-table">
        <Results solves={solves} updateSolves={updateSolves}/>
      </section>
    </div>
  );
}

export default App;
