import { makeStyles } from '@material-ui/core/styles';

const loadingSpinner = {
    height: '14px !important',
    width: '14px !important',
};

const useStyles = makeStyles((theme) => ({
    loadingSpinner: {
        ...loadingSpinner,
        marginRight: theme.spacing(1),
    },
}));

export default useStyles;
