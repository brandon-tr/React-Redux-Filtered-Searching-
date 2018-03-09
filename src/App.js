import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import Selected from "./components/selected";
import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/" component={List} />
        <Route path="/profile" component={Selected} />
      </div>
    );
  }
}
export default App;
