import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import React from "react";

/**
 * @return {null}
 */
function QueueCardAction(props) {
    if (props.userType === "stud") {
        return (
            <Grid container justify={"center"}>
                <Button component={Link} to="/stud/signupqueue"
                        color={"primary"} variant={"contained"}>Zapisz się</Button>
            </Grid>
        );
    } else if (props.userType === "dean") {
        return (
            <Grid container justify={"center"}>
                <Button component={Link} to="/dean/panel"
                        color={"primary"} variant={"contained"}>Wybierz</Button>
            </Grid>
        );
    } else {
        return null;
    }
}

export default QueueCardAction;