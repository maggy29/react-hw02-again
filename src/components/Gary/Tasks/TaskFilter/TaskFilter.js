import React from 'react';
import constants from '../constants';

export default function TaskFilter ({doneFilter, textFilter, sortFilter, onDoneFilter, onTextAndImportanceFilter}) {
    return (
        <div>
          <label>
            <span>Done</span>
            <input 
              type="checkbox" 
              checked={doneFilter}
              onChange={onDoneFilter}
            />
          </label>
          <input 
            type="text" 
            value={textFilter} 
            name="textFilter"
            onChange={onTextAndImportanceFilter} 
          />
          <label>
            <span>Sort by importance</span>
            <select 
              onChange={onTextAndImportanceFilter}
              value={sortFilter}
              name="sortFilter"
            >  
              <option value={''} disabled>Not sorted</option>          
              <option value={constants.IMPORTANCE.NORMAL}>Normal</option>
              <option value={constants.IMPORTANCE.EXTREMELY}>Extremely</option>
            </select>
          </label>
        </div>
    )
} 