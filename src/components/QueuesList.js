import React from 'react';
import {Grid} from "@material-ui/core";
import QueueItem from "./QueueItem";
import Container from "@material-ui/core/Container";
import "./styles.css";

function QueuesList(props) {
    return (
        <Container maxWidth="lg" component="main">
            <Grid container spacing={10} alignItems={"center"} justify={"space-evenly"}>
                <Grid item xs={12} md={6} lg={4}>
                    <QueueItem userType={props.userType}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <QueueItem userType={props.userType}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <QueueItem userType={props.userType}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <QueueItem userType={props.userType}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default QueuesList
