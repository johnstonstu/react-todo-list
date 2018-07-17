import React from "react";
import PropTypes from "prop-types";

const TodoInput = ({ inputRef, handleTodoSubmit }) => {
  return (
    <div className="add-todo">
      <form onSubmit={event => handleTodoSubmit(event)}>
        <input type="text" ref={inputRef} placeholder="Add Todo" />
        <span>Enter to Add</span>
      </form>
    </div>
  );
};

export default TodoInput;
