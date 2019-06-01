import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Dashboard from "./components/stud/Dashboard";
import SignIn from "./components/SingIn";
import SignupQueue from "./components/stud/SignupQueue";
import SelectQueue from "./components/prac/SelectQueue";
import MainPanel from "./components/prac/MainPanel";

function App() {
    return (
        <Router>
            <Route exact path="/stud/welcome" component={Welcome}/>
            <Route exact path="/stud/signin" component={SignIn}/>
            <Route exact path="/stud/dashboard" component={Dashboard}/>
            <Route exact path="/stud/signupqueue" component={SignupQueue}/>
            <Route exact path="/prac/singin" component={SignIn}/>
            <Route exact path="/prac/selectqueue" component={SelectQueue}/>
            <Route exact path="/prac/panel" component={MainPanel}/>
        </Router>
    );
}

export default App;
