import React, { Component } from 'react';
import './App.css';
import store from './store';
import { incrementValue } from './action';
// 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // store: props.store,
      counterValue: props.counterValue.counter,
      step: 1,
    }
  }

  componentDidMount() {
    this.props.store.subscribe(() => {
      let value = this.props.store.getState().counter;
      this.updateState(value);
    });
  }

  updateState(counterValue) {
    this.setState({
      counterValue,
    });
  }

  render() {
    const { counterValue, step } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{ counterValue }</p>
          <div>
          <button onClick={() => store.dispatch(incrementValue(step))}>+</button>
          {' '}
          <button onClick={() => store.dispatch({ type: 'DECREMENT', payload: { value: step } })}>-</button>
          </div>
          {/* <input type="number" value={ step } onChange={e => this.setState({ step: Number(e.target.value) })} /> */}
        </header>
      </div>
    );
  }
}

export default App;
