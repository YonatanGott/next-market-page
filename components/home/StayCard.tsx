//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Grid, Center, Group, TextInput } from '@mantine/core';

//Styling elements imports
import { colors } from '_styles/colors';
import CustomButton from '_components/ui/CustomButton';
import CustomTitle from '_components/ui/CustomTitle';
import CustomText from '_components/ui/CustomText';

//Typescript models & enums imports

const StayCard: FunctionComponent = () => {
    const { classes } = useStyles();

    return (
        <Grid justify="center" align="center" className={classes.container}>
            <Grid.Col span={8} className={classes.card}>
                <CustomTitle align='center' title='Stay in the loop on CryptoArt and NFTs' />
                <CustomText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' />
                <Center >
                    <Group position="center" grow className={classes.input} >
                        <TextInput
                            placeholder="Your Email"
                            size='md'
                        />
                        <CustomButton text='Subscribe' color={colors.secondary} />
                    </Group>
                </Center>
            </Grid.Col>
        </Grid>
    )
}

const useStyles = createStyles((theme) => ({
    container: {
    },
    card: {
        backgroundColor: colors.backgroundLight,
        padding: "5rem 13rem 5rem 13rem",
        borderRadius: 8,
        [theme.fn.smallerThan('lg')]: {
            padding: "1rem",
        },
    },
    input: {
        width: '100%'
    },
}));

export default StayCard