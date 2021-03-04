import React, {Component} from 'react';
export default class DisplayItem extends React.Component {

render(){
    var taskList = this.props.taskList
    var task = taskList.task
    return(
        <li>
       <input 
       className = "form-group "
       type= "checkbox"
        checked = {taskList.done}
        onChange = {this.props.handleDone.bind(null, taskList.id)}
        />
        <label for="checkboxInputOverride"></label>
        <div>{task}</div>
    <button onClick = {this.props.handleDelete.bind(null, taskList.id)}>X</button>
    </li>
        )
}
}