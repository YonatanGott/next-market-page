//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Container, Text, Grid, Group } from '@mantine/core';
import Logo from '_assets/layout/Logo.svg'
import Image from 'next/image';

//Styling elements imports

//Typescript models & enums imports
import { footerLinks } from '_data/footer/footerLinks';
import { colors } from '_styles/colors';

const Footer: FunctionComponent = () => {
    const { classes } = useStyles();

    const groups = footerLinks.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image src={Logo} height={32} width={110} />
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tristique placerat eleifend aliquam pellentesque facilisis ultrices. Imperdiet mus urna egestas at tellus.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Grid justify="space-between" align="center">
                    <Grid.Col span={6} >
                        <Group>
                            <Text className={classes.link} component="a" href={"#"} color="dimmed" size="sm">
                                Privacy Policy
                            </Text>
                            <Text className={classes.link} component="a" href={"#"} color="dimmed" size="sm">
                                Terms and Condition
                            </Text>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Group position="right">
                            <Text color="dimmed" size="sm">
                                Copyright Tanah Air Studio
                            </Text>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
}

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: colors.background,
        width: '100%'
    },

    logo: {
        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
        fontSize: '1rem',
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        paddingLeft: theme.spacing.lg,
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color: colors.white,
        fontSize: '1rem',
        paddingTop: 3,
        paddingBottom: 3,
        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: '1.5rem',
        fontWeight: 700,
        fontFamily: 'Noto Sans',
        marginBottom: theme.spacing.xs / 2,
        color: colors.white,
    },

    afterFooter: {
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    }
}));

export default Footer