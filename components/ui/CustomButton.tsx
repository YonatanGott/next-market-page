//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, Button, ButtonProps } from '@mantine/core';

//Styling elements imports
import { colors } from '_styles/colors';

//Typescript models & enums imports
interface IButtonProps {
    text: string;
    color?: string;
    fullWidth?: boolean;
    variant?: "outline" | "white" | "light" | "default" | "filled" | "subtle" | "gradient"
}
const CustomButton: FunctionComponent<IButtonProps> = ({text,color,fullWidth, variant }) => {
    const { classes } = useStyles();

    return (
        <Button 
        size="lg" 
        radius="md" 
        fullWidth={fullWidth ? fullWidth : false} 
        style={{backgroundColor: color ? color : colors.secondaryStrong }} 
        className={classes.button} 
        variant={variant ? variant : 'filled'}
        >
            {text}
        </Button>
    )
}

const useStyles = createStyles((theme) => ({
    button: {
        color: colors.white,
        fontSize: 16,
        lineHeight:32,
        fontWeight:700,
        padding:"12px 32px 12px 32px",
        fontFamily:'DM Sans',
    }
}));

export default CustomButton