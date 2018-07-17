import React from "react";
import PropTypes from "prop-types";

const TodoFooter = ({ len, handleClearCompleted }) => {
  let todoText = "";
  switch (len) {
    case 0:
      todoText = "Nothing to do";
      break;
    case 1:
      todoText = `${len} Todo`;
      break;
    default:
      todoText = `${len} Todos`;
  }
  return (
    <div className="todo-admin">
      <span>{todoText}</span>
      <button onClick={() => handleClearCompleted()}>Clear Completed</button>
    </div>
  );
};

TodoFooter.propTypes = {
  len: PropTypes.number.isRequired,
  handleClearCompleted: PropTypes.func.isRequired
};

export default TodoFooter;
