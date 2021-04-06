import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import useRadio from './hook';

const Radio = (props) => {
    const { label, labelProps, options, radioGroupProps, rootProps } = useRadio(props);

    return (
        <FormControl {...rootProps}>
            <FormLabel {...labelProps}>{label}</FormLabel>
            <RadioGroup {...radioGroupProps}>{options}</RadioGroup>
        </FormControl>
    );
};

Radio.defaultProps = {
    labelProps: {},
    radioGroupProps: {},
    rootProps: {},
    value: null,
};

Radio.propTypes = {
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
    radioGroupProps: PropTypes.object,
    rootProps: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Radio;
