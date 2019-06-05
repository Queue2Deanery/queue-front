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
import QueueCardAction from "./QueueCardAction";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardContent: {
        paddingTop: 0,
        paddingBottom: 0,
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
            <CardContent className={classes.cardContent}>
                <Table>
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
                <QueueCardAction userType={props.userType}/>
            </CardActions>
        </Card>
    );
}

export default QueueItem