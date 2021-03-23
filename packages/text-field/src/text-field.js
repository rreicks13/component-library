import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import IconButton from '@material-ui/core/IconButton';

const TextField = (props) => {
    const { InputLabelProps, InputProps, step, suffixLabel, ...otherProps } = props;
    const classes = useStyles();
    const labelClassName = otherProps.value && !otherProps.error ? classes.activeLabel : '';
    const inputLabelPropsObj = {
        ...InputLabelProps,
        className: InputLabelProps.className ? clsx(labelClassName, InputLabelProps.className) : labelClassName,
    };
    const inputPropsObj = {};
    const clear = () => {
        otherProps.onChange({
            target: {
                value: '',
            },
        });
    };
    const errorOrClearAdornment = otherProps.error ? (
        <InputAdornment position='end'>
            <InfoRoundedIcon className={classes.errorIcon} />
        </InputAdornment>
    ) : otherProps.value && !otherProps.disabled ? (
        <InputAdornment position='end'>
            <IconButton onClick={clear}>
                <CancelRoundedIcon className={classes.clearIcon} />
            </IconButton>
        </InputAdornment>
    ) : null;
    const endAdornment = suffixLabel ? (
        <InputAdornment className={classes.suffixLabel} position='end'>
            {suffixLabel}
        </InputAdornment>
    ) : (
        errorOrClearAdornment
    );

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
                className: InputProps.className ? clsx(classes.input, InputProps.className) : classes.input,
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
    InputLabelProps: {},
    InputProps: {},
    step: 1,
    suffixLabel: '',
    variant: 'filled',
};

TextField.propTypes = {
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    step: PropTypes.number,
    suffixLabel: PropTypes.string,
    variant: PropTypes.string,
};

export default TextField;
