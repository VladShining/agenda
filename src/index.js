import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import firebaseConfig from './services/config';

let Main = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
firebase.initializeApp(firebaseConfig);
setInterval(Main,1000);
reportWebVitals();
 