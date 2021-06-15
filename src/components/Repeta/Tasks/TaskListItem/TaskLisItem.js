export default function TaskLisItem ({text, completed, onRemove, onUpdate}) {
return (
    <li>
        <label>
            <input type="checkbox" checked={completed} onChange={onUpdate}/>
            Completed
        </label>
        <p>{text}</p>
        <div>
            <button type='button' onClick={onRemove}>Delete Task</button>
        </div>
    </li>)
}