import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import QueuesContainer from "../QueuesContainer";
import {loginStudMock, queuesInf} from "../../utils/mockData";


function Dashboard() {
    return (
        <React.Fragment>
            <AppBar login={loginStudMock} userType={"stud"}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesContainer queues={queuesInf.queues} action={"studSignup"}/>
        </React.Fragment>

    );
}

export default Dashboard
