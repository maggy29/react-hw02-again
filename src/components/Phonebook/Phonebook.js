import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhonebookForm from './PhonebookForm';
import ContactsFilter from './ContactsFilter';
import ContactsList from './ContactsList';

export default class Phonebook extends Component {
    state= {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
          })
        
    }

    approveContact = (inputName, inputNumber) => {
        if(this.state.contacts.find(({name})=>
        name.toLowerCase()===inputName.toLowerCase()) ) {
            alert(inputName + ' is already in Your Contacts!!!');
            return;
        } else if (this.state.contacts.find(({number})=>number===inputNumber) ) {
            alert(inputNumber + ' is already in Your Contacts!!!');
            return;
        } else {
            this.addContact(inputName, inputNumber)
        }
    }

    addContact = (name, number) => {    
                
        const contact = {
            id: uuidv4(),
            name, 
            number,
        }

        this.setState(({contacts})=>{
          return {
              contacts: [...contacts, contact],
          }
        })
    }

    filterContacts = () => {
        const{contacts, filter} = this.state;
        return filter 
          ? contacts.filter(contact=> 
              contact.name.toLowerCase().includes(filter.toLowerCase()) 
              || contact.number.toLowerCase().includes(filter.toLowerCase())
              )
          : contacts
    }

    deleteContact = (id) => {
        this.setState(({contacts})=>({
            contacts: contacts.filter(contact=>contact.id!==id)
        }))
    }

    render() {
        const {contacts, filter} = this.state;
        return(
            <div>
              <PhonebookForm 
                onApproveContact={this.approveContact}
              />
              <ContactsFilter 
                filter={filter}
                onInputChange={this.handleInputChange}
              />
              {contacts && <ContactsList
                 contacts={this.filterContacts()}
                 onDeleteContact={this.deleteContact}
              />}
            </div>
        )
    }
}