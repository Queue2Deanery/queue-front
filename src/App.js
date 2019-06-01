import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import SingInRoute from "./components/SingInRoute";
import DashboardRoute from "./components/DashboardRoute";
import WelcomeRoute from "./components/WelcomeRoute";

function App() {
    return (
        <Router>
            <Route exact path="/singin" component={SingInRoute}/>
            <Route exact path="/welcome" component={WelcomeRoute}/>
            <Route exact path="/dashboard" component={DashboardRoute}/>
        </Router>
    );
}

export default App;
