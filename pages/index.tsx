//React elements and hooks imports
import type { NextPage } from 'next'
//Components imports
import { createStyles, Grid, Affix, Button, Text, Transition } from '@mantine/core';
import StayCard from '_components/home/StayCard';
import HistoryCard from '_components/home/HistoryCard';
import MainNftCard from '_components/home/MainNftCard';
import { geometricalNft } from '_data/nfts/mainNTF';
import WorksCard from '_components/home/WorksCard';
import { nftWorks } from '_data/nfts/nftWorks';
import { IconArrowUp } from '@tabler/icons'
import { useWindowScroll } from '@mantine/hooks';

const Home: NextPage = () => {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Grid justify="center" align="center" gutter="lg">
      <Grid.Col >
        <MainNftCard nft={geometricalNft} />
      </Grid.Col>
      <Grid.Col >
        <HistoryCard />
      </Grid.Col>
      <Grid.Col >
        <WorksCard artist={'CameronWill'} works={nftWorks} />
      </Grid.Col>
      <Grid.Col  >
        <StayCard />
      </Grid.Col>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Grid>
  )
}
const useStyles = createStyles((theme) => ({
  container: {

  }
}));
export default Home
