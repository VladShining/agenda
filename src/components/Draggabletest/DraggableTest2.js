import React, { Component } from 'react'
import initialData from './initData';
import Column from './Column.jsx';

class DraggableTest2 extends Component{
    state = initialData;
    render(){
        return this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks=column.taskIds.map(taskId => this.state.tasks[taskId]);

            return (<Column key={column.id} column={column} tasks={tasks} /> );

        })
    }
}

export default DraggableTest2
