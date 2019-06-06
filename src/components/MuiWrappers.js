import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Welcome from "./Welcome";
import React from "react";
import SignupQueue from "./stud/SignupQueue";
import Dashboard from "./stud/Dashboard";
import SignIn from "./SingIn";
import MainPanel from "./dean/MainPanel";
import SelectQueue from "./dean/SelectQueue";
import Wait from "./stud/Wait";


const studTheme = createMuiTheme({
    palette: {
        primary: {main: '#1f2bb8'},
        secondary: {main: '#dfeafa'}

    }
});

const deanTheme = createMuiTheme({
    palette: {
        primary: {main: '#19a719'},
        secondary: {main: '#e8fae3'}

    }
});

function WelcomeWrapper() {
    return (
        <MuiThemeProvider theme={studTheme}>
            <Welcome/>
        </MuiThemeProvider>
    );
}

function SignInWrapperStud() {
    return (
        <MuiThemeProvider theme={studTheme}>
            <SignIn userType={"stud"}/>
        </MuiThemeProvider>
    );
}

function DashboardWrapper() {
    return (
        <MuiThemeProvider theme={studTheme}>
            <Dashboard/>
        </MuiThemeProvider>
    );
}

function SignUpQueueWrapper() {
    return (
        <MuiThemeProvider theme={studTheme}>
            <SignupQueue/>
        </MuiThemeProvider>
    );
}

function WaitWrapper() {
    return (
        <MuiThemeProvider theme={studTheme}>
            <Wait/>
        </MuiThemeProvider>
    );
}

function SignInWrapperDean() {
    return (
        <MuiThemeProvider theme={deanTheme}>
            <SignIn userType={"dean"}/>
        </MuiThemeProvider>
    );
}

function SelectQueueWrapper() {
    return (
        <MuiThemeProvider theme={deanTheme}>
            <SelectQueue/>
        </MuiThemeProvider>
    );
}

function MainPanelWrapper() {
    return (
        <MuiThemeProvider theme={deanTheme}>
            <MainPanel/>
        </MuiThemeProvider>
    );
}

export {
    WelcomeWrapper, SignInWrapperStud, DashboardWrapper, SignUpQueueWrapper, WaitWrapper,
    SignInWrapperDean, SelectQueueWrapper, MainPanelWrapper
};