import React, {Component} from 'react';
import DisplayItem from './DisplayItem'
export default class TaskList extends React.Component {


render(){
    return(
        <ul>
        {this.props.taskList.map((taskList) =>(
            <DisplayItem taskList = {taskList}
            key = {taskList.id}
            handleDone={this.props.handleDone.bind()}
            handleDelete={this.props.handleDelete.bind()}
            />
        ))}
        
        </ul>
    )
}
}