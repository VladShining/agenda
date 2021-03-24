import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Profil from './pages/Profil';
import Forofor from './pages/Forofor';
import Authentification from './components/Authentification';
import Accueil from './pages/Accueil';
import Header from './pages/shared/Header';
import DraggableTest2 from './components/Draggabletest/DraggableTest2';

export default class RouterOutlet extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Accueil}/>
                        <Route path="/board" component={DraggableTest2}/>
                        <Route path="/profil" component={Profil}/>
                        <Route path="/auth" component={Authentification}/>
                        <Route component={Forofor}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
