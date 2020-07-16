import NumberFormat from 'react-number-format';
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
        <NumberFormat
            {...other}
            autoFocus={autoFocus}
            className={className}
            customInput={TextField}
            error={error}
            format={format}
            fullWidth={fullWidth}
            helperText={error ? helperText : ''}
            id='formatted-numberformat-input'
            InputProps={{ 'data-testid': 'number-field-input' }}
            key='user-modal-phone-number-input'
            label={label}
            margin={margin}
            name={name}
            onChange={onChange}
            value={value}
            variant={variant}
        />
    );
};

NumberField.defaultProps = {
    autoFocus: false,
    className: '',
    error: false,
    format: '',
    fullWidth: true,
    label: '',
    margin: 'dense',
    variant: 'outlined',
};

NumberField.propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    error: PropTypes.bool,
    format: PropTypes.string,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string.isRequired,
    label: PropTypes.string,
    margin: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    variant: PropTypes.string,
};

export default NumberField;
