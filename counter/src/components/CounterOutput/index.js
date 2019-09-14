import React, { Component } from 'react';
import { styles } from "./styles"

class CounterOutput extends Component {
  render() {
    return (
      <div style={styles.counterOutput}>
        Result : {this.props.result}
      </div>
    );
  }
}

export default CounterOutput;
