import React, { Component } from 'react'
import {Droppable } from 'react-beautiful-dnd';
import Task from './Task'

export default class Column extends Component {
  
       render() {
        return (
        <div>
            {this.props.column.title}
            <Droppable droppableId={this.props.column.id}>
            {(provided)=>(
                <div ref={provided.innerRef} 
                    {...provided.droppableProps}                 
                >
                    {this.props.tasks.map((task,index) => (
                    <Task key={task.id} task={task} index={index} />
                ))
                    }
                    {provided.placeholder}
                </div>
            )}
            
            </Droppable>
           
        </div>
        );
    }
}
