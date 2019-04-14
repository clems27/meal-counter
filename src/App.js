import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <CounterButton title="Vegan" />
        <CounterButton title="Halal" />
        <CounterButton title="Veggie" />
        <CounterButton title="Anything" />
      </div>
    );
  }
}
class Heading extends Component {
  render() {
    return <h1>Meal Counter</h1>;
  }
}
class CounterButton extends Component {
  render() {
    return (
      <div>
        <button>curry</button>0
      </div>
    );
  }
}
export default App;
