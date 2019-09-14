import React, { Component } from 'react';
import CounterOutput from "../CounterOutput"
import CounterButton from "../CounterButton"
import { styles } from "./styles";

class Counter extends Component {
  state = {
    result: 0
  }

  changeResult = (operation, quantity) => {
    switch (operation) {
      case "inc":
        this.setState((prevState) => { return { result: prevState.result + 1 } })
        break;
      case "dec":
        this.setState((prevState) => { return { result: prevState.result - 1 } })
        break;
      case "add":
        this.setState((prevState) => { return { result: prevState.result + quantity } })
        break;
      case "sub":
        this.setState((prevState) => { return { result: prevState.result - quantity } })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <CounterOutput result={this.state.result} />
        <div style={styles.buttonsContainer} >
          <CounterButton title="Increase 1" onClick={() => this.changeResult("inc")} />
          <CounterButton title="Decrease 1" onClick={() => this.changeResult("dec")} />
          <CounterButton title="Increase 10" onClick={() => this.changeResult("add", 10)} />
          <CounterButton title="Decrease 10" onClick={() => this.changeResult("sub", 10)} />
        </div>
      </div>
    );
  }
}

export default Counter;
