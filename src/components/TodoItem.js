import React, { Component } from "react";
import "../styles/App.css";



class TodoItem extends Component {
  render() {
    let todos = this.props.todos.map((e, i)=> {
      return (
        <div key={Math.random()} className="todoItem">
          {e}
          <button id="{i}" className="deleteBtn slide" onClick={this.props.delete}><span className="fa fa-trash"></span></button>
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
