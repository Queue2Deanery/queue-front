import React from 'react';
import AppBar from "../../AppBar";
import Container from "@material-ui/core/Container/index";
import Grid from "@material-ui/core/Grid/index";
import Button from "@material-ui/core/Button/index";
import {loginDeanMock, queuesSample} from "../../../utils/mockData";
import UserData from "./UserData";
import QueueControl from "./QueueControl";
import QueueTable from "./QueueTable";


const nextButtonStyle = {
    "padding": "30px",
    "min-width": "100%",
};

const queue = queuesSample.queues[0];

function MainPanel() {
    return (
        <React.Fragment>
            <AppBar login={loginDeanMock} userType={"dean"}/>
            <Container maxWidth="lg">
                <h3>{queue.title}</h3>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <UserData userId={queue.people[0].id} issue={queue.people[0].issue}/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <QueueControl people={queue.people}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button color="primary" variant="contained">Poprzedni</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="primary" variant="contained" size={"large"}
                                        style={nextButtonStyle}>Następny</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <QueueTable people={queue.people}/>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default MainPanel
