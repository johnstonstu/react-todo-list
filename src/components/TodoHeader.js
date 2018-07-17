import React from "react";
import PropTypes from "prop-types";
// stateless component
const TodoHeader = ({ appTitle }) => (
  //   const { appTitle } = props;
  <div>
    <h1 className="App-title">{appTitle}</h1>
  </div>
);

TodoHeader.defaultProps = {
  appTitle: "Todos!"
};

TodoHeader.propTypes = {
  appTitle: PropTypes.string.isRequired
};

export default TodoHeader;
