import React from 'react';
import TaskListItemGary from '../TaskListItemGary';

export default function TaskListGary ({tasks, onClose, onStatusChange}) {
return (
  <ul>
    {tasks.map(({text, id, importance, done})=> 
      <TaskListItemGary 
        key={id} 
        text={text} 
        importance={importance} 
        done={done}
        onClose={()=>onClose(id)} 
        onStatusChange={()=>onStatusChange(id)}
      />
    )}
  </ul>    
)
}
