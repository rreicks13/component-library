import useStyles, { useTextFieldStyles } from './styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Listbox from './listbox';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Select = (props) => {
    const { color, darkMode, label, options, renderOption, required, selectedOption, ...otherProps } = props;
    const classes = useStyles(darkMode)();
    const textFieldClasses = useTextFieldStyles(darkMode)();

    return (
        <Autocomplete
            autoHighlight
            autoSelect
            id='select'
            style={{ width: '100%' }}
            disableListWrap
            classes={classes}
            ListboxComponent={Listbox}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className={textFieldClasses.input}
                    color={color}
                    InputProps={{
                        ...params.InputProps,
                        classes: {
                            ...params.InputProps.classes,
                            notchedOutline: textFieldClasses.notchedOutline,
                        },
                    }}
                    size='small'
                    variant='outlined'
                    label={label}
                    fullWidth
                    required={required}
                />
            )}
            renderOption={renderOption}
            value={selectedOption}
            {...otherProps}
        />
    );
};

Select.defaultProps = {
    color: null,
    darkMode: false,
    renderOption: (option) => <Typography noWrap>{option}</Typography>,
    required: false,
};

Select.propTypes = {
    color: PropTypes.string,
    darkMode: PropTypes.bool,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    renderOption: PropTypes.func,
    required: PropTypes.bool,
    selectedOption: PropTypes.any,
};

export default Select;
