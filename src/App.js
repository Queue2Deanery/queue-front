import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {
    DashboardWrapper,
    MainPanelWrapper,
    SelectQueueWrapper,
    SignInWrapperDean,
    SignInWrapperStud,
    SignUpQueueWrapper, WaitWrapper,
    WelcomeWrapper
} from "./components/MuiWrappers";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/stud/welcome" component={WelcomeWrapper}/>
                <Route exact path="/stud/signin" component={SignInWrapperStud}/>
                <Route exact path="/stud/dashboard" component={DashboardWrapper}/>
                <Route exact path="/stud/signupqueue" component={SignUpQueueWrapper}/>
                <Route exact path="/stud/wait" component={WaitWrapper}/>
                <Route exact path="/dean/signin" component={SignInWrapperDean}/>
                <Route exact path="/dean/selectqueue" component={SelectQueueWrapper}/>
                <Route exact path="/dean/panel" component={MainPanelWrapper}/>
                <Redirect from="/" to={"/stud/welcome"}/>
            </Switch>
        </Router>
    );
}

export default App;
