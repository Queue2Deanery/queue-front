import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueuesContainer from "../QueuesContainer";
import {loginMock, queuesSample} from "../mockData";


function Dashboard() {
    return (
        <React.Fragment>
            <AppBar login={loginMock}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesContainer queues={queuesSample.queues} action={"studSignup"}/>
        </React.Fragment>

    );
}

export default Dashboard
