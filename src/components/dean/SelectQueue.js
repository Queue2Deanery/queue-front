import React from 'react';
import StudentAppBar from "../AppBar";
import Container from "@material-ui/core/Container/index";
import QueuesContainer from "../QueuesContainer";
import {queuesSample} from "../mockData";

function SelectQueue() {
    return (
        <React.Fragment>
            <StudentAppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesContainer queues={queuesSample.queues} userType={"dean"}/>
        </React.Fragment>

    );
}

export default SelectQueue
