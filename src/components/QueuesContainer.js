import React from 'react';
import {Grid} from "@material-ui/core";
import QueueItem from "./QueueItem";
import Container from "@material-ui/core/Container";

function QueuesContainer(props) {
    return (
        <Container maxWidth="lg" component="main">
            <Grid container spacing={10} justify={"space-evenly"}>
                {props.queues.map((queue, index) => (
                    <Grid key={index} item xs={12} md={6} lg={4}>
                        <QueueItem queue={queue} action={props.action}/>
                    </Grid>))}
            </Grid>
        </Container>
    );
}

export default QueuesContainer
