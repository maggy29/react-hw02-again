import React, { Component } from 'react';

export default class TaskEditor extends Component {
  state ={
      inputValue: "",
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.onAddTask(this.state.inputValue);
      this.setState({inputValue: "",})
  }

  render() {
    return(
      <>
      <h3>Repeta's Tasks</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text
            <input 
              type="text" 
              value={this.state.inputValue} 
              onChange={this.handleChange}
            />
          </label>        
          <button type="submit">Add Task</button>
        </form>
        </>
    )
  }
}

{/* <div>
    <button type="button" onClick={onAddTask}>Add Task</button>
</div> */}
