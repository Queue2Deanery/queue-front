import React from 'react';
import AppBar from "./AppBar";
import QueuesContainer from "./QueuesContainer";
import Container from "@material-ui/core/Container";
import {queuesSample} from "../utils/mockData"

function Welcome() {
    return (
        <React.Fragment>
            <AppBar userType={"stud"}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Aktywne kolejki do dziekanatu:</h3>
            </Container>
            <QueuesContainer queues={queuesSample.queues}/>
        </React.Fragment>
    );
}

export default Welcome
