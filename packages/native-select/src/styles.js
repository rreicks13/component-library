import { makeStyles } from '@material-ui/core/styles';

export default (darkMode) =>
    makeStyles((theme) => ({
        inputBorder: darkMode ? { borderColor: theme.palette.common.white } : {},
        inputLabel: darkMode
            ? {
                  '& label': {
                      color: theme.palette.common.white,
                  },
                  '& svg': {
                      color: theme.palette.common.white,
                  },
              }
            : {},
        inputValue: darkMode ? { color: theme.palette.common.white } : {},
    }));
