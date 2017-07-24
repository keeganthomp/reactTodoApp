import React, { Component } from "react";
import "../styles/App.css";

class TodoItem extends Component {
  render() {
    let todos = this.props.todos.map(e => {
      return (
        <div key={e}>
          <li>
            {e}
          </li>
        </div>
      );
    });
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoItem;
