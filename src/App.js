import { Component } from "react";
import Header from "./header";

export default class App extends Component {
  state = {
    name: "Nora",
    age: 30,
    city: "Newyork",
  };

  render() {
    return (
      <div>
        <Header
          name={this.state.name}
          age={this.state.age}
          city={this.state.city}
        />
      </div>
    );
  }
}
