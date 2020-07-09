import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        minWidth: '50%',
    },
    contentContainer: {
        padding: `0 ${theme.spacing(4)}px`,
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
