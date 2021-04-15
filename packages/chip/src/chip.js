import MuiChip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React from 'react';
import useChip from './hook';

const Chip = (props) => {
    const { ...chipProps } = useChip(props);

    return <MuiChip {...chipProps}></MuiChip>;
};

Chip.defaultProps = {
    active: false,
};

Chip.propTypes = {
    active: PropTypes.bool,
};

export default Chip;
