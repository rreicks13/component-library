import { makeStyles } from '@material-ui/core/styles';

const loadingSpinner = {
    height: '24px !important',
    width: '24px !important',
};

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: 8,
        padding: '9px 24px',
    },
    loadingSpinnerInIcon: {
        ...loadingSpinner,
    },
    loadingSpinnerInLabel: {
        ...loadingSpinner,
        marginRight: theme.spacing(1),
    },
}));

export default useStyles;
