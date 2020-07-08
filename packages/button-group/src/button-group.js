import Button from '@tractorzoom/button';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const getClassName = (buttonClass, buttonProps) =>
    buttonProps?.className ? clsx(buttonClass, buttonProps.className) : buttonClass;

const ButtonGroup = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.buttonGroup}>
            {props.buttons.map((button) => (
                <Button {...button.props} className={getClassName(classes.button, button.props)} />
            ))}
        </div>
    );
};

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            props: PropTypes.object.isRequired,
        })
    ).isRequired,
};

export default ButtonGroup;
