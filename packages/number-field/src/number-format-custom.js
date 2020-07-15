import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import React from 'react';

const NumberFormatCustom = (props) => {
    const { autoFocus, inputRef, format, onChange, prefix, ...other } = props;

    return (
        <NumberFormat
            {...other}
            autoComplete='off'
            autoFocus={autoFocus}
            format={format}
            getInputRef={inputRef}
            isNumericString
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            prefix={prefix}
            thousandSeparator
            type='text'
        />
    );
};

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default NumberFormatCustom;
