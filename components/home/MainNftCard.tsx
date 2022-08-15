//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Group, Stack, Paper, Text, Button, Grid, Center } from '@mantine/core';
import { NFTModel } from '_types/nfts/NFTModel';
import Image from 'next/image';
import CustomTitle from '_components/ui/CustomTitle';
import CustomText from '_components/ui/CustomText';
import { colors } from '_styles/colors';
import CustomButton from '_components/ui/CustomButton';
import { IconShare } from '@tabler/icons';
import CustomAvatar from '_components/ui/CustomAvatar';

//Styling elements imports

//Typescript models & enums imports
interface ICardProps {
    nft: NFTModel
}
const MainNftCard: FunctionComponent<ICardProps> = ({ nft }) => {
    const { classes } = useStyles();

    return (
        <Grid justify="center" align="center">
            <Grid.Col md={6} lg={4} sm={8}>
                <Center>
                <Image src={nft.image} />
                </Center>
            </Grid.Col>
            <Grid.Col md={6} lg={4} sm={8} >
                <Stack align="flex-start" className={classes.gridItem}>
                    <CustomTitle title={nft.name} />
                    <CustomText text={nft.description} />
                    <Group>
                        {
                            nft.tags.map((tag: string, index: number) => (
                                <Paper className={classes.tag} shadow="sm" radius="md"  key={index}>{tag}</Paper>
                            ))
                        }
                    </Group>
                    <Group>
                        <Stack>
                            <Text weight={500} color={colors.grey} >Artist</Text>
                            <CustomAvatar image={nft.artist.avatar} name={nft.artist.name} />
                        </Stack>
                        <Stack>
                            <Text weight={500} color={colors.grey} >Owner</Text>
                            <CustomAvatar image={nft.owner.avatar} name={nft.owner.name} />
                        </Stack>
                    </Group>
                    <Group>
                        <Stack>
                            <Text weight={500} color={colors.grey} >List Price :</Text>
                            <Group>
                                <Text className={classes.ethPrice}>{nft.ethPrice} ETH</Text>
                                <Text className={classes.dollarPrice}>{nft.dollarPrice}</Text>
                            </Group>
                        </Stack>
                    </Group>
                    <Group>
                        <CustomButton text='Place A Bid' color={colors.secondary} />
                        <Button className={classes.shareButton} variant="outline" radius="md" size="lg" rightIcon={<IconShare size={18} stroke={1.5} />}>
                            Share
                        </Button>
                    </Group>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}

const useStyles = createStyles((theme) => ({
    container: {

    },
    gridItem:{
            [theme.fn.smallerThan('sm')]: {
                marginBottom: "1rem",
                padding:"2rem"
            },
    },
    tag:{
        backgroundColor: colors.primary,
        color: colors.white,
        fontSize:'0.8rem',
        padding:"0.5rem 1rem 1rem 1rem",
        marginRight:'0.2rem'
    },
    name: {
        fontSize: '0.8rem',
        fontWeight: 500,
        color: colors.white,
        fontFamily: 'DM Sans',
    },
    ethPrice: {
        fontSize: '2rem',
        fontWeight: 700,
        color: colors.white,
        fontFamily: 'DM Sans',
    },
    dollarPrice: {
        fontSize: '1rem',
        fontWeight: 700,
        color: colors.white,
        fontFamily: 'DM Sans',
        alignSelf: 'center'
    },
    shareButton: {
        color: colors.white,
        borderColor: colors.white,
        fontSize: 16,
        lineHeight: 32,
        fontWeight: 700,
        padding: "12px 32px 12px 32px",
        fontFamily: 'DM Sans',
    }
}));

export default MainNftCard