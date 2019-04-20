import React, { Component } from "react";
import CounterButton from "./CounterButton.js";
import Footer from "./Footer"
import "./App.css";

class App extends Component {
  render() {
    const contactInfo = [
      "64, Sebert Road London, E1 4UD",
      "info@fadsmeal.com",
      "0123 987654"
    ];
    return (
      <div className="App">
        <Heading />
        <CounterButton title="Vegan" />
        <CounterButton title="Halal" />
        <CounterButton title="Veggie" />
        <CounterButton title="Kosher" />
        <CounterButton title="Meat" />
        <CounterButton title="Sides" />
        <CounterButton title="Drinks" />
        <Footer contactInfo={contactInfo} />
      </div>
    );
  }
}

class Heading extends Component {
  render() {
    return (
      <header className="header">
        <img
          src="https://i.postimg.cc/JzKjv6jK/fads.png"
          height="120px"
          alt="logo"
        />
        <h1>Meal Counter</h1>
        <div className="scroll-bar">
          <h3>
            Wether you just want to order for a single person or for a group!
            This app makes ordering food for a group more easier.
          </h3>
        </div>
      </header>
    );
  }
}

export default App;
