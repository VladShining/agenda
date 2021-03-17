import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Forofor from './pages/Forofor';
import Authentification from './components/Authentification';

export default class RouterOutlet extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/profil" component={Profil}/>
                        <Route path="/auth" component={Authentification}/>
                        <Route component={Forofor}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
