//React elements and hooks imports
import { FunctionComponent } from 'react'

//Components imports
import { createStyles, AppShell } from '@mantine/core';
import Footer from './Footer';

//Styling elements imports
import { colors } from '_styles/colors';
import ViewHeader from './Header';

//Typescript models & enums imports
interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
    const { classes } = useStyles();

    return (
        <AppShell
            header={<ViewHeader/>}
            footer={<Footer />}
            styles={(theme) => ({
                main: { backgroundColor: colors.background,paddingTop:0 },
            })}
            className={classes.container}
        >
            {children}
        </AppShell>
    )
}
// Use Affix
const useStyles = createStyles((theme) => ({
    container: {
    }
}));

export default Layout