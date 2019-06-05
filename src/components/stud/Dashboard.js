import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueuesContainer from "../QueuesContainer";
import {queuesSample} from "../mockData";

function Dashboard() {
    return (
        <React.Fragment>
            <AppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesContainer queues={queuesSample.queues} userType={"stud"}/>
        </React.Fragment>

    );
}

export default Dashboard
