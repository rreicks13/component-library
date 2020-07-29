import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    bottom: {
        color: (props) => theme.palette.grey[props.darkMode ? 700 : 200],
    },
    container: {
        alignItems: 'center',
        display: 'inline-flex',
    },
    danger: {
        color: theme.palette.error.main,
    },
    label: {
        color: (props) => {
            if (props.darkMode) {
                return theme.palette.common.white;
            }

            return props.percentage === 0 ? theme.palette.error.main : theme.palette.text.primary;
        },
    },
    title: {
        marginLeft: theme.spacing(1),
    },
    top: {
        position: 'absolute',
        left: 0,
    },
    warning: {
        color: theme.palette.warning.main,
    },
}));
