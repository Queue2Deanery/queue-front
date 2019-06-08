import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const paperStyle = {
    "padding": "15px",
};

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


function QueueTable(props) {
    const classes = useStyles();
    return (
        <Paper style={paperStyle}>
            <Table className={classes.table}>
                <colgroup>
                    <col style={{width: '10%'}}/>
                    <col style={{width: '15%'}}/>
                    <col style={{width: '15%'}}/>
                    <col style={{width: '60%'}}/>
                </colgroup>
                <TableHead>
                    <TableRow>
                        <TableCell>Pozycja</TableCell>
                        <TableCell>Numer indeksu</TableCell>
                        <TableCell>Przewidywany czas</TableCell>
                        <TableCell>Typ sprawy</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.people.map((person, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{person.id}</TableCell>
                            <TableCell>{person.time}</TableCell>
                            <TableCell>{person.issue}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </Paper>
    );
}

export default QueueTable