//React elements and hooks imports
import { FunctionComponent, useState } from 'react'

//Components imports
import { createStyles, Grid, Group, Text, Paper, Stack, Button } from '@mantine/core';
import CustomTitle from '_components/ui/CustomTitle';
import CustomButton from '_components/ui/CustomButton';

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports
import { ArtistWorkModel } from '_types/nfts/NFTsArtistWorkModel';
import Image from 'next/image';
import CustomAvatar from '_components/ui/CustomAvatar';
interface WorksProps {
    artist: string;
    works: ArtistWorkModel[]
}
const WorksCard: FunctionComponent<WorksProps> = ({ artist, works }) => {
    const { classes, cx } = useStyles();
    const [highlightCard, setHighlightCard] = useState<number>(0)

    return (
        <Grid justify="center" align="center" className={classes.container}>
            <Grid.Col span={8}>
                <Group position="apart" className={classes.title}>
                    <CustomTitle title={`More Works by ${artist}`} />
                    <CustomButton text='See All' color={colors.secondary} />
                </Group>
                <Grid justify="center" align="center">
                    {
                        works.map((nft: ArtistWorkModel) => (
                            <Grid.Col key={nft.id} md={6} lg={4} sm={12}>
                                <Paper shadow="xs" radius="lg" p="sm" className={classes.paper} onClick={() => setHighlightCard(nft.id)}>
                                    <Stack>
                                        <Image
                                            src={nft.image}
                                            className={classes.image}
                                        />
                                        <Text className={classes.name}>{nft.name}</Text>
                                        <CustomAvatar image={nft.artist.avatar} name={nft.artist.name} />
                                        <Group position="apart">
                                            <Stack spacing="xs">
                                                <Text weight={500} color={colors.grey} >Current Bid :</Text>
                                                <Text className={classes.bidInfo}>{nft.currentBid} ETH</Text>
                                            </Stack>
                                            <Stack spacing="xs">
                                                <Text weight={500} color={colors.grey} >End in :</Text>
                                                <Text className={classes.bidInfo}>{nft.endIn}</Text>
                                            </Stack>
                                        </Group>
                                        <Button fullWidth size="lg" radius="md" color={colors.secondary} variant={highlightCard === nft.id ? "filled" : "outline"} className={cx(classes.button, { [classes.outlineButton]: highlightCard !== nft.id })} >
                                            Place a bid
                                        </Button>
                                    </Stack>
                                </Paper>
                            </Grid.Col>
                        ))
                    }
                </Grid>
            </Grid.Col>
        </Grid>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    },
    title: {
        [theme.fn.smallerThan('lg')]: {
            marginBottom: "1rem",
        },
    },
    paper: {
        backgroundColor: colors.primary
    },
    image: {
        borderRadius: '8px'
    },
    name: {
        fontFamily: 'Noto Sans',
        fontWeight: 600,
        fontSize: '2rem',
        color: colors.white,
    },
    bidInfo: {
        fontSize: '1.4rem',
        fontWeight: 600,
        color: colors.white,
        fontFamily: 'Noto Sans',
        lineHeight: '2rem'
    },
    button: {
        color: colors.white,
        fontSize: 16,
        lineHeight: 32,
        fontWeight: 600,
        fontFamily: 'DM Sans',
    },
    outlineButton: {
        color: colors.white,
        borderColor: colors.white,
    }
}));

export default WorksCard