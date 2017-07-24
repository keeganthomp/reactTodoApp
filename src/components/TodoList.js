import React, { Component } from "react";
import "../styles/App.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      todoList: []
    };

    // this.getTodoContent = this.getTodoContent.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  getTodoContent = e => {
    let input = e.target.value;
    this.setState({ todoItem: input });
    console.log(this.state.todoItem);
  };

  handleSubmit = e => {
    let todoArr = this.state.todoList;
    todoArr.push(this.state.todoItem);
    this.setState({ todoList: todoArr });
    this.setState({ todoItem: "" });
    let todoInput = document.querySelector(".todoInput");
    todoInput.value = "";
    console.log(this.state.todoList);
  };

  deleteTodo = e => {
    let index = e.target.id;
    let todoArr = this.state.todoList;
    todoArr.splice(index, 1);
    this.setState({ todoList: todoArr });
  };

  render() {
    return (
      <div className="todoWrapper">
        <div className="inputAction">
          <input
            className="todoInput"
            type="text"
            onKeyUp={this.getTodoContent}
          />
          <input
            className="submitBtn"
            type="submit"
            value="Add Todo"
            onClick={this.handleSubmit}
          />
        </div>
        <div className="todoList">
          <TodoItem
            todos={this.state.todoList}
            delete={this.deleteTodo}
            edit={this.editTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
