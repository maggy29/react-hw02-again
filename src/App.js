import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/Phonebook';
import Feedback from './components/feedbackHW2';
import Counter from './components/Repeta/CounterFolder/Counter';
import CountersGary from './components/Gary/Counters/CountersGary'
import TaskEditor from './components/Repeta/Tasks/TaskEditor';
import TaskList from './components/Repeta/Tasks/TaskList';
import TaskManagerGery from './components/Gary/Tasks/TaskManagerGery';
import SignUpForm from './components/Repeta/SignUpForm';
import TaskFilter from './components/Repeta/Tasks/TaskFilter';

export default class App extends Component {
  state = {
    tasks: [],
    filter: '',
  }

  addTask = (text) => {
  const task = {
    text,
      id: uuidv4(),
      complited: false,
  };  
  
   this.setState(prevState => {
     return{
       tasks: [...prevState.tasks, task ]
     } 
   })
}

removeTask = (taskId) => {
  this.setState(prevState=>{
    return{
      tasks: prevState.tasks.filter(task=> task.id !==taskId)
    }
  })
}

updateCompleted = (taskId) => {
  this.setState(prevState => ({ 
    tasks: prevState.tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    )
  }))
}

filterTasks = (e) => {
  this.setState({ filter: e.target.value })
}

getFilteredTasks = () => {
  const {tasks, filter} = this.state;
  return tasks.filter(task => 
    task.text.toLowerCase().includes(filter.toLowerCase()),
    )
}

render(){
    const {filter} = this.state;
    const filteredTasks = this.getFilteredTasks();

    return (
      <div>
        <Phonebook/>
        <Feedback />
        <SignUpForm/>
        <Counter initValue={0} step={1} />
        <TaskEditor onAddTask={this.addTask}/>
        {filteredTasks.length > 1 && <TaskFilter 
          value={filter}
          onChangeFilter={this.filterTasks}/>}
        {filteredTasks.length > 0 && <TaskList 
            tasks={filteredTasks} 
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
        />}
        <CountersGary />
        <TaskManagerGery />
      </div>
    );
  }
}
