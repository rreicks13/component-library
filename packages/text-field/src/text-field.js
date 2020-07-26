import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const TextField = (props) => {
    const { className, darkMode, InputProps, margin, variant, ...otherProps } = props;
    const classes = useStyles(darkMode)();

    return (
        <MuiTextField
            className={clsx(classes.inputLabel, className)}
            InputProps={{
                ...InputProps,
                classes: { notchedOutline: classes.inputBorder },
                inputProps: { className: classes.inputValue },
            }}
            margin={margin}
            variant={variant}
            {...otherProps}
        />
    );
};

TextField.defaultProps = {
    className: '',
    darkMode: false,
    InputProps: {},
    margin: 'dense',
    variant: 'outlined',
};

TextField.propTypes = {
    className: PropTypes.string,
    darkMode: PropTypes.bool,
    InputProps: PropTypes.object,
    margin: PropTypes.string,
    variant: PropTypes.string,
};

export default TextField;
