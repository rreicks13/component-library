import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    activeLabel: {
        color: theme.palette.primary.main,
    },
    error: {
        border: `2px solid ${theme.palette.error.main} !important`,
    },
    chevronIcon: {
        margin: 12,
    },
    focused: {
        border: `2px solid ${theme.palette.primary.main} !important`,
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.05) !important',
        border: `2px solid transparent`,
        borderRadius: 8,
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        },
    },
}));

export default useStyles;
