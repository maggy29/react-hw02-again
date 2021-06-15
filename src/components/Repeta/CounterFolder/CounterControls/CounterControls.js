export default function CounterControls ({onIncrement, onDecrement}) {
    return(
        <div>
    <button type="button" onClick={onDecrement}>Decrement</button>
    <button type="button" onClick={onIncrement}>Increment</button>
    </div>
    )
}