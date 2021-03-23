import React from 'react';
import '../styles/Accueil.scss';
import Header from './shared/Header';

function openNav(){
    const element = document.getElementsByClassName("nav");
    for (let i=0 ;i<element.length; i++){
    if(element[i].classList.contains("small"))
        element[i].classList.remove("small");
    else
        element[i].classList.add("small");
}
}
function handleChange(){
  console.log ();
}
export default function Accueil (){
    return <> 
        {/* <Header/> */}
        {/* <Auth/> */}
        {/* <h1>hello 👋 </h1> */}
        <div className="container">
        <div id="navMenu" className="diamond" onClick={openNav}>
          <div id="mainRotCorrect" className="rotCorrect">👋</div>
        </div>
        <div id="nav1" className="nav nav1 diamond small">
          <div className="rotCorrect">⏰</div>
        </div>
        <div id="nav2" className="nav nav2 diamond small">
          <div className="rotCorrect">💬</div>
        </div>
        <div id="nav3" className="nav nav3 diamond small">
          <div className="rotCorrect" onMouseEnter={handleChange}>🏠</div>
        </div>
        <div id="nav4" className="nav nav4 diamond small">
          <div className="rotCorrect">🗓️</div>
        </div>
        <div id="nav5" className="nav nav5 diamond small">
          <div className="rotCorrect">🚀</div>
        </div>
      </div>
        </>
}