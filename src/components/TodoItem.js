import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class TodoItem extends Component {
    style = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' 
        }
    }
    btnStyle = {
        background: "red",
        border: "none",
        float:"right",
        borderRadius: "50%",
        color: "white",
        cursor: "pointer",
        padding: "5px 9px"
    }

  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.style()}>
        <h5>
            <input type="checkbox" onClick={this.props.markCompleteHandler.bind(this,id)}/>
            {' '}
            {title}
            <button style={this.btnStyle} onClick={this.props.delTodoHandler.bind(this,id)}>X</button>
        </h5>
      </div>
    )
  }
}



// PropType
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    markCompleteHandler: PropTypes.func.isRequired,
    delTodoHandler: PropTypes.func.isRequired,

}
export default TodoItem
