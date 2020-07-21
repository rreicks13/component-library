import Autocomplete from '@material-ui/lab/Autocomplete';
import Listbox from './listbox';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Select = (props) => {
    const classes = useStyles();

    return (
        <Autocomplete
            id='select'
            style={{ width: '100%' }}
            disableListWrap
            classes={classes}
            ListboxComponent={Listbox}
            options={props.options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    color={props.color}
                    margin='dense'
                    variant='outlined'
                    label={props.label}
                    fullWidth
                />
            )}
            renderOption={(option) => <Typography noWrap>{option}</Typography>}
            value={props.selectedOption}
            {...props}
        />
    );
};

Select.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.any,
};

export default Select;
