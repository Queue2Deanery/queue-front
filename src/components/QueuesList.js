import React from 'react';
import {Grid} from "@material-ui/core";
import QueueItem from "./QueueItem";
import Container from "@material-ui/core/Container";
import "./styles.css";

function QueuesList() {
    return (
        <React.Fragment>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Aktywne kolejki do dziekanatu:</h3>
            </Container>
            <Container maxWidth="lg" component="main">
                <Grid container spacing={10} alignItems={"center"} justify={"space-evenly"}>
                    <Grid item xs={12} md={6} lg={4}>
                        <QueueItem/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <QueueItem/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <QueueItem/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <QueueItem/>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default QueuesList
