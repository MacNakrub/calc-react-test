import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    number1: 0,
    number2: 0,
    options: ['add', 'minus', 'multiply', 'divide'],
    selectedOption: 'add',
    result: 0
  });

  const setNumber1 = e => {
    setState({
      ...state,
      number1: e.target.value
    });
  };

  const setNumber2 = e => {
    setState({
      ...state,
      number2: e.target.value
    });
  };

  const handleChange = e => {
    setState({
      ...state,
      selectedOption: e.target.value
    });
  };

  const getResult = param => {
    console.log(param);
    console.log(state.number1, state.number2);
    if (param === 'add') {
      setState({
        ...state,
        results: Number(state.number1) + Number(state.number2)
      });
    }
    if (param === 'minus') {
      setState({
        ...state,
        results: Number(state.number1) - Number(state.number2)
      });
    }
    if (param === 'multiply') {
      setState({
        ...state,
        results: Number(state.number1) * Number(state.number2)
      });
    }
    if (param === 'divide') {
      setState({
        ...state,
        results: Number(state.number1) / Number(state.number2)
      });
    }
  };

  return (
    <div>
      <div className='App'>
        <div className='App-panel-container'>
          <div className='App-panel'>
            <input type='text' min='0' onChange={e => setNumber1(e)}></input>
            <br />
            <input type='text' min='0' onChange={e => setNumber2(e)}></input>
          </div>
          <div className='App-panel'>
            <select
              name='selectedOption'
              onChange={e => handleChange(e)}
              value={state.selectedOption}
            >
              {state.options.map(i => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <button onClick={() => getResult(state.selectedOption)}>
              Get result
            </button>
          </div>
          <div className='App-panel'>
            <div>{state.results}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
