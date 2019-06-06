import React from 'react';
import {Grid} from "@material-ui/core";
import QueueItem from "./QueueItem";
import Container from "@material-ui/core/Container";

function QueuesContainer(props) {
    return (
        <Container maxWidth="lg" component="main">
            <Grid container spacing={10} justify={"space-evenly"}>
                {props.queues.map((queue) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <QueueItem queue={queue} userType={props.userType}/>
                    </Grid>))}
            </Grid>
        </Container>
    );
}

export default QueuesContainer
