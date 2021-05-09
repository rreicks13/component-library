import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    activeLabel: {
        color: theme.palette.primary.main,
    },
    chevronIcon: {
        right: 12,
    },
    error: {
        border: `2px solid ${theme.palette.error.main} !important`,
    },
    focused: {
        border: `2px solid ${theme.palette.primary.main} !important`,
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.05) !important',
        border: `2px solid transparent`,
        borderRadius: 8,
        '& div': {
            padding: '25px 12px 8px',
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        },
    },
    noLabel: {
        '& div': {
            padding: '10px 12px 8px',
        },
    },
}));

export default useStyles;
