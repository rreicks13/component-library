import React, { useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import useStyles from './styles';
import withWidth from '@material-ui/core/withWidth';

const SidePanel = (props) => {
    const { open, setOpen } = props;
    const isMobile = props.width === 'xs' || props.width === 'sm';
    const classes = useStyles();

    useEffect(() => {
        setOpen(!isMobile);
    }, []);

    console.log('children: ', props.children);

    return (
        <>
            <Drawer
                className={isMobile ? classes.drawerMobile : classes.drawer}
                anchor='left'
                open={open}
                variant='persistent'
                classes={{
                    paper: isMobile ? classes.drawerPaperMobile : classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>
                <Divider className={classes.headerDivider} />
                {props.children.map((child) => {
                    let newChild = { ...child };

                    newChild.props = {
                        ...newChild.props,
                        setOpen: setOpen,
                        isOpen: open,
                    };
                    return newChild;
                })}
            </Drawer>
        </>
    );
};

SidePanel.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default withWidth()(SidePanel);
