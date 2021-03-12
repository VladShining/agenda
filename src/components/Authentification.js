import React, { Component } from 'react';
import firebase from 'firebase';
import "firebase/auth";

export default class Auth extends Component {
    constructor (props){
        super (props)
        this.state = {
            user : {
                
            }
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        firebase.auth().onAuthStateChanged((user)=> {
            if(user)
                this.setState({user})
            else
                this.setState({user:null})
        })
    }

    render(){
        return (
            <div>
               
            </div>
        )
    }
}