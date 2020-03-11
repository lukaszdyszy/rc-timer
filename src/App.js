import React, {useState} from 'react';
import './App.css';
import Timer from './components/timer/timer.js';

function App() {
  const [times, updateTimes] = useState([]);

  return (
    <div className="App">
      <div className="main-content">
        <div className="timer">
          <Timer />
        </div>
        <div className="tools">
          theme: white
        </div>
      </div>
    </div>
  );
}

export default App;
