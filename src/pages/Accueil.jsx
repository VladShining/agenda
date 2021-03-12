import React from 'react';
import '../styles/Accueil.scss';
import Header from './shared/Header';
import Footers from './shared/Footers';
import Auth from '../components/Authentification';

export default function Accueil (){
    return <> 
        <Header/>
        <h1> it's Accueil </h1> 
        <Auth/>
        <Footers/>
        </>
}