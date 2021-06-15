// import React, {useState} from 'react';
// import PropTypes from 'prop-types';

//  function Counter({initValue, step}) {

//     const [value, setValue] = useState(initValue);
//         return (
//             <div>
//             <span>{value}</span>
//             <button type="button" onClick={() => setValue(value-step)}>Decrement</button>
//             <button type="button" onClick={() => setValue(value+step)}>Increment</button>
//             </div>
//         );
// }

// const propTypes = {};

// export default Counter;

import React, {Component} from 'react';
import CounterControls from '../CounterControls'

export default class Counter extends Component {


    state = {
        value: this.props.initValue,
    }
    
    handleDecrement = () => {
        this.setState((prevState, props)=>{
            return{
                value: prevState.value - props.step,
            };
        });
    };

    handleIncrement = () => {
        this.setState((prevState, props)=>{
            return {
                value: prevState.value + props.step,
            };
        });
    };

render() {
    return(
        <div>
            <h3>Repeta's Counter</h3>
            <span>{this.state.value}</span>
           {/* <button type="button" onClick={() => this.handleDecrement()}>Decrement</button>
           <button type="button" onClick={() => this.handleIncrement()}>Increment</button> */}
            <CounterControls onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement}/>
            </div>
    )
}
}