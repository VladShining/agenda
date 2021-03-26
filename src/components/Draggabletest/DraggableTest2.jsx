import React, { Component } from 'react'
import initialData from '../../services/mock/initData';
import Column from './Column.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import {v4 as uuidv4 } from 'uuid';

class DraggableTest2 extends Component{
    state = initialData;
    addTask=()=>{
        var el =document.getElementById('task').value
        if(el){
        const elID=uuidv4()
        const newtask = {
            ...this.state,
            tasks:{
            ...this.state.tasks,
            [elID]:{id:elID,content:el}
            }
        }
        this.setState(newtask)
        this.state.columns['column-1'].taskIds.push(elID)
        }
    }
    removeTask=(id)=>{
        const elem= this.state.columns
        const el= Object.values(elem)
        for(let i=0 ;i<el.length;i++)
        {
            el[i].taskIds=el[i].taskIds.filter(ele=>ele!==id)
            
        }
    
    }
    addColumn=()=>{
    
       var el =document.getElementById('column').value
       if(el){
       const colID=uuidv4()
       const newColumn ={
           ...this.state,
           columns:{
            ...this.state.columns,
            [colID]:{id:colID,title:el,taskIds:[]}
           }
        }
        this.setState(newColumn)
        this.state.columnOrder.push(colID);
         }
    }
    
    onDragStart=()=>{
        document.body.style.transition = 'background-color 0.2s ease';
    }
    onDragUpdate=(update)=>{
        const {destination}=update;
        const opacity = destination ? destination.index / Object.keys(this.state.tasks).length :0;
        document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
    }
    onDragEnd = result =>{
        document.body.style.backgroundColor ='inherite'
    //    this.removeTask()   tsy fantatra mazava
        const {destination,source,draggableId }=result;
        if(!destination){ 
            return;
        }
        if( destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){ 
                return;
        }
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if(start===finish){
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index,1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn= {
                ...start,
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
             return;
        }
        
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index,1);
        const newStart = {
            ...start,
            taskIds:startTaskIds,
        };
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index,0,draggableId);
        const newFinish = {
            ...finish,
            taskIds:finishTaskIds,
        };
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]:newStart,
                [newFinish.id]:newFinish,
            },
        };
        this.setState(newState);
    };
    componentDidMount() {
       this.load = setInterval(
          () => this.tick(),
          100
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.load);
    }
    
    tick() {
        this.setState(this.state);
    }

    render(){
        return (
            <>
        <DragDropContext
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
        >
            {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks=column.taskIds.map(taskId => this.state.tasks[taskId]);
            return (<Column key={column.id} column={column} tasks={tasks} delete={this.removeTask.bind(this)}/> );
        })}
        </DragDropContext>
        <div>
                <input type='text' id='task' required/>
                <button onClick={this.addTask} id="detect">
                    Ajout Tache 
                </button>
                <input type='text' id='column' required/>
                <button onClick={this.addColumn} >
                    Nouveau Colonne 
                </button>
        </div>
        {/* <Controle etat={this.state}/> */}
        {/* mila remontena ny etat vo mety io ↑ */}
        </>
            );
    }
}

export default DraggableTest2;
