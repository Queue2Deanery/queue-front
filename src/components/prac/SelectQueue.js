import React from 'react';
import StudentAppBar from "../AppBar";
import Container from "@material-ui/core/Container/index";
import QueuesList from "../QueuesList";

function SelectQueue() {
    return (
        <React.Fragment>
            <StudentAppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Twoje kolejki:</h3>
            </Container>
            <QueuesList/>
        </React.Fragment>

    );
}

export default SelectQueue
