import React, { Component } from 'react'
import initialData from './initData';
import Column from './Column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';

class DraggableTest2 extends Component{
    state = initialData;
    onDragEnd = result =>{
        
    }
    render(){
        return (
        <DragDropContext
        // onDragStart
       onDragEnd={this.onDragEnd}
        >
       { this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks=column.taskIds.map(taskId => this.state.tasks[taskId]);

            return (<Column key={column.id} column={column} tasks={tasks} /> );
           
        })}
         </DragDropContext>
            );
    }
}

export default DraggableTest2
