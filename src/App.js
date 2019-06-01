import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SingIn";
import SignupQueue from "./components/SignupQueue";

function App() {
    return (
        <Router>
            <Route exact path="/stud/welcome" component={Welcome}/>
            <Route exact path="/stud/signin" component={SignIn}/>
            <Route exact path="/stud/dashboard" component={Dashboard}/>
            <Route exact path="/stud/signupqueue" component={SignupQueue}/>
        </Router>
    );
}

export default App;
