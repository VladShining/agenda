import React from 'react';
import Clock from '../../components/Clock';
import firebase from 'firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom';

const Header = ()=> {
    return (
        <div className="headers">
            <Link to="/">Home</Link>
            <Link to="/Profil">Profil</Link> 
            <Link to="/board">Board</Link>
            
            <button onClick={()=>firebase.auth().signOut()}>LogOut</button>
            <Clock/>
        </div>
    )
}

export default Header;