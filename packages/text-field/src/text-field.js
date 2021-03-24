import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import useTextField from './hook';

const TextField = (props) => {
    const textFieldProps = useTextField(props);

    return <MuiTextField {...textFieldProps} />;
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
