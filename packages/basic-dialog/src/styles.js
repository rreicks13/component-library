import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contentContainer: {
        padding: `0 ${theme.spacing(4)}px`,
    },
    largeContainer: {
        minHeight: '80%',
        minWidth: '80%',
    },
    smallContainer: {
        minWidth: '50%',
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(4),
    },
    footerContainer: {
        padding: theme.spacing(4),
    },
}));

export default useStyles;
