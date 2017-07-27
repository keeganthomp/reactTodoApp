import React, { Component } from "react";
import "../styles/App.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: undefined,
      todo: {},
    };
  }

  editTodo = e => {
    let index = e.target.id;
    let todoList = this.props.todos;
    let item = todoList[index];
    item.isBeingEdited = true;
    this.setState({ index });
    this.setState({ todoBeingEdited: item });
    // console.log("todoBeingEdited:", this.state.todoBeingEdited);
  };

  getUpdateTodoContent = e => {
    let updateTodoValue = e.target.value;
    if(e.which === 13){
      console.log(":::,", this.props.todos[this.state.index])
    this.props.todos[this.state.index].title = updateTodoValue;
    this.props.todos[this.state.index].isBeingEdited = false;
    } else {
      console.log("press Enter")
    }
  };

  updateTodo = e => {
    
  };

  render() {
    let todos = this.props.todos.map((e, i) => {
      if (e.isBeingEdited === false) {
        return (
          <div key={Math.random()} className="todoItem">
            {e.title}
            <button
              id={i}
              className="deleteBtn slide"
              onClick={this.props.delete}
            >
              <span className="fa fa-trash" />
            </button>
            <button id={i} onClick={this.editTodo} className="editButton">
              Edit
            </button>
          </div>
        );
      } else {
        return (
          <div key={Math.random()}>
            <input
              onKeyUp={this.getUpdateTodoContent}
              className="updateInput"
              type="text"
            />
          </div>
        );
      }
    });
    return (
      <div className="todoContainer">
        {todos}
      </div>
    );
  }
}

export default TodoItem;
