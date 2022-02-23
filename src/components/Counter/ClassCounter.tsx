import React from 'react';
import { Component } from 'react';

interface Props {}

interface State {
  counter: number;
}

export default class ClassCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 42,
    };
  }

  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increment.bind(this)}>Click</button>
      </div>
    );
  }
}
