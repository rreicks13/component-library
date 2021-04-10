import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleSelect from '@tractorzoom/simple-select';
import useTextField from './hook';

const TextField = (props) => {
    const { className, optionsSelectProps, style, ...textFieldProps } = useTextField(props);

    return optionsSelectProps.options.length ? (
        <div className={className} style={{ display: 'flex', ...style }}>
            <MuiTextField className={className} {...textFieldProps} />
            <SimpleSelect {...optionsSelectProps} />
        </div>
    ) : (
        <MuiTextField className={className} style={style} {...textFieldProps} />
    );
};

TextField.defaultProps = {
    InputLabelProps: {},
    InputProps: {},
    step: 1,
    suffixLabel: '',
    suffixOptions: [],
    suffixOnChange: () => {},
    suffixValue: null,
    variant: 'filled',
};

TextField.propTypes = {
    InputLabelProps: PropTypes.object,
    InputProps: PropTypes.object,
    step: PropTypes.number,
    suffixLabel: PropTypes.string,
    suffixOptions: PropTypes.array,
    suffixOnChange: PropTypes.func,
    suffixValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    variant: PropTypes.string,
};

export default TextField;
