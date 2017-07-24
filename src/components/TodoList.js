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
    this.setState({todoList: todoArr})
    this.setState({todoItem: ""});
    let todoInput = document.querySelector(".todoInput");
    todoInput.value = "";
    console.log(this.state.todoList);
  };

  render() {
    return (
      <div className="todoWrapper">
        <input className="todoInput" type="text" onKeyUp={this.getTodoContent} />
        <input type="submit" onClick={this.handleSubmit} />
        <div className="todoList">
          <TodoItem todos={this.state.todoList}/>
        </div>
      </div>
    );
  }
}

export default TodoList;
