import React, { Component } from "react";
import "../styles/App.css";

class TodoList extends Component {
  render() {
    let input = {
      borderRadius: 5
    };
    let title = {
      marginTop: 0,
      marginBottom: 2,
      fontSize: "2rem",
      textTransform: "uppercase"
    };

    let content = {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 12
    };

    let todoContainer = {
      padding: 12,
      border: "1px solid lightGreen",
      width: "30%",
      margin: "auto",
      borderRadius: 10
    };

    let button = {
      border: "none",
      backgroundColor: "white",
      fontSize: "1.2rem",
      margin: 10,
      ":hover": {
        cursor: "pointer"
      }
    };

    let todos = this.props.todos.map((e, i) => {
      if (!e.isBeingEdited) {
        return (
          <div style={todoContainer} key={i}>
            <p style={title}>
              {e.title}
            </p>
            <p style={content}>
              {e.description}
            </p>

            <i
              style={button}
              id={i}
              onClick={this.props.delete}
              className="fa fa-trash"
              aria-hidden="true"
            />

            <i
              style={button}
              id={i}
              onClick={this.props.edit}
              className="fa fa-pencil-square-o"
              aria-hidden="true"
            />
          </div>
        );
      } else {
        return (
          <div key={Math.random()}>
            <input
              style={input}
              name="title"
              onKeyUp={this.props.update}
              type="text"
            />
            <input
              style={input}
              name="description"
              onKeyUp={this.props.update}
              type="text"
            />
          </div>
        );
      }
    });
    return (
      <div key={Math.random()}>
        {todos}
      </div>
    );
  }
}

export default TodoList;
