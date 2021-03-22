import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    error: {
        border: `1px solid ${theme.palette.error.main} !important`,
    },
    errorIcon: {
        color: theme.palette.error.main,
    },
    focused: {
        border: `1px solid ${theme.palette.primary.main} !important`,
    },
    input: {
        border: `1px solid transparent`,
        borderRadius: 8,
    },
}));

export default useStyles;
