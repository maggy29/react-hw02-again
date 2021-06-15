import React from 'react';

function ContactsFilter ({filter, onInputChange}) {
    return(
        <label>
            <p>Find contacts by name</p>
            <input
              name="filter"
              value={filter}
              onChange={onInputChange}
            />
        </label>
    )
}

export default ContactsFilter;