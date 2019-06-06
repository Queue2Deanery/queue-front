import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueueItem from "../QueueItem";
import {queuesSample} from "../mockData";

function Wait() {
    return (
        <React.Fragment>
            <AppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
                <QueueItem queue={queuesSample.queues[0]} waiting={2}/>
            </Container>

        </React.Fragment>

    );
}

export default Wait
