import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default class Task extends Component {
    render() {
        return( 
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided)=>(
            <div ref={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                
            >{this.props.task.content}</div>
            
            )}
        </Draggable>
        );
    }  
}
