import clsx from 'clsx';
import useStyles from './styles';

const useChip = (props) => {
    const classes = useStyles();
    const { active, ...otherProps } = props;
    const className = clsx(classes.chip, props.className, { [classes.active]: active });

    return {
        ...otherProps,
        className,
    };
};

export default useChip;
