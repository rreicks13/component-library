import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const NativeSelect = (props) => {
    const { margin, multiple, options, variant, ...otherProps } = props;

    return (
        <TextField
            InputLabelProps={multiple ? { shrink: true } : {}}
            margin={margin}
            select
            SelectProps={{
                multiple,
                native: true,
            }}
            variant={variant}
            {...otherProps}
        >
            {options.map((option) => (
                <option className={option.className} key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </TextField>
    );
};

NativeSelect.defaultProps = {
    margin: 'dense',
    multiple: false,
    variant: 'outlined',
};

NativeSelect.propTypes = {
    margin: PropTypes.string,
    multiple: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string,
            label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        })
    ).isRequired,
    variant: PropTypes.string,
};

export default NativeSelect;
