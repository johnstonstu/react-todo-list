import React from "react";
import PropTypes from "prop-types";
// statefull component
const TodoList = ({ todoList, handleCompletedCheckbox, handleDeleteTodo }) => (
  <div>
    <ul>
      {/* hey this is a comment duuuuuude! */}
      {todoList.map((todoSingle, index) => (
        <li key={todoSingle.id}>
          {" "}
          <input
            id={todoSingle.id}
            type="checkbox"
            checked={todoSingle.isCompleted}
            onChange={() => handleCompletedCheckbox(todoSingle.id)}
          />
          <label htmlFor={todoSingle.id}> {todoSingle.title}</label>
          <button onClick={() => handleDeleteTodo(todoSingle.id)}>
            <i className="fas fa-trash" />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })
  )
};

export default TodoList;
