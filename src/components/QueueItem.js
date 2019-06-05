import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import {CardActions} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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

function QueueItem(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                title={props.queue.title}
                titleTypographyProps={{align: 'center'}}
                className={classes.cardHeader}
            />
            <CardContent>
                <Table className={classes.table}>
                    <colgroup>
                        <col style={{width: '20%'}}/>
                        <col style={{width: '40%'}}/>
                        <col style={{width: '40%'}}/>
                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pozycja</TableCell>
                            <TableCell>Numer indeksu</TableCell>
                            <TableCell>Przewidywany czas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.queue.people.map((person, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{person.id}</TableCell>
                                <TableCell>{person.time}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardActions>
                <Grid container justify={"center"}>
                    {(props.userType === "prac") ?
                        < Button component={Link} to="/prac/panel"
                                 color={"primary"} variant={"contained"}>Wybierz</Button>
                        :
                        <Button component={Link} to="/stud/signupqueue"
                                color={"primary"} variant={"contained"}>Zapisz się</Button>
                    }
                </Grid>
            </CardActions>
        </Card>
    );
}

export default QueueItem