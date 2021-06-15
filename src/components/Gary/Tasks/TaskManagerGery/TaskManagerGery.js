import React, {Component}  from 'react';
import TaskEditor from '../TaskEditor';
import TaskFilter from '../TaskFilter';
import TaskListGary from '../TaskListGary';
import {v4 as uuidv4} from 'uuid';
import constants from '../constants';

export default class TaskManagerGery extends Component {

    state = {
        tasks: [],
        doneFilter: false,
        textFilter: '',
        sortFilter: '',
    }

    saveData =() => {
        localStorage.setItem('tasks', JSON.stringify(this.state))
    }

    loadData = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks && this.setState(tasks)
    }

    handleAddTask =({text, importance}) => {

        if(!text) {
            return;
        }

        const task = {
            text,
            id: uuidv4(),
            importance,
            done: false,
        }

        this.setState(({tasks})=> { 
            return {           
                tasks: [...tasks, task],  
            }      
    }, this.saveData)
    }

    handleRemoveTask = (idForRemove) => {
        this.setState(({tasks})=>({
                tasks: tasks.filter(({id})=> id!==idForRemove)
        }), this.saveData)
    }

    handleStatusChange = (id) => {
        this.setState(({tasks}) => ({
        tasks: tasks.map(task=> task.id===id ? ({...task, done:!task.done}) : task)
        }), this.saveData)
    }

    handleDoneFilter = (e) => {
        this.setState({
            doneFilter: e.target.checked,
        })
    }

    handleTextAndImportanceFilter = (e) => {
        this.setState({[e.target.name]: e.target.value}) 
    }

    filterTasksByDone = (doneFilter, tasks) => {return tasks.filter(task=> task.done === doneFilter)}

    filterTasksByIncludeText = (textFilter, tasks) => {return tasks.filter(task=> task.text.toLowerCase().includes(textFilter.toLowerCase()))}

    sortTasksByImportance = (sortFilter, tasks) => {
        if(sortFilter === constants.IMPORTANCE.NORMAL) {
            return tasks.sort((a,b) => {
                if(a.improtance < b.importance) {return 1}
                if (a.importance > b.importance) {return -1}
                return 0
            })
        } else if (sortFilter === constants.IMPORTANCE.EXTREMELY) {
            return tasks.sort((a,b) => {
                if(a.improtance > b.importance) {return 1}
                if (a.importance < b.importance) {return -1}
                return 0
            })
        } else {return tasks}
    }
    
    filterTasks = () => {
        const {tasks, doneFilter, textFilter, sortFilter} = this.state;
        const filteredByDone = this.filterTasksByDone(doneFilter, tasks);
        const filteredByIncludeText = this.filterTasksByIncludeText(textFilter, tasks);
        const filteredByDoneAndIncludeText = this.filterTasksByIncludeText(textFilter, filteredByDone);

        if (doneFilter && !textFilter && !sortFilter) { 
            return this.filterTasksByDone(doneFilter, tasks);
        } else if (!doneFilter && textFilter && !sortFilter) {
            return this.filterTasksByIncludeText(textFilter, tasks);
        } else if (!doneFilter && !textFilter && sortFilter) {
            return this.sortTasksByImportance(sortFilter, tasks);
        } else if (doneFilter && textFilter && !sortFilter) {
            return this.filterTasksByIncludeText(textFilter, filteredByDone);
        } else if (doneFilter && !textFilter && sortFilter) {
            return this.sortTasksByImportance(sortFilter, filteredByDone)
        } else if (!doneFilter && textFilter && sortFilter) {
            return this.sortTasksByImportance(sortFilter, filteredByIncludeText)
        } else if (doneFilter && textFilter && sortFilter) {
            return this.sortTasksByImportance(sortFilter, filteredByDoneAndIncludeText)
        } else {return tasks}
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        const {doneFilter, textFilter, sortFilter} = this.state; 
     
        return(
            <>
            <h3>TaskManagerGery</h3>
            <TaskEditor onAddTask={text=>this.handleAddTask(text)}/>
            <TaskFilter 
              doneFilter={doneFilter}
              textFilter={textFilter}
              sortFilter={sortFilter}
              onDoneFilter={this.handleDoneFilter}
              onTextAndImportanceFilter={this.handleTextAndImportanceFilter}
            />
            <TaskListGary 
              tasks={this.filterTasks()} 
              onClose={this.handleRemoveTask}
              onStatusChange={this.handleStatusChange}
            />
            </>
            )
    }
}