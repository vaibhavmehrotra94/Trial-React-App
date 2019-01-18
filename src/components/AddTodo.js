import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  
  state = {
      title: ''
  }
  
  onType = (e) => this.setState({
      [e.target.name]: e.target.value
  });

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ''});
  }

  render() {
    return (
        <form onSubmit={this.onSubmit} style ={{display:"flex"}}>
            <input 
            style = {{flex:10, padding:"5px"}}
            type="text"
            placeholder="Input Text here..."
            name="title"
            value={this.state.title}
            onChange={this.onType}
            />
            <input 
            className ="btn"
            style={{flex:1}}
            type="submit"
            value ="Add"
            />
        </form>
    )
  }
}



// PropType
AddTodo.propTypes ={
    addTodo: PropTypes.func.isRequired
  }