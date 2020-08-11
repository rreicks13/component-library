import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const TextField = (props) => {
    const { className, darkMode, InputProps, margin, step, variant, ...otherProps } = props;
    const classes = useStyles(darkMode)();
    const inputPropsObj = { className: classes.inputValue };

    if (otherProps.type === 'number') {
        inputPropsObj.step = step;
    }

    return (
        <MuiTextField
            className={clsx(classes.inputLabel, className)}
            InputLabelProps={otherProps?.type === 'date' ? { shrink: true } : {}}
            InputProps={{
                ...InputProps,
                classes: { notchedOutline: classes.inputBorder },
                inputProps: inputPropsObj,
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
    step: 1,
    variant: 'outlined',
};

TextField.propTypes = {
    className: PropTypes.string,
    darkMode: PropTypes.bool,
    InputProps: PropTypes.object,
    margin: PropTypes.string,
    step: PropTypes.number,
    variant: PropTypes.string,
};

export default TextField;
