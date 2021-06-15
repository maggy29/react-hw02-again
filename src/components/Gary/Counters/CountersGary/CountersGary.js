import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CounterGary from '../CounterGary';
import CounterStatGary from '../CounterStatGary';

export default class CountersGary extends Component {
    state = {
        counters: [],
    }

    handleAddCounter = () => {
        this.setState(({counters})=>({
            counters: [...counters, {Counter: CounterGary, id: uuidv4(),}]
        }))
    }

    handleRemoveCounter =(idForRemove) => {
        this.setState(({counters})=>({
            counters: counters.filter(({id})=>id!==idForRemove)
        }))
    }

    

    render() {
        return (
        <div>
            <h2>Gery's Counters</h2>
            <button onClick={this.handleAddCounter}>AddCounter</button>
            <CounterGary initialValue = {10} step={3}/>
            <CounterGary initialValue = {5} step={12}/>
            {this.state.counters.map(({Counter, id})=> (<Counter key={id} onClose={()=>this.handleRemoveCounter(id)}/>))}
            <CounterStatGary value={this.state.counters.length}/>
        </div>
        )
    }
}