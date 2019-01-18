import React, { Component } from 'react';
import TodosItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) =>(
        <TodosItem key={todo.id} todo={todo} markCompleteHandler = {this.props.markCompleteHandler}
        delTodoHandler={this.props.delTodoHandler}/>
      ));
  }
}

// PropType
Todos.propTypes ={
  todos: PropTypes.array.isRequired,
  markCompleteHandler: PropTypes.func.isRequired,
  delTodoHandler: PropTypes.func.isRequired,

}
export default Todos;
