import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const useButton = (props) => {
    const classes = useStyles();
    const { className, startIcon, ...otherProps } = props;
    const startOrLoadingIcon =
        otherProps.loading && Boolean(startIcon) ? (
            <CircularProgress className={classes.loadingSpinnerInIcon} />
        ) : (
            startIcon
        );
    const loadingIcon = otherProps.loading && !Boolean(startIcon) && (
        <CircularProgress className={classes.loadingSpinnerInLabel} />
    );

    return {
        ...otherProps,
        className: className ? clsx(classes.button, className) : classes.button,
        loadingIcon,
        startIcon: startOrLoadingIcon,
    };
};

export default useButton;
