import React from 'react';
import ContactItem from '../ContactItem';

function ContactsList ({contacts, onDeleteContact}) {
    return(
        <ul>
            {contacts.map(({id, name, number})=>
            <ContactItem 
              key={id} 
              name={name} 
              number={number} 
              onDeleteContact={()=>onDeleteContact(id)}/>
            )}
        </ul>
    )
}

export default ContactsList;