import React from 'react';
import AppBar from "../AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper} from "@material-ui/core";


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

function MainPanel() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar/>
            <Container maxWidth="lg">
                <h3>Infomatyka</h3>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Paper>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    Imię i nazwisko:
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    Jan Kowalski
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    Numer indeksu:
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    284777
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    Typ sprawy:
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    Przedłużenie legitymacji studenckiej
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    Liczba oczekujących:
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    11
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    Łączny czas
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    43 min
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button>Wstrzymaj</Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button>Zatrzymaj zapisy</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Button>Poprzedni</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button>Następny</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
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
                                    {tier.queueList.map((line, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index}</TableCell>
                                            <TableCell>{123456}</TableCell>
                                            <TableCell>{line}</TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default MainPanel
