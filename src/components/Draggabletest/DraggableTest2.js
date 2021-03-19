import React, { Component } from 'react'
import initialData from './initData';
import Column from './Column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';

class DraggableTest2 extends Component{
    state = initialData;
    onDragEnd = result =>{
        console.log(result);
        const {destination,source,draggableId }=result;
        if(!destination){
            return;
        }
        if( destination.droppableId === source.droppableId &&
            destination.index === source.index
            ){
                return;

        }
        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn= {
            ...column,
            taskIds:newTaskIds,
        };
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]:newColumn,
            },
        };
         this.setState(newState);
        console.log (newColumn)

    };
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

export default DraggableTest2;
