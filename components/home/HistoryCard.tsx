//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Grid } from '@mantine/core';
import CustomList from '_components/ui/CustomList';
import Line from '_assets/icons/line2.svg'
import History from '_assets/icons/History.svg'
import { bidsList, historyBids } from '_data/home/bidsLists';
//Styling elements imports

//Typescript models & enums imports

const HistoryCard: FunctionComponent = () => {
    const { classes } = useStyles();

    return (
        <Grid justify="center" align="center" className={classes.container}>
            <Grid.Col md={6} lg={4} sm={8}>
                <CustomList title={'History'} titleIcon={History} list={historyBids} />
            </Grid.Col>
            <Grid.Col md={6} lg={4} sm={8}>
                <CustomList title={'Bids'} titleIcon={Line} list={bidsList} />
            </Grid.Col>
        </Grid>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
    }
}));

export default HistoryCard