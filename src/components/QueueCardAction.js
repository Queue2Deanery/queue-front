import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import React from "react";

/**
 * @return {null}
 */
function QueueCardAction(props) {
    if (props.action === "studSignup") {
        return (
            <Grid container justify={"center"}>
                <Button component={Link} to="/stud/signupqueue"
                        color={"primary"} variant={"contained"}>Zapisz się</Button>
            </Grid>
        );
    } else if (props.action === "deanSelect") {
        return (
            <Grid container justify={"center"}>
                <Button component={Link} to="/dean/panel"
                        color={"primary"} variant={"contained"}>Wybierz</Button>
            </Grid>
        );
    } else if (props.action === "studResign") {
        return (
            <Grid container justify={"center"}>
                <Button component={Link} to="/stud/dashboard"
                        color={"primary"} variant={"contained"}>Zrezygnuj z oczekiwania</Button>
            </Grid>
        );
    } else {
        return null;
    }
}

export default QueueCardAction;