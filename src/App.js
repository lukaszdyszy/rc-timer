import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './components/timer/timer.js';
import Header from './components/header/header.js';
import Scrambler from './components/scrambler/scrambler.js';
import Results from './components/results/results.js';
import Tools from './components/tools/tools.js';
import DrawCube from './components/drawCube/drawCube.js';

function App() {
  const [solves, updateSolves] = useState([]);
  const [scramble, generateScramble] = useState('');
  const [cubeType, setCubeType] = useState('3x3x3');
  const [cubeShown, setClass] = useState('shown');

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
    generateScramble(Scrambler(cubeType));
  }

  useEffect(() => {
    generateScramble(Scrambler(cubeType));
  }, []);
  useEffect(() => {
    generateScramble(Scrambler(cubeType));
  }, [cubeType]);

  const renderCube = () => {
    if(scramble.length > 0){
      return(<DrawCube scramble={scramble}/>);
    }
  }

  const showHideBtn = () => {
    if(cubeShown === 'shown'){
      return '>';
    } else {
      return '<';
    }
  }

  const showHideCube = () => {
    if(cubeShown === 'shown'){
      setClass('hidden');
    } else {
      setClass('shown');
    }
  }

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
            <Tools cube={setCubeType} solves={solves} updateSolves={updateSolves}/>
          </div>
        </div>
        <div className="scramble">
          scramble: { scramble }
        </div>
      </main>
      <section className="results-table">
        <Results solves={solves} updateSolves={updateSolves}/>
      </section>
      <aside className={`draw-cube ${cubeShown}`}>
        <div className="show-cube" onClick={() => {showHideCube()}}>
          {showHideBtn()}
        </div>
        {
          renderCube()
        }
      </aside>
    </div>
  );
}

export default App;
