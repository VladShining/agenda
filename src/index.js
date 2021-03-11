import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let Main = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
setInterval(Main,1000);
reportWebVitals();
 