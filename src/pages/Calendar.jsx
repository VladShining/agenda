import React from 'react';
import './Calendar.scss';
import Grille from './Elements/Layout/View';

function Calendar() {
    const title = 'Calendar';
    const tagTitle = <>{title}</>;
    return <> <h1>{tagTitle}</h1> 
        Heure : {new Date().toLocaleTimeString()} <br/>
        Date : {new Date().toLocaleDateString()}
        <Grille myProps="49" yourProps="56"/>
    </>
}

export default Calendar;