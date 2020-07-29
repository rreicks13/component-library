import UsageMeter from '../../packages/usage-meter/src';
import React from 'react';
import propsMarkdown from '../utilities/props/usage-meter.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#6c757d',
        padding: 20,
    },
    margin: {
        margin: 10,
    },
});

storiesOf('Usage Meter', module).add(
    'With dark mode',
    () => {
        const classes = useStyles();

        return (
            <div className={classes.container}>
                <UsageMeter className={classes.margin} darkMode label={100} percentage={100} />
                <UsageMeter className={classes.margin} darkMode label={40} percentage={40} />
                <UsageMeter className={classes.margin} darkMode label={20} percentage={20} />
                <UsageMeter className={classes.margin} darkMode label={0} percentage={0} />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
