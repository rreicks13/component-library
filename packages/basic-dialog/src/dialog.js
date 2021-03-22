import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

const BasicDialog = (props) => {
    const classes = useStyles(props.size);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:1000px)');
    const containerClassName = isMobile
        ? classes.mobileContainer
        : isTablet
        ? classes.smallContainer
        : classes.largeContainer;

    return (
        <Dialog
            fullScreen={isMobile}
            open={props.isOpen}
            onClose={props.close}
            PaperProps={{ className: containerClassName, 'data-tour': props.dataTour }}
        >
            <DialogTitle className={classes.titleContainer} disableTypography>
                {Boolean(props.headerComponent) ? (
                    props.headerComponent
                ) : (
                    <Typography variant='h5'>{props.title}</Typography>
                )}
                <IconButton aria-label='close' onClick={props.close}>
                    <CloseRoundedIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.contentContainer}>{props.children || ''}</DialogContent>
            <DialogActions className={classes.footerContainer}>{props.actionButtons}</DialogActions>
        </Dialog>
    );
};

BasicDialog.defaultProps = {
    actionButtons: [],
    dataTour: '',
    isOpen: false,
};

BasicDialog.propTypes = {
    actionButtons: PropTypes.array,
    children: PropTypes.node,
    close: PropTypes.func.isRequired,
    dataTour: PropTypes.string,
    headerComponent: PropTypes.node,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
};

export default BasicDialog;
