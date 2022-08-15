//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Group, Avatar, Text } from '@mantine/core';
import { colors } from '_styles/colors';
import Image from 'next/image';

//Styling elements imports

//Typescript models & enums imports
interface AvatarProps {
    image: any;
    name: string;
}
const CustomAvatar: FunctionComponent<AvatarProps> = ({ image, name }) => {
    const { classes } = useStyles();

    return (
        <Group>
            <Avatar radius="xl" > <Image src={image} /> </Avatar>
            <Text className={classes.name}>{name}</Text>
        </Group>
    )
}

const useStyles = createStyles((theme) => ({
    name: {
        fontSize: '0.8rem',
        fontWeight: 500,
        color: colors.white,
        fontFamily: 'DM Sans',
    },
}));

export default CustomAvatar