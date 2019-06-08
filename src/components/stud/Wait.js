import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueueItem from "../QueueItem";
import {loginStudMock, queuesInfWait} from "../../utils/mockData";

function Wait() {
    return (
        <React.Fragment>
            <AppBar login={loginStudMock} userType={"stud"}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
                <QueueItem queue={queuesInfWait.queues[0]} waiting={6} action={"studResign"}/>
            </Container>

        </React.Fragment>

    );
}

export default Wait
