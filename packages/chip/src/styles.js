import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    active: {
        backgroundColor: '#e8f0fe !important',
        color: '#1f6df3 !important',
    },
    chip: {
        backgroundColor: 'rgba(0, 0, 0, 0.05) !important',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        },
    },
}));

export default useStyles;
