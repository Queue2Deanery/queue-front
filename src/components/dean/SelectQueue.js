import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container/index";
import QueuesContainer from "../QueuesContainer";
import {loginDeanMock, deanSelect} from "../../utils/mockData";

function SelectQueue() {
    return (
        <React.Fragment>
            <AppBar login={loginDeanMock} userType={"dean"}/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesContainer queues={deanSelect.queues} action={"deanSelect"}/>
        </React.Fragment>

    );
}

export default SelectQueue
