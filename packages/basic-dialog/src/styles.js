import { makeStyles } from '@material-ui/core/styles';

const containerStyles = (theme) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: 20,
    padding: '0 5%',
});

const useStyles = makeStyles((theme) => ({
    contentContainer: {
        padding: 0,
    },
    largeContainer: {
        ...containerStyles(theme),
        minWidth: '60%',
    },
    mobileContainer: {
        backgroundColor: theme.palette.background.default,
        padding: '0 5%',
    },
    smallContainer: {
        ...containerStyles(theme),
        minWidth: 600,
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0',
        padding: 0,
    },
    footerContainer: {
        marginTop: 20,
        marginBottom: 40,
        padding: 0,
    },
}));

export default useStyles;
