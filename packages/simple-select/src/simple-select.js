import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useSimpleSelect from './hook';

const SimpleSelect = (props) => {
    const { options, ...textFieldProps } = useSimpleSelect(props);

    return <TextField {...textFieldProps}>{options}</TextField>;
};

SimpleSelect.defaultProps = {
    InputLabelProps: {},
    InputProps: {},
    options: [],
    SelectProps: {},
    variant: 'filled',
};

SimpleSelect.propTypes = {
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    options: PropTypes.array,
    SelectProps: PropTypes.object,
    variant: PropTypes.string,
};

export default SimpleSelect;
