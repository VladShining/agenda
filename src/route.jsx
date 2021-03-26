import React from 'react'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Profil from './pages/Profil';
import Forofor from './pages/Forofor';
import Authentification from './components/Authentification';
import Accueil from './pages/Accueil';
import Header from './pages/shared/Header';
import Board from './components/board/Board';

export default function RouterOutlet(){
    
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Accueil}/>
                        <Route path="/board" component={Board}/>
                        <Route path="/profil" component={Profil}/>
                        <Route path="/auth" component={Authentification}/>
                        <Route component={Forofor}/>
                    </Switch>
                </Router>
            </div>
        )
    
}
