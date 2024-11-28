import { Component } from "react";
export default class Header extends Component {
  state = {
    Number: 3,
  };
  increment = () => {
    this.setState({
      Number: this.state.Number + 1,
    });
  };
  decrement = () => {
    if (this.state.Number > 0) {
      this.setState({
        Number: this.state.Number - 1,
      });
    }
  };
  color = () => {};
  render() {
    return (
      <div>
        <h1
          style={{
            color: `${
              this.state.Number === 5
                ? "yellow"
                : this.state.Number > 5
                ? "red"
                : "blue"
            }`,
          }}
        >
          {this.state.Number}
        </h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1>
          My Name is{" "}
          <span
            style={{
              color: `${this.state.Number > 5 ? "red" : "black"}`,
            }}
          >
            {this.props.name}
          </span>
        </h1>
        <h1>
          My years is{" "}
          <span
            style={{
              color: `${this.state.Number === 5 ? "yellow" : "black"}`,
            }}
          >
            {this.props.age}
          </span>
        </h1>
        <h1>
          My city is{" "}
          <span
            style={{
              color: `${this.state.Number < 5 ? "blue" : "black"}`,
            }}
          >
            {this.props.city}
          </span>
        </h1>
      </div>
    );
  }
}
