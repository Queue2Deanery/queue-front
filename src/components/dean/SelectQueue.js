import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container/index";
import QueuesContainer from "../QueuesContainer";
import {loginMock, queuesSample} from "../mockData";

function SelectQueue() {
    return (
        <React.Fragment>
            <AppBar login={loginMock}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesContainer queues={queuesSample.queues} action={"deanSelect"}/>
        </React.Fragment>

    );
}

export default SelectQueue
