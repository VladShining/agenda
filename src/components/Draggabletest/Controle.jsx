// import React, { Component } from 'react'
// import initialData from './initData';
// import useState from 'react';

// class Controle extends Component {
//     retour = this.state
//     usePush=()=>{
    
//         var el =document.getElementById('enter').value
//         // localStorage.setItem(el,el)
        
//         // eslint-disable-next-line
//         // this.state.tasks={
//         //     ...this.state.tasks,
//         //     [el]:{id:el,content:el}
//         // }
//         const newtask = {
//             ...this.props.etat,
//             tasks:{
//             ...this.props.etat.tasks,
//             [el]:{id:el,content:el}
//             }
//         }
//         this.setState(newtask)
//         this.props.etat.columns['column-1'].taskIds.push(el)
//         this.props.etat=this.state
//         // console.log(el); 
//         // console.log(window.localStorage)
//         // console.log (this.props.etat);
//     }
//      useColonePush=()=>{
    
//         var el =document.getElementById('col').value
//         // localStorage.setItem(el,el)
//         // eslint-disable-next-line
//        const newColumn ={
//            ...this.state,
//            columns:{
//             ...this.state.columns,
//             [el]:{id:el,title:el,taskIds:[]}
//            }
//         }
//         this.setState(newColumn)
//         this.state.columnOrder.push(el);
//         this.props.etat=this.state
//         // console.log(el.taskIds); 
//         // console.log(window.localStorage)
//         // console.log (this.state);
//     }
    
//     render(){
//     return (
//         <div>
//             {this.retour}
        
//             {/* {console.log(this.props.etat)} */}
//             <input type='text' id='enter' required />
//                 <button onClick={this.usePush} >
//                     push 
//                 </button>
//                 <input type='text' id='col' required />
//                 <button onClick={this.useColonePush} >
//                     pushCOlone 
//                 </button>
//         </div>
//     )
// }

// }
// export default Controle;