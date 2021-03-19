import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import   './Task.scss'

const Container = styled.div`
    background-color: ${props => (props.isDragging && 'blue')};
`;
    

export default class Task extends Component {
    render() {
        return( 
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided,snapshot)=>(
            <Container 
                className='task'
                ref={provided.innerRef} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}  //ito no midesignez ny element andraisana azy (handle)
                isDragging={snapshot.isDragging}
            >{this.props.task.content}
            
            </Container>
            
            )}
        </Draggable>
        );
    }  
}
