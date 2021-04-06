import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiRadio from '@material-ui/core/Radio';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const getOptions = (options) => {
    const isStringOption = options && typeof options[0] === 'string';

    return options.map((option) => {
        const value = isStringOption ? option : option.value;
        const label = isStringOption ? option : option.label;

        return <FormControlLabel control={<MuiRadio />} key={value} label={label} value={value} />;
    });
};

const useRadio = (props) => {
    const classes = useStyles();
    const { labelProps } = props;
    const activeClassName = props.value && !props.error ? classes.activeLabel : '';
    const labelClassName = labelProps.className ? clsx(activeClassName, labelProps.className) : activeClassName;
    const updatedLabelProps = {
        component: 'legend',
        ...labelProps,
        className: labelClassName,
    };

    return {
        label: props.label,
        labelProps: updatedLabelProps,
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
