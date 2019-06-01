import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueuesList from "../QueuesList";

function Dashboard() {
    return (
        <React.Fragment>
            <AppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesList userType={"stud"}/>
        </React.Fragment>

    );
}

export default Dashboard
