import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      options: ['add', 'minus', 'multiply', 'divide'],
      selectedOption: 'add',
      result: ''
    };
  }

  setNumber1 = e => {
    this.setState({
      number1: e.target.value,
    })
  }

  setNumber2 = e => {
    this.setState({
      number1: e.target.value,
    })
  }

  handleChange = e => {
    this.setState({
      selectedOption: e.target.value,
    })
  }

  getResult = e => {
    this.setState({
      results: this.state.number1,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-panel-container">
          <div className="App-panel">
            <input type="text" min="0" onChange={this.setNumber1}></input>
            <br/>
            <input type="text" min="0" onChange={this.setNumber2}></input>
          </div>
          <div className="App-panel">
            <select name='selectedOption' onChange={this.handleChange} value={this.state.selectedOption}>
              {this.state.options.map(i => (<option key={i} value={i}>{i}</option>) )}
            </select>
            <button onClick={this.getResult}>Get result</button>
          </div>
          <div className="App-panel">
            <div>{this.state.results}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
