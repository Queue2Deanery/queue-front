import React from 'react';
import AppBar from "../AppBar";
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid/index";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IssuePicker from "./IssuePicker";
import "../styles.css";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    }
}));

const tier =
    {
        title: 'Informatyka',
        queueList: ['3min', '7min', '8min', '8min']
    };

function SignupQueue() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar/>
            <Container maxWidth="lg">
                <h3 className={"listTitleContainer"}>Zapisz się do kolejki:</h3>
                <Card>
                    <CardHeader
                        title={tier.title}
                        titleTypographyProps={{align: 'center'}}
                        subheaderTypographyProps={{align: 'center'}}
                        className={classes.cardHeader}
                    />
                    <CardContent>
                        <Grid container className={'singupqueue'}>
                            <Grid item xs={12} sm={3}>
                                Typ sprawy:
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <IssuePicker/>
                            </Grid>
                        </Grid>
                        <Grid container className={'singupqueue'}>
                            <Grid item xs={12} sm={3}>
                                Czas oczekiwania:
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <h3>133min</h3>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justify={"center"}>
                            <Button component={Link} to="/stud/dashboard" color={"primary"} variant={"contained"}>Zapisz
                                do kolejki</Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default SignupQueue
