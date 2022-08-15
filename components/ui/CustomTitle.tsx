//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Center, Title } from '@mantine/core';
import { colors } from '_styles/colors';

//Styling elements imports

//Typescript models & enums imports
interface TitleProps {
    title: string;
    align?: 'center' | 'left' | 'right'
}
const CustomTitle: FunctionComponent<TitleProps> = ({ title, align }) => {
    const { classes } = useStyles();

    return (
        <Center>
            <Title align={align} className={classes.title}>
                {title}
            </Title>
        </Center>
    )
}

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: "Noto Sans",
        fontWeight: 700,
        fontSize: '3rem',
        color: colors.white,
        marginBottom:'1.2rem',
    },
}));

export default CustomTitle