import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        '&:not(:last-child)': {
            marginRight: theme.spacing(2),
        },
    },
    buttonGroup: {
        display: 'inline-block',
        overflowX: 'scroll',
        width: '100%',
        whiteSpace: 'nowrap',
    },
}));

export default useStyles;
