import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";

const paperStyle = {
    "padding": "15px",
};

function UserData(props) {
    return (
        <Paper style={paperStyle}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    Numer indeksu:
                </Grid>
                <Grid item xs={12} sm={8}>
                    {props.userId}
                </Grid>
                <Grid item xs={12} sm={4}>
                    Typ sprawy:
                </Grid>
                <Grid item xs={12} sm={8}>
                    {props.issue}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default UserData