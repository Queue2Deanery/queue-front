import React from 'react';
import StudentAppBar from "./AppBar";
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IssuePicker from "./IssuePicker";

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
            <StudentAppBar/>
            <Container maxWidth="lg" className={"listTitleContainer"}>
                <h3>Zapisz się do kolejki:</h3>
            </Container>
            <Container maxWidth="lg">
                <Card>
                    <CardHeader
                        title={tier.title}
                        titleTypographyProps={{align: 'center'}}
                        subheaderTypographyProps={{align: 'center'}}
                        className={classes.cardHeader}
                    />
                    <CardContent>
                        <Grid container>
                            <Grid item xs={3}>
                                Typ sprawy:
                            </Grid>
                            <Grid item xs={9}>
                                <IssuePicker/>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3}>
                                Czas oczekiwania:
                            </Grid>
                            <Grid item xs={9}>
                                <h3>Placeholder2</h3>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justify={"center"}>
                            <Button>Zapisz do kolejki</Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default SignupQueue
