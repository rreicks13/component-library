import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    active: {
        backgroundColor: `${theme.palette.primary.main}1F !important`,
        color: `${theme.palette.primary.main} !important`,
    },
    chip: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
    },
}));

export default useStyles;
