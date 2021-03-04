import React, {Component} from 'react';
import TaskList from './TaskList';
export default class App extends React.Component {
constructor(props){
super(props)
this.state = {
    task : '',
    taskList : []
}
this.handleDelete = this.handleDelete.bind(this)
}  

handleChange = (e)=>{
this.setState({
    task : e.target.value
})
}
handleSubmit = (e)=>{
 if(this.state.task!= ''){
const userTask = {
    id: Math.random(),
    task : this.state.task,
    done: false
}
const taskList = [...this.state.taskList]; 
taskList.push(userTask); 
this.setState({ task: '' });
this.setState({ 
    taskList, 
    task:""
  });
 
 }
 
e.preventDefault();
}

handleDelete (itemToBeDeleted) {
    var newItems = this.state.taskList.filter( (taskList) => {
      return taskList.id != itemToBeDeleted
    } )
    this.setState({ taskList: newItems });
  }
  handleDone (itemToBeMarkAsDone) {
var _taskList = this.state.taskList;
var todo = _taskList.filter((todo)=>{
    return todo.id === itemToBeMarkAsDone;
})[0]
todo.done = !todo.done;
this.setState({taskList : _taskList})
  }
  handleClearCompleted(){
      var newTaskList = this.state.taskList.filter((todo) =>{return !todo.done})
      this.setState({taskList:newTaskList })
  }
  render(){
        return( 
            <>
        <div className = "content">
        <div class = "taskContent">
        <form onClick = {this.handleSubmit}>
            <input className = "task" type = "text" value = {this.state.task} placeholder = "Enter the task" onChange = {this.handleChange}/>
            <input className = "addBtn" type = "submit" value = "Add"/>
        </form>
        </div>
        <div class = "taskStatus">
        <p>All : {this.state.taskList.length} | </p>
        <p>Done : {this.state.taskList.filter((taskList) =>{return taskList.done }  ).length} | </p>
        <p>Pending : {this.state.taskList.filter((taskList) =>{return !taskList.done }  ).length} | </p>
      
        <button onClick = {this.handleClearCompleted.bind(this)}>Clear Completed</button>
        </div>
        </div>
        <TaskList 
        handleDone = {this.handleDone.bind(this)}
         handleDelete={this.handleDelete.bind(this)}
        taskList = {this.state.taskList}
        />
        </>
        )
       
    }
}

