import NumberFormatCustom from './number-format-custom';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';

const NumberField = (props) => {
    const {
        autoFocus,
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

    return (
        <TextField
            {...other}
            className={className}
            error={error}
            fullWidth={fullWidth}
            helperText={error ? helperText : ''}
            id='number-field'
            InputProps={{
                inputComponent: (props) => (
                    <NumberFormatCustom
                        {...props}
                        autoFocus={autoFocus}
                        data-testid='number-field-input'
                        format={format}
                        name={name}
                    />
                ),
            }}
            label={label}
            margin={margin}
            onChange={onChange}
            type='number'
            value={value}
            variant={variant}
        />
    );
};

NumberField.defaultProps = {
    autoFocus: false,
    className: '',
    error: false,
    fullWidth: true,
    margin: 'dense',
    variant: 'outlined',
};

NumberField.propTypes = {
    autoFocus: PropTypes.bool,
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
