import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import TodoInput from "./components/TodoInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { title: "Learn React", id: 0, isCompleted: false },
        { title: "Learn Redux", id: 1, isCompleted: false },
        { title: "Give Highfives", id: 2, isCompleted: true },
        { title: "? ? ? ?", id: 3, isCompleted: false },
        { title: "Profit $$$", id: 4, isCompleted: false }
      ],
      nextId: 0
    };
    this.inputRef = React.createRef();
  }

  handleClearCompleted = () => {
    const todoList = this.state.todoList.filter(todo => !todo.isCompleted);
    this.setState({ todoList });
  };

  handleCompletedCheckbox = id => {
    const todoList = this.state.todoList.map(todoSingle => {
      if (todoSingle.id === id) {
        todoSingle.isCompleted = !todoSingle.isCompleted;
      }
      return todoSingle;
    });
    this.setState({ todoList });
  };

  handleDeleteTodo = id => {
    console.log("delete this", id);
    const todoList = this.state.todoList.filter(
      todoSingle => id !== todoSingle.id
    );
    this.setState({ todoList });
  };

  handleTodoSubmit = event => {
    event.preventDefault();
    const nextId = this.state.todoList.length;
    // this.setState({ nextId: this.state.todoList.length });
    const newTodo = {
      id: nextId,
      title: this.inputRef.current.value,
      isCompleted: false
    };
    const todoList = this.state.todoList.concat(newTodo);
    this.setState({ todoList });
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <div className="todo-list">
        <TodoHeader appTitle="so much to do" />
        <TodoInput
          inputRef={this.inputRef}
          handleTodoSubmit={this.handleTodoSubmit}
        />
        {this.state.todoList.length > 0 && (
          <TodoList
            todoList={this.state.todoList}
            handleCompletedCheckbox={this.handleCompletedCheckbox}
            handleDeleteTodo={this.handleDeleteTodo}
          />
        )}
        <TodoFooter
          len={this.state.todoList.length}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
