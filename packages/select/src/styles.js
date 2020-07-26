import { makeStyles } from '@material-ui/core/styles';

const useStyles = (darkMode) =>
    makeStyles((theme) => ({
        clearIndicator: darkMode ? { color: theme.palette.common.white } : {},
        input: darkMode ? { color: theme.palette.common.white } : {},
        listbox: {
            boxSizing: 'border-box',
            '& ul': {
                padding: 0,
                margin: 0,
            },
        },
        popupIndicator: darkMode ? { color: theme.palette.common.white } : {},
    }));

export const useTextFieldStyles = (darkMode) =>
    makeStyles((theme) => ({
        input: darkMode ? { '& label': { color: theme.palette.common.white } } : {},
        notchedOutline: darkMode
            ? {
                  borderColor: theme.palette.common.white,
              }
            : {},
    }));

export default useStyles;
