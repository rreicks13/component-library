import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import useStyles from './styles';

const NativeSelect = (props) => {
    const { className, darkMode, InputProps, margin, multiple, options, variant, ...otherProps } = props;
    const classes = useStyles(darkMode)();

    return (
        <TextField
            className={clsx(classes.inputLabel, className)}
            InputLabelProps={multiple ? { shrink: true } : {}}
            InputProps={{
                ...InputProps,
                classes: { notchedOutline: classes.inputBorder },
                inputProps: { className: classes.inputValue },
            }}
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
    className: '',
    darkMode: false,
    InputProps: {},
    margin: 'dense',
    multiple: false,
    variant: 'outlined',
};

NativeSelect.propTypes = {
    className: PropTypes.string,
    darkMode: PropTypes.bool,
    InputProps: PropTypes.object,
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
