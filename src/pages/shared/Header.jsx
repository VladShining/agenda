import React from 'react';
import Clock from '../../components/Clock';
import firebase from 'firebase';
import 'firebase/auth';

const Header = ()=> {
    return <div className="headers">
        <h1>header</h1>
        <Link to ="/">Home</Link>
        <Link to ="/Profil">Profil</Link> 
        <button onClick={()=>firebase.auth().signOut()}>LogOut</button>
        <Clock/>
    </div>
}

export default Header;