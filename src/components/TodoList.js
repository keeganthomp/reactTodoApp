import React, { Component } from "react";
import "../styles/App.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: { tite: "", isBeingEdited: false },
      todoList: [],
      todoBeingEdited: ""
    };

    this.getTodoContent = this.getTodoContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getTodoContent = e => {
    let input = e.target.value;
    let newItem = { title: input, isBeingEdited: false };
    this.setState({ todoItem: newItem });
    console.log(this.state.todoItem);
  };

  

  handleSubmit = e => {
    let todoArr = this.state.todoList;
    todoArr.push(this.state.todoItem);
    this.setState({ todoList: todoArr });
    this.setState({ todoItem: "" });
    let todoInput = document.querySelector(".todoInput");
    todoInput.value = "";
    console.log(todoArr);
  };

  deleteTodo = e => {
    let index = e.target.id;
    console.log("index ", index);
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
            name="todo"
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
            getContent={this.updateTodo}
            submit={this.handleSubmit}
            todos={this.state.todoList}
            delete={this.deleteTodo}
            edit={this.editTodo}
            handleUpdateTodo={this.handleUpdateTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
