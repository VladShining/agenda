import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Forofor from './pages/Forofor';
import Authentification from './components/Authentification';
import Calendar from './components/Calendar';
import Accueil from './pages/Accueil';

export default class RouterOutlet extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={Accueil}/>
                        <Route path="/profil" component={Profil}/>
                        {/* <Route path="/calendar" component={Calendar}/> */}
                        <Route path="/auth" component={Authentification}/>
                        <Route component={Forofor}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
