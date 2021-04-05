import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiRadio from '@material-ui/core/Radio';
import React from 'react';

const getOptions = (options) => {
    const isStringOption = options && typeof options[0] === 'string';

    return options.map((option) => {
        const value = isStringOption ? option : option.value;
        const label = isStringOption ? option : option.label;

        return <FormControlLabel control={<MuiRadio />} key={value} label={label} value={value} />;
    });
};

const useRadio = (props) => {
    return {
        label: props.label,
        labelProps: {
            component: 'legend',
            ...props.labelProps,
        },
        options: getOptions(props.options),
        radioGroupProps: {
            row: true,
            onChange: props.onChange,
            value: props.value,
            ...props.radioGroupProps,
        },
        rootProps: {
            component: 'fieldset',
            ...props.rootProps,
        },
    };
};

export default useRadio;
