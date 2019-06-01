import React from 'react';
import StudentAppBar from "./AppBar";
import QueuesList from "./QueuesList";
import Container from "@material-ui/core/Container";

function Welcome() {
    return (
        <React.Fragment>
            <StudentAppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Aktywne kolejki do dziekanatu:</h3>
            </Container>
            <QueuesList/>
        </React.Fragment>
    );
}

export default Welcome
