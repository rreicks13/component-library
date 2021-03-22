import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const TextField = (props) => {
    const { className, InputLabelProps, InputProps, step, ...otherProps } = props;
    const classes = useStyles();
    const inputLabelPropsObj = InputLabelProps;
    const inputPropsObj = {};
    const errorAdornment = otherProps.error ? <InfoRoundedIcon className={classes.errorIcon} /> : null;
    const endAdornment = InputProps.endAdornment ? InputProps.endAdornment : errorAdornment;

    if (otherProps?.type === 'number') {
        inputPropsObj.step = step;
    }

    if (otherProps?.type === 'date') {
        inputLabelPropsObj.shrink = true;
    }

    return (
        <MuiTextField
            InputLabelProps={inputLabelPropsObj}
            InputProps={{
                ...InputProps,
                className: InputProps.className ? clsx(InputProps.className, classes.input) : classes.input,
                classes: {
                    error: classes.error,
                    focused: classes.focused,
                },
                disableUnderline: true,
                endAdornment,
                inputProps: inputPropsObj,
            }}
            {...otherProps}
        />
    );
};

TextField.defaultProps = {
    className: '',
    InputLabelProps: {},
    InputProps: {},
    step: 1,
    variant: 'filled',
};

TextField.propTypes = {
    className: PropTypes.string,
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    step: PropTypes.number,
    variant: PropTypes.string,
};

export default TextField;
