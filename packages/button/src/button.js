import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import useButton from './hook';

const Button = (props) => {
    const { children, disabled, loading, loadingIcon, ...otherProps } = useButton(props);

    return (
        <MuiButton disabled={disabled || loading} {...otherProps}>
            {loadingIcon}
            {children}
        </MuiButton>
    );
};

Button.defaultProps = {
    className: '',
    loading: false,
    startIcon: null,
    variant: 'contained',
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    loading: PropTypes.bool,
    startIcon: PropTypes.node,
    variant: PropTypes.string,
};

export default Button;
