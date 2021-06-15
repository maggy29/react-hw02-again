import React from 'react';
import TaskListItem from '../TaskListItem';

export default function TaskList ({tasks, onRemoveTask, onUpdateTask}) {
    return (
    <ul>
        {tasks.map(({id, text, completed})=>(
            <TaskListItem 
              key={id} 
              text={text} 
              completed={completed} 
              onRemove = {()=>onRemoveTask(id)}
              onUpdate = {()=>onUpdateTask(id)}
            />
        ))}
    </ul>
    )
}