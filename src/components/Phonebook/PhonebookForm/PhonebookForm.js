import React, {Component} from 'react';

export default class PhonebookForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }) 
    }

    handleAddContact = (e) => {
        const {name, number} = this.state;
        e.preventDefault();
        this.props.onApproveContact(name, number);
        this.setState({
            name: '',
            number: '',
        });
    }

    render() { 
        const {name, number} = this.state;   
    
    return (
        <form onSubmit={this.handleAddContact}>
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title=""
                required
                onChange={this.handleInputChange}
                value={name}
              />          
            </label> 
            <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title=""
              onChange={this.handleInputChange}
              value={number}
              required
            />
            </label>
            <button type="submit">Add contact</button>
        </form>
    )
    }
}