import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        minWidth: '50%',
    },
    titleContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
    },
}));

export default useStyles;
