// import React, {Component} from 'react';

// export default class CountersGary extends Component {
//     state = {
//         value: this.props.initialValue,
//     }

//     static defaultProps = {
//         initialValue: 0,
//         step: 1,
//     }

//     handleDecrement = () => {
//         this.setState((state, props) => ({
//             value: state.value - props.step,
//     }))
//     }

//     handleIncrement = () => {
//         this.setState((state, props) => ({
//             value: state.value + props.step,
//     }))
//     }


//     render() {
// const {value} = this.state;
// const {onClose} = this.props;

//         return(
//         <div>
//             <button onClick={this.handleDecrement}>-</button>
//             <h2>{value}</h2>
//             <button onClick={this.handleIncrement}>+</button>
//             <button onClick={onClose}>Remove</button>
//         </div>
//         )
//     }
// }

import React, {useState} from 'react';

export default function CounterGary ({initialValue=0, step=1, onClose}) {
    
    const [value, setValue] = useState(initialValue);

    return(
    <div>
             <button onClick={() => setValue(value-step)}>-</button>
             <h2>{value}</h2>
             <button onClick={() => setValue(value+step)}>+</button>   
             <button onClick={onClose}>Remove</button>
       </div>)
}
