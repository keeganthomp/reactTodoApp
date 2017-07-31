import React, { Component } from "react";
import "../styles/App.css";
import TodoList from "./TodoList";
import Radium from 'radium';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ title: "eat pickles", description: "Eat Those Pickles" }],
      todoItem: { title: "", description: "", isBeingEdited: false },
      index: null
    };
  }

  getCurrentTodo = e => {
    let todo = this.state.todoItem;
    todo[e.target.name] = e.target.value;
    todo.isBeingEdited = false;
    this.setState({ todoItem: todo });
    console.log(this.state.todoItem);
  };

  submitNewTodo = e => {
    let newTodo = this.state.todoItem;
    let todos = this.state.todos;
    let clearTodo = {};
    let titleInput = document.querySelector(".titleInput");
    let descriptionInput = document.querySelector(".description");
    titleInput.value = "";
    descriptionInput.value = "";
    todos.push(newTodo);
    this.setState({ todos });
    this.setState({ todoItem: clearTodo });
  };

  deleteTodo = e => {
    let index = e.target.id;
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
  };

  editTodo = e => {
    let index = e.target.id;
    this.setState({ index });
    let todos = this.state.todos;
    todos[index].isBeingEdited = true;
  };

  handleUpdate = e => {
    let newTodoContent = e.target.value;
    let todo = this.state.todoItem;
    todo[e.target.name] = e.target.value;
    let todos = this.state.todos;
    if (e.target.name === "title") {
      todos[this.state.index].title = newTodoContent;
    } else if (e.target.name === "description") {
      todos[this.state.index].description = newTodoContent;
    }
    if (e.which === 13) {
      let todos = this.state.todos;
      let index = this.state.index;
      todos[index].isBeingEdited = false;
      this.setState({ todos });
    }
  };

  render() {
    let input = {
      borderRadius: 5,
      outline: "none",
      border: "1px solid lightGreen",
      textAlign: "center",
      margin: 5,
      fontSize: "2rem"
    };

    let submitButton = {
      border: "none",
      fontSize: "2rem",
      backgroundColor: "white",
      ':hover': {
        cursor: "pointer",
        color: "lightGreen"
      }
    }

    return (
      <div>
        <input  style={input}
          type="text"
          placeholder="Todo Title"
          onKeyUp={this.getCurrentTodo}
          name="title"
          className="titleInput"
        />
        <br />
        <input style={input}
          type="text"
          placeholder="Description"
          name="description"
          className="description"
          onKeyUp={this.getCurrentTodo}
        />
        <br />
        <button style={submitButton} onClick={this.submitNewTodo}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
        <TodoList
          todos={this.state.todos}
          delete={this.deleteTodo}
          edit={this.editTodo}
          update={this.handleUpdate}
          submitNewTodo={this.submitNewTodo}
        />
      </div>
    );
  }
}

export default Radium(TodoItem);
