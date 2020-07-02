import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@material-ui/core';
import { isWidthDown } from '@material-ui/core/withWidth';
import useStyles from './styles';
import withWidth from '@material-ui/core/withWidth';

const BasicDialog = (props) => {
    const classes = useStyles();
    const isMobile = isWidthDown('xs', props.width);

    return (
        <Dialog
            fullScreen={isMobile}
            open={props.isOpen}
            onClose={props.close}
            PaperProps={{ className: classes.container }}
        >
            <DialogTitle className={classes.titleContainer} disableTypography>
                <Typography variant='h5'>{props.title}</Typography>
            </DialogTitle>
            <DialogContent>{props.children || ''}</DialogContent>
            <DialogActions>{props.actionButtons}</DialogActions>
        </Dialog>
    );
};

BasicDialog.defaultProps = {
    actionButtons: [],
};

BasicDialog.propTypes = {
    actionButtons: PropTypes.array,
    children: PropTypes.node,
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
};

export default withWidth()(BasicDialog);
