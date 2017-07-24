import React, { Component } from "react";
import "../styles/App.css";

class TodoItem extends Component {
  render() {
    let todos = this.props.todos.map(e => {
      let index = this.props.todos.indexOf(e);
      return (
        <div key={Math.random()}>
          {e}
          <button id={index} onClick={this.props.delete}>delete</button>
        </div>
      );
    });
    return (
      <div className="todoContainer">
        {todos}
      </div>
    );
  }
}

export default TodoItem;
