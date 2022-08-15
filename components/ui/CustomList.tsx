//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Container, Group, Stack, Avatar, Text, Paper } from '@mantine/core';
import Image from 'next/image';
import {
    IconChevronUp,
} from '@tabler/icons';

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports
import { IBids } from '_types/home/bids';
interface IListProps {
    title?: string;
    titleIcon?: any;
    list: IBids[];
}
const CustomList: FunctionComponent<IListProps> = ({ title, titleIcon, list }) => {
    const { classes } = useStyles();

    return (
        <Container className={classes.container}>
            <Stack>
                {
                    title &&
                    <Paper shadow="sm" radius="md" p="sm" className={classes.paper}>
                        <Group position="apart" spacing="xl">
                            <Group>
                                {titleIcon && <Image src={titleIcon} />}
                                <Text className={classes.paperTitle}>{title}</Text>
                            </Group>
                            <IconChevronUp size={24} stroke={2} />
                        </Group>
                    </Paper>
                }
                <Stack>
                    {
                        list.map((bid: IBids) => (
                            <Group position="apart" spacing="xl" key={bid.name}>
                                <Group>
                                    <Avatar radius="xl" > <Image src={bid.avatar} /> </Avatar>
                                    <Text className={classes.name}>{bid.name}</Text>
                                </Group>
                                <Stack spacing="xs">
                                    <Text className={classes.bid}>Bid <span className={classes.bidNumber}>{bid.bid} ETH</span></Text>
                                    <Text className={classes.date}>{bid.date}</Text>
                                </Stack>
                            </Group>
                        ))
                    }
                </Stack>
            </Stack>
        </Container>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    },
    name: {
        fontSize: '1rem',
        fontWeight: 700,
        color: colors.white,
        fontFamily: 'DM Sans',
    },
    bid: {
        fontSize: '1rem',
        fontWeight: 700,
        color: colors.grey,
        fontFamily: 'DM Sans',
    },
    bidNumber: {
        color: colors.secondary,
    },
    date: {
        fontSize: '0.8rem',
        fontWeight: 400,
        color: colors.grey,
        fontFamily: 'DM Sans',
    },
    paper: {
        color: colors.white,
        backgroundColor: colors.primary
    },
    paperTitle: {
        fontSize: '1.2rem',
        fontWeight: 700,
        color: colors.white,
        fontFamily: 'DM Sans',
    },
}));

export default CustomList