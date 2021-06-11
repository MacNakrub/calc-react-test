import React, { useState } from 'react'
import './App.css';

const App = ({}) => {

  const options = ['add', 'minus', 'multiply', 'divide']
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(0)
  const [selectedOption, setSelectedOption] = useState('add')

  function handleChange (e) {
    setSelectedOption(e.target.value)
  }

    return (
      <div className="App">
        <div className="App-panel-container">
          <div className="App-panel">
            <input type="text" min="0"></input>
            <br/>
            <input type="text" min="0"></input>
          </div>
          <div className="App-panel">
            <select name='selectedOption' onChange={handleChange} value={selectedOption}>
              {options.map((i) => (<option key={i} value={i}>{i}</option>) )}
            </select>
            <button onClick={() => console.log('Your result is ', result)} >Get result</button>
          </div>
          <div className="App-panel">
            <div>{result}</div>
          </div>
        </div>
      </div>
    );
}

export default App;
