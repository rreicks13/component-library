import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    activeLabel: {
        color: theme.palette.primary.main,
    },
    clearIcon: {
        color: '#989898',
    },
    error: {
        border: `1px solid ${theme.palette.error.main} !important`,
    },
    errorIcon: {
        color: theme.palette.error.main,
        margin: 12,
    },
    focused: {
        border: `1px solid ${theme.palette.primary.main} !important`,
    },
    input: {
        border: `1px solid transparent`,
        borderRadius: 8,
    },
    suffixLabel: {
        fontSize: '1.5rem',
        margin: 18,
    },
}));

export default useStyles;
