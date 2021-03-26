import React from 'react';
import '../styles/Accueil.scss';

let ouvert = false;
function openNav(){
    const element = document.getElementsByClassName("nav");
    for (let i=0 ;i<element.length; i++){
        element[i].classList.remove("small");
}
ouvert=true;
}
function toogleNav(){
  const e = document.getElementsByClassName("nav");
  
  if(ouvert){
    for (let i=0 ;i<e.length; i++) e[i].classList.add("small");
  }else{
    for (let i=0 ;i<e.length; i++) e[i].classList.remove("small");
  }
  ouvert=!ouvert
}
function handleChange(){
  console.log ();
}
export default function Accueil (){
    return <> 
        <div className="container" onClick={toogleNav} onMouseEnter={openNav}>
        <div id="navMenu" className="diamond">
          <div id="mainRotCorrect" className="rotCorrect">👋🏻</div>
        </div>
        <div id="nav1" className="nav nav1 diamond small">
          <div className="rotCorrect">⏰</div>
        </div>
        <div id="nav2" className="nav nav2 diamond small">
          <div className="rotCorrect">💬</div>
        </div>
        <div id="nav3" className="nav nav3 diamond small">
          <div className="rotCorrect" onMouseOver={handleChange}>🏠</div>
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