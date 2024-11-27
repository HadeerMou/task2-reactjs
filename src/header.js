import { Component } from "react";

class Header extends Component {
  state() {
    Number: 1;
  }
  increment = () => {
    Number: this.state.Number + 1;
  };
  decrement = () => {
    Number: this.state.Number - 1;
  };
  render() {
    return (
      <div>
        <h1>1</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>My Name is</h1>
        <h1>My years is</h1>
        <h1>My city is</h1>
      </div>
    );
  }
}
