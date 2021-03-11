import React from 'react';
import '../styles/Accueil.scss';
import Header from './shared/Header';
import Footers from './shared/Footers';

export default function Accueil (){
    return <> 
        <Header/>
        <h1> it's Accueil </h1> 
        <Footers/>
        </>
}