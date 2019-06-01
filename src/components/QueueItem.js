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

function QueueItem() {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{align: 'center'}}
                // subheaderTypographyProps={{align: 'center'}}
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
                        {tier.queueList.map((line, index) => (
                            <TableRow key={line}>
                                <TableCell>{index}</TableCell>
                                <TableCell>{123456}</TableCell>
                                <TableCell>{line}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default QueueItem