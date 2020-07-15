import NumberFormatCustom from './number-format-custom';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const NumberField = (props) => {
    const {
        className,
        error,
        format,
        fullWidth,
        helperText,
        label,
        margin,
        name,
        onChange,
        value,
        variant,
        ...other
    } = props;
    const classes = useStyles();

    return (
        <TextField
            {...other}
            className={`${classes.numberField} ${className}`}
            error={error}
            fullWidth={fullWidth}
            helperText={helperText}
            id='number-field'
            InputProps={{
                inputComponent: (props) => (
                    <NumberFormatCustom {...props} data-testid='number-field-input' format={format} name={name} />
                ),
            }}
            label={label}
            margin={margin}
            onChange={onChange}
            value={value}
            variant={variant}
        />
    );
};

NumberField.defaultProps = {
    className: '',
    error: false,
    fullWidth: true,
    margin: 'dense',
    variant: 'outlined',
};

NumberField.propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    margin: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    variant: PropTypes.string,
};

export default NumberField;
