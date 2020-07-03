import CircularProgress from '@material-ui/core/CircularProgress';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const Button = (props) => {
    const classes = useStyles();
    const { isDisabled, isLoading, startIcon, title, variant, ...otherProps } = props;

    return (
        <MuiButton
            disabled={isDisabled || isLoading}
            startIcon={
                isLoading && Boolean(startIcon) ? (
                    <CircularProgress className={classes.loadingSpinnerInIcon} />
                ) : (
                    startIcon
                )
            }
            variant={variant}
            {...otherProps}
        >
            {isLoading && !Boolean(startIcon) && <CircularProgress className={classes.loadingSpinnerInLabel} />}
            {title}
        </MuiButton>
    );
};

Button.defaultProps = {
    isDisabled: false,
    isLoading: false,
    startIcon: null,
    variant: 'contained',
};

Button.propTypes = {
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    startIcon: PropTypes.node,
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
};

export default Button;
