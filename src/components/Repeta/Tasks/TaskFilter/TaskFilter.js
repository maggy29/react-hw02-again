import React from 'react';

export default function TaskFilter ({value, onChangeFilter}) {
    return (
        <div>
            <input 
              type='text' 
              value={value} 
              onChange={onChangeFilter}
            />
        </div>
    )
}