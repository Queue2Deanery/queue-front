import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React from "react";

const paperStyle = {
    "padding": "15px",
};

function QueueControl(props) {
    const time = props.people[props.people.length-1].time;

    return (
        <Paper style={paperStyle}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    Liczba oczekujących:
                </Grid>
                <Grid item xs={12} sm={6}>
                    {props.people.length}
                </Grid>
                <Grid item xs={12} sm={6}>
                    Łączny czas
                </Grid>
                <Grid item xs={12} sm={6}>
                    {time}
                </Grid>
                <Grid item xs={12} sm={3}>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button variant={"outlined"} color={"primary"}>Wstrzymaj</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button variant={"outlined"} color={"primary"}>Zatrzymaj zapisy</Button>
                </Grid>
            </Grid>
        </Paper>);
}

export default QueueControl