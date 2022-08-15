//React elements and hooks imports
import { FunctionComponent, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';

//Components imports
import { createStyles, Header, Group, Burger, Paper, Transition, Text, ActionIcon, Center } from '@mantine/core';
import Logo from '_assets/layout/Logo.svg'
import Image from 'next/image';
import { colors } from '_styles/colors';
import {
    IconChevronDown,
} from '@tabler/icons';
import CustomButton from '../ui/CustomButton';
//Styling elements imports

//Typescript models & enums imports
const HEADER_HEIGHT = 120;
const links: { link: string; label: string, icon?: boolean }[] = [
    {
        link: '#',
        label: 'Home',
    },
    {
        link: '#',
        label: 'Market',
    },
    {
        link: '#',
        label: 'Explore',
    },
    {
        link: '#',
        label: 'Exhibition',
    },
    {
        link: '#',
        label: 'Artist & Collectors',
    },
    {
        link: '#',
        label: 'Community',
        icon: true
    },
]
const ViewHeader: FunctionComponent = () => {
    const { classes, cx } = useStyles();
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState<string>(links[0].label);

    const items = links.map((link) => (
        <Text<'a'>
            component="a"
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.label })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.label);
                close();
            }}
        >
            <Group spacing={1}>
                {link.label}
                {
                    link.icon &&
                    <ActionIcon variant="transparent">
                        <IconChevronDown size={24} />
                    </ActionIcon>
                }

            </Group>
        </Text>
    ));

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Group className={classes.header}>
                <Burger opened={opened} onClick={toggle} className={classes.burger} color={colors.white} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
                <Center className={classes.logo}>
                    <Image src={Logo} />
                </Center>
                <Center>
                    <Group position="center" spacing="xl" className={classes.links}>
                        {items}
                    </Group>

                </Center>
                <Center>
                    <CustomButton text='Connect Wallet' />
                </Center>
            </Group>
        </Header>
    )
}


const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        backgroundColor: colors.background,
        borderBottom: "none !important",
    },

    logo: {
        [theme.fn.largerThan('sm')]: {
            marginRight: '2rem',
        },
    },

    header: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    link: {
        color: colors.white,
        fontSize: '1rem',
        paddingTop: 3,
        paddingBottom: 3,
        '&:hover': {
            textDecoration: 'none',
        },
    },

    linkActive: {
        fontSize: '1rem',
        fontWeight: 700,
        color: colors.white,
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        color: colors.white,
        backgroundColor: colors.background,
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

export default ViewHeader