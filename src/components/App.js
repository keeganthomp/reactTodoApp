import React, { Component } from "react";
import "../styles/App.css";
import TodoItem from './TodoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem />
      </div>
    );
  }
}

export default App;
