import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueueItem from "../QueueItem";
import {loginMock, queuesSample} from "../mockData";

function Wait() {
    return (
        <React.Fragment>
            <AppBar login={loginMock}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
                <QueueItem queue={queuesSample.queues[0]} waiting={2} action={"studResign"}/>
            </Container>

        </React.Fragment>

    );
}

export default Wait
