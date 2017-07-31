import React, { Component } from "react";
import "../styles/App.css";

class TodoList extends Component {
  render() {
    let todos = this.props.todos.map((e, i) => {
      if (!e.isBeingEdited) {
        return (
          <div key={i}>
            <hr />
            <p>
              {e.title}
            </p>
            <p>
              {e.description}
            </p>
            <br />
            <button id={i} onClick={this.props.delete}>
              Delete
            </button>
            <button id={i} onClick={this.props.edit}>
              Edit
            </button>
            <hr />
          </div>
        );
      } else {
        return (
          <div key={Math.random()}>
            <hr />
            <input onChange={this.props.update} type="text" />
            <hr />
          </div>
        );
      }
    });
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
