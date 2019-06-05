import React from 'react';
import AppBar from "./AppBar";
import QueuesContainer from "./QueuesContainer";
import Container from "@material-ui/core/Container";
import {queuesSample} from "./mockData"

function Welcome() {
    return (
        <React.Fragment>
            <AppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Aktywne kolejki do dziekanatu:</h3>
            </Container>
            <QueuesContainer queues={queuesSample.queues}/>
        </React.Fragment>
    );
}

export default Welcome
