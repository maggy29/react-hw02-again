import React, {Component} from 'react';
import constants from '../constants';

export default class TaskEditor extends Component {
    state = {
        inputValue: '',
        importance: constants.IMPORTANCE.NORMAL,
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onAddTask({
          text: this.state.inputValue,
          importance: this.state.importance,
      });
      this.setState({inputValue: ''})
    }

    handleInput = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleImportanceChange = (e) => {
        this.setState({importance: e.target.value})
    }

    render() {
        const {inputValue, importance} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                  type="text" 
                  name="text"
                  value={inputValue}
                  onChange={this.handleInput}
                  placeholder="Type here Your Task..."
                />
                <label>
                  Normal
                  <input 
                    type="radio" 
                    value={constants.IMPORTANCE.NORMAL} 
                    onChange={this.handleImportanceChange}
                    checked={importance===constants.IMPORTANCE.NORMAL}
                  />
                </label>
                <label>
                  Important
                  <input 
                    type="radio" 
                    value={constants.IMPORTANCE.HIGH} 
                    onChange={this.handleImportanceChange} 
                    checked={importance===constants.IMPORTANCE.HIGH}
                  />
                </label>
                <label>
                  Extremely
                  <input 
                    type="radio" 
                    value={constants.IMPORTANCE.EXTREMELY} 
                    onChange={this.handleImportanceChange} 
                    checked={importance===constants.IMPORTANCE.EXTREMELY}
                  />
                </label>
                
                
                <button type="submit" >Add Task</button>
            </form>
        )
    }
}