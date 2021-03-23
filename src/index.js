import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import firebaseConfig from './services/config';
// eslint-disable-next-line
const Main = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      document.getElementById('root')
    );
 }
firebase.initializeApp(firebaseConfig);
setInterval(Main,100);
reportWebVitals();
 