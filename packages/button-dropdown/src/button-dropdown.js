import React, { useRef, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PropTypes from 'prop-types';

const ButtonDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleClick = () => {
        props.onChange(props.selectedOption);
    };

    const handleMenuItemClick = (event, index) => {
        props.onChange(props.options[index]);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={props.className}>
            <ButtonGroup variant='contained' color={props.color} ref={anchorRef} aria-label='split button'>
                <Button onClick={handleClick}>
                    {`${props.label ? `${props.label}: ` : ''}${props.selectedOption}`}
                </Button>
                <Button
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label={props.label || 'select an option'}
                    aria-haspopup='menu'
                    color={props.color}
                    onClick={handleToggle}
                    size='small'
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id='split-button-menu'>
                                    {props.options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={option === props.selectedOption}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

ButtonDropdown.defaultProps = {
    className: '',
    color: 'primary',
    label: '',
};

ButtonDropdown.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedOption: PropTypes.string.isRequired,
};

export default ButtonDropdown;
