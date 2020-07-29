import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './styles';

const getColorClassName = (percentage) => {
    if (percentage >= 41) {
        return 'success';
    } else if (percentage >= 21) {
        return 'warning';
    }

    return 'danger';
};

const UsageMeter = (props) => {
    const classes = useStyles(props);
    const colorClassName = getColorClassName(props.percentage);

    return (
        <div className={clsx(classes.container, props.className)}>
            <Box position='relative' display='inline-flex'>
                <CircularProgress variant='static' className={classes.bottom} value={100} />
                <CircularProgress
                    className={clsx(classes.top, classes[colorClassName])}
                    variant='static'
                    value={props.percentage}
                />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position='absolute'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Typography className={classes.label} component='div'>
                        {props.label}
                    </Typography>
                </Box>
            </Box>
            {Boolean(props.title) && (
                <Typography className={clsx(classes.label, classes.title)} component='div'>
                    {props.title}
                </Typography>
            )}
        </div>
    );
};

UsageMeter.defaultProps = {
    className: '',
    darkMode: false,
    label: '',
    title: '',
};

UsageMeter.propTypes = {
    className: PropTypes.string,
    darkMode: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    percentage: PropTypes.number.isRequired,
    title: PropTypes.string,
};

export default UsageMeter;
