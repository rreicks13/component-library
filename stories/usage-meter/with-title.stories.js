import UsageMeter from '../../packages/usage-meter/src';
import React from 'react';
import propsMarkdown from '../utilities/props/usage-meter.md';
import { makeStyles } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';

const useStyles = makeStyles({
    container: {
        padding: 20,
    },
    margin: {
        margin: 10,
    },
});

storiesOf('Usage Meter', module).add(
    'With title',
    () => {
        const classes = useStyles();

        return (
            <div className={classes.container}>
                <UsageMeter className={classes.margin} label={200} percentage={100} title='200 of 200 remaining' />
                <UsageMeter className={classes.margin} label={80} percentage={40} title='80 of 200 remaining' />
                <UsageMeter className={classes.margin} label={40} percentage={20} title='40 of 200 remaining' />
                <UsageMeter className={classes.margin} label={0} percentage={0} title='0 of 200 remaining' />
            </div>
        );
    },
    {
        notes: { markdown: propsMarkdown },
    }
);
