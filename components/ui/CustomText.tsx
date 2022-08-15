//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Center, Text } from '@mantine/core';
import { colors } from '_styles/colors';

//Styling elements imports

//Typescript models & enums imports
interface TextProps {
    text: string
}
const CustomText: FunctionComponent<TextProps> = ({ text }) => {
    const { classes } = useStyles();

    return (
        <Center>
            <Text align='center' className={classes.text}>
                {text}
            </Text>
        </Center>
    )
}

const useStyles = createStyles((theme) => ({
    text: {
        fontWeight: 400,
        fontSize: '1rem',
        color: colors.white,
        marginBottom: 22,
    },
}));

export default CustomText