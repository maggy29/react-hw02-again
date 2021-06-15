import React from 'react';

function ContactItem ({name, number, onDeleteContact}) {
    return(
        <li>
            <p><span>{name}: </span>{number}</p>
            <button 
            type="button" 
            onClick={onDeleteContact}
            >
                Delete
            </button>
        </li>
    )
}      

export default ContactItem;