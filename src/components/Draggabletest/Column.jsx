import React, { Component } from 'react'
import Task from './Task'
export default class Column extends Component {
    constructor (props){
        super (props);
    }
       render() {
        return (
        <div>
            {this.props.column.title}
            <div>
            {this.props.tasks.map(task => <Task key={task.id} task={task} /> )}
            </div>
           
        </div>
        );
    }
}
